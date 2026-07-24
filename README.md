# Control · Panel de gastos

Panel de control de gastos estilo BI para uso diario tipo gerente. Un solo archivo (`index.html`), sin backend ni dependencias de instalación — los datos se guardan en el navegador (localStorage).

## Qué incluye

- **Dashboard**: balance total, cinta de balance diario (últimos 30 días), KPIs del mes (ingresos, gastos, resultado neto, % de presupuesto usado), flujo de caja 6/12 meses, gasto por categoría (dona), top categorías (barras), estado de presupuesto y movimientos recientes.
- **Movimientos**: registro completo con búsqueda, filtro por tipo/categoría/mes, edición y eliminación.
- **Presupuestos**: límite mensual por categoría con barra de consumo.
- **Categorías**: crear categorías con ícono, color y presupuesto propio.
- **Reportes**: evolución del balance acumulado, exportación a JSON (respaldo completo) y CSV (movimientos), y borrado de datos.
- Selector de moneda (PEN, USD, EUR, MXN).

## Cómo subirlo a GitHub

1. Crea un repositorio nuevo en GitHub (público si quieres usar GitHub Pages gratis).
2. Sube `index.html` (y este `README.md` si quieres) a la raíz del repositorio:
   ```bash
   git init
   git add index.html README.md
   git commit -m "Panel de control de gastos"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
3. Activa GitHub Pages: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root)**.
4. En un par de minutos tu panel estará disponible en `https://TU_USUARIO.github.io/TU_REPO/`.

## Notas importantes

- **Los datos se guardan localmente en cada navegador** (localStorage), no en un servidor. Si abres la app desde otro dispositivo o navegador no verás el mismo historial. Usa el botón **Exportar datos** (JSON) periódicamente como respaldo, y **Importar datos** para restaurarlo o pasarlo a otro equipo.
- Si necesitas que varias personas vean los mismos datos en tiempo real, este archivo estático no alcanza — se necesitaría una base de datos/backend. Puedo ayudarte a diseñar esa versión si la necesitas más adelante.
- Los gráficos usan Chart.js cargado desde CDN (cdnjs), así que se necesita conexión a internet para que carguen los gráficos (el resto de la app funciona sin conexión).
