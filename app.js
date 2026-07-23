let gastos =
JSON.parse(localStorage.getItem("gastos")) || [];

let presupuesto =
localStorage.getItem("presupuesto") || 0;


let chartCategoria;
let chartLinea;



function agregarGasto(){


let fecha =
document.getElementById("fecha").value;


let categoria =
document.getElementById("categoria").value;


let monto =
Number(document.getElementById("monto").value);



if(!fecha || !monto){

alert("Completa los datos");

return;

}



gastos.push({

fecha,
categoria,
monto

});



guardar();


mostrar();


}





function guardar(){

localStorage.setItem(
"gastos",
JSON.stringify(gastos)
);

}





function mostrar(){


let tabla="";


gastos.forEach((g,i)=>{


tabla +=`

<tr>

<td>${g.fecha}</td>

<td>${g.categoria}</td>

<td>
S/ ${g.monto}
</td>

<td>

<button onclick="eliminar(${i})">
❌
</button>

</td>

</tr>


`;

});


document.getElementById("tabla")
.innerHTML=tabla;



actualizarDashboard();


}





function eliminar(i){

gastos.splice(i,1);

guardar();

mostrar();

}





function actualizarDashboard(){


let total =
gastos.reduce(
(a,b)=>a+b.monto,
0
);



document.getElementById("total")
.innerHTML=
"S/ "+total.toFixed(2);



let estado =
document.getElementById("estado");



if(presupuesto>0){


let porcentaje=
(total/presupuesto)*100;



estado.innerHTML=
porcentaje.toFixed(0)
+"% usado";


if(porcentaje>=90){

estado.innerHTML+=
" ⚠️ ALERTA";

}


}





crearGraficos();


}




function guardarPresupuesto(){


presupuesto =
Number(
document.getElementById("presupuesto").value
);


localStorage.setItem(
"presupuesto",
presupuesto
);


actualizarDashboard();


}






function crearGraficos(){


let categorias={};


gastos.forEach(g=>{


categorias[g.categoria]=
(categorias[g.categoria]||0)
+g.monto;


});



if(chartCategoria)
chartCategoria.destroy();


chartCategoria=
new Chart(
document.getElementById(
"graficoCategoria"
),
{

type:"doughnut",

data:{

labels:Object.keys(categorias),

datasets:[{

data:Object.values(categorias)

}]

}

});






if(chartLinea)
chartLinea.destroy();



chartLinea=
new Chart(

document.getElementById(
"graficoLinea"
),

{

type:"line",

data:{

labels:gastos.map(
g=>g.fecha
),

datasets:[{

label:"Gastos",

data:gastos.map(
g=>g.monto
)

}]

}

});


}





function exportarCSV(){


let csv=
"Fecha,Categoria,Monto\n";


gastos.forEach(g=>{


csv+=
`${g.fecha},${g.categoria},${g.monto}\n`;


});


let blob =
new Blob(
[csv],
{
type:"text/csv"
}
);



let a=document.createElement("a");

a.href=
URL.createObjectURL(blob);


a.download=
"gastos.csv";


a.click();


}






function exportarPDF(){

window.print();

}






document
.getElementById("modo")
.onclick=()=>{


document.body
.classList.toggle("light");


}




mostrar();
