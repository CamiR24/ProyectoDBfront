# ProyectoDBfront

Este proyecto es el frontend de la aplicación hospitalaria, desarrollado con React y Vite.

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- [npm](https://www.npmjs.com/) (se instala junto con Node.js)

## Instalación

1. Clona el repositorio o descarga el código fuente.
2. Abre una terminal en la carpeta `ProyectoDBfront`.
3. Instala las dependencias ejecutando:

   ```bash
   npm install
   ```

## Ejecución en modo desarrollo

Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador:

```bash
npm run dev
```

Esto abrirá la app en [http://localhost:5173](http://localhost:5173) (o el puerto que indique la terminal).

## Notas

- Asegúrate de que el backend esté corriendo en [http://localhost:8000](http://localhost:8000) para que la app pueda comunicarse correctamente.
- Si cambias el puerto del backend, actualiza las URLs en los archivos del frontend donde se hacen peticiones fetch.
- Puedes modificar los estilos en la carpeta `src/styles`.

## Scripts útiles

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza la versión de producción localmente.

## Configuración de CORS para el Frontend

Por defecto, el backend permite solicitudes solo desde `http://localhost:5173` (puerto estándar de Vite/React).  
Si tu frontend corre en otro puerto (por ejemplo, `http://localhost:3000`), debes modificar la siguiente línea en `app/main.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Cambia aquí el puerto si es necesario
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

**Ejemplo:**  
Si tu frontend corre en el puerto 3000, cambia la línea por:

```python
allow_origins=["http://localhost:3000"],
```

Guarda el archivo y reinicia el backend para aplicar los cambios.

---

¡Listo! Ahora puedes empezar a trabajar en el frontend de tu proyecto hospitalario.