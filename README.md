# Horizonte Talento · Explorador de Aula

**Versión: v0.5.0** · **Fecha de preparación: 9 de noviembre de 2026**  
**Autor:** Guillermo Montero Vaquero · CEIP San Andrés (Almaraz, Cáceres)

Aplicación educativa estática destinada a ayudar al profesorado a observar **intereses, preferencias de participación y sensibilidades del entorno** y a explorar apoyos en el aula. Es una herramienta experimental: no constituye diagnóstico, evaluación psicométrica validada ni valoración de terapia ocupacional.

## Funciones

- Recorridos individual y grupal (hasta 30 alumnos) de Infantil, Primaria y 1.º–2.º de ESO.
- Tres módulos seleccionables: **Intereses** (12 cuestiones), **Personalidad y preferencias** (24 observaciones) y **Sensibilidades** (21 observaciones propias y provisionales).
- Gráficas radiales, informes individuales y visión grupal con propuestas de actuación **específicas para los alumnos implicados** y para el conjunto de la clase.
- Orientaciones para adaptar el entorno, una propuesta educativa de rutina sensorial y seguimiento; no es una dieta sensorial clínica.
- Demostración con Lucía, Hugo y Martina; nombres o seudónimos opcionales en la exploración real.
- Informes PDF descargables, aparte de la impresión convencional.
- Recuperación de exploraciones en la misma pestaña al volver al inicio o recargar, con borrado explícito.

## Privacidad y límites

Las respuestas, nombres o seudónimos **no se envían a ningún servidor de la aplicación**: el tratamiento y la exportación PDF funcionan en el navegador. Se utiliza **`sessionStorage`**, que normalmente conserva datos al recargar la misma pestaña; el cierre o restauración de pestañas depende del navegador. **No debe considerarse un almacenamiento permanente ni un sistema seguro de custodia de expedientes.** Se recomienda emplear seudónimos y pulsar «Borrar todas las exploraciones» al terminar en equipos compartidos.

El módulo sensorial no reproduce el cuestionario Koynos, no utiliza sus baremos y **no diagnostica** alteraciones sensoriales; las orientaciones se revisan con la observación docente, el alumno y orientación cuando corresponda. Los perfiles de personalidad son descriptivos y sus reglas experimentales no están validadas clínicamente.

## Publicar en el repositorio existente

Repositorio: https://github.com/gmonterov84-voli/horizonte-talento-perfiles  
Rama: **`main`** · Carpeta Pages: **`/(root)`**.

1. Conserva una copia de la versión anterior y comprueba que no haya cambios nuevos en el repositorio antes de subir nada.
2. **Extrae** el ZIP de publicación: **no subas el ZIP como sustituto de `index.html`**.
3. En GitHub, abre el repositorio y usa **Add file → Upload files**. Arrastra `index.html`, `README.md`, `CHANGELOG.md` y `RELEASE_NOTES_v0.5.0.md` extraídos a la **raíz**. `index.html` y `README.md` reemplazan los anteriores. El archivo `.nojekyll` ya existe en el repositorio: **consérvalo sin eliminarlo** (también hay copia vacía en este paquete para instalaciones nuevas).
4. Commit recomendado: **`Publicar Explorador de Aula v0.5.0`**.
5. Comprueba la web de GitHub Pages después del despliegue; el commit es el que actualiza la web. La creación de una Release por sí sola no actualiza Pages.
6. En **Releases → Draft a new release**, crea la etiqueta **`v0.5.0`**, título **`Explorador de Aula v0.5.0`** y pega el contenido de `RELEASE_NOTES_v0.5.0.md` en el campo de descripción. Opcional: adjunta el ZIP como recurso descargable de esa Release.

## Verificaciones recomendadas tras subir

- Abrir la demo y recorrer informes de Lucía, Hugo y Martina; comprobar los tres apartados y orientaciones por nombre.
- Iniciar un grupo real pequeño y confirmar navegación al inicio, retorno al resumen e informes individuales sin perder datos.
- Descargar un PDF individual y otro grupal; si la impresión falla en el navegador interno, usar un navegador convencional.
- Abrir en ordenador y móvil, revisar el indicador visible **v0.5.0** y verificar que siguen los avisos de carácter experimental.
- Comprobar el enlace público y que no se ha modificado la configuración de Pages.

Consulta `CHANGELOG.md` para el historial y `RELEASE_NOTES_v0.5.0.md` para el texto listo para pegar en GitHub Releases.
