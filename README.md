# Horizonte Talento · Explorador de Aula

**Versión: 0.7.0 · 9 de noviembre de 2026**  
**Autor de la herramienta:** Guillermo Montero Vaquero  
**Centro:** CEIP San Andrés · Almaraz (Cáceres)

Herramienta web educativa para explorar **intereses**, **personalidad y preferencias de aprendizaje**, y **sensibilidades del entorno** de forma individual o grupal. Ofrece gráficos radiales y propuestas orientativas para la planificación docente.

## Contenido del repositorio

- `index.html`: aplicación completa. El HTML incorpora CSS, JavaScript y logotipos en un único archivo, sin dependencias externas para funcionar.
- `README.md`: descripción y guía de publicación.
- `CHANGELOG.md`: historial resumido de versiones.
- `RELEASE_NOTES_v0.7.0.md`: texto preparado para la descripción de la Release de GitHub.
- `.nojekyll`: archivo necesario para conservar el comportamiento de GitHub Pages configurado para el proyecto.

## Funcionalidades

- Exploración **individual o grupal** con identificación opcional mediante nombre o seudónimo.
- Elección de etapa, curso y uno o varios cuestionarios; los módulos no seleccionados no generan conclusiones.
- Personalidad y preferencias: observaciones educativas descriptivas, **no una prueba psicométrica**.
- Intereses: preguntas y propuestas de enriquecimiento con retos, productos y evidencias de aprendizaje.
- Sensibilidades del entorno: observaciones propias provisionales y ajustes ambientales sugeridos; **no** equivale a una dieta sensorial clínica ni reproduce el cuestionario original Koynos.
- Informes individuales en formato **portfolio**, informes de grupo, gráficos radiales y recomendaciones identificadas por destinatario.
- Tarjetas y orientaciones desplegables; demostración ficticia con Lucía, Hugo y Martina.
- Posibilidad de retomar evaluaciones durante la sesión de la pestaña y descargar informes como PDF.
- Diseño adaptable a móvil, con menú lateral plegable y elementos institucionales del CEIP San Andrés y la Consejería.

## Privacidad y uso responsable

Las respuestas se calculan **en el navegador**. La aplicación **no las envía deliberadamente a un servidor** y utiliza `sessionStorage` para conservar el trabajo temporalmente dentro de una pestaña. La información suele permanecer tras recargar, pero normalmente se pierde al cerrar la pestaña. Algunos navegadores restauran sesiones cerradas: **cerrar no garantiza el borrado seguro**.

Se recomienda usar **seudónimos**, no introducir datos especialmente sensibles, descargar los informes necesarios en un entorno autorizado y utilizar la opción de **borrar las exploraciones** cuando se finalice. Los PDF descargados quedan almacenados en el dispositivo y deben protegerse conforme a la normativa aplicable y las pautas del centro.

Esta herramienta **no diagnostica**, no sustituye la observación docente, la evaluación psicopedagógica ni la valoración profesional en integración sensorial. Las recomendaciones deben contextualizarse y evaluarse antes de aplicarse.

## Publicación en GitHub Pages

Repositorio: https://github.com/gmonterov84-voli/horizonte-talento-perfiles

1. Descarga el paquete ZIP de la versión 0.7.0 y **descomprímelo**.
2. En el repositorio, entra en la rama `main` y utiliza **Add file → Upload files**.
3. Sube **los archivos que están dentro del ZIP**, no el ZIP. Sustituye `index.html` y `README.md`; conserva `.nojekyll`. Añade `CHANGELOG.md` y `RELEASE_NOTES_v0.7.0.md`.
4. Confirma el cambio (commit). En **Settings → Pages**, conserva la rama/carpeta que ya alimenta tu web.
5. Abre la URL real de la web y verifica una evaluación individual, el informe grupal, la persistencia en la pestaña y la descarga de PDF.
6. Crea una **Release** en **Releases → Draft a new release**, con el tag `v0.7.0`, el título `Explorador de Aula v0.7.0` y el contenido de `RELEASE_NOTES_v0.7.0.md`.

**Importante:** el paquete se entrega para publicación manual. Su preparación no modifica automáticamente el repositorio ni demuestra que GitHub Pages esté actualizado.

## Créditos institucionales

La interfaz incorpora los logotipos suministrados por el usuario del **CEIP San Andrés de Almaraz** y la **Junta de Extremadura / Consejería de Educación y Formación Profesional** como identificación contextual del centro. Su presencia **no implica validación ni aval institucional de los cuestionarios o sus conclusiones**.
