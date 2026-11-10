# Horizonte Talento · Explorador de Aula v0.8.0 (prototipo de revisión)

**Estado:** Borrador funcional, no publicado. Preparado para revisión pedagógica antes de actualizar GitHub.

## ¿Qué cambia en Secundaria?

Al elegir la etapa **Secundaria** (1.º–4.º ESO) y activar **Sensibilidades**, en el paso «Antes de empezar» se puede seleccionar:

- **Autoevaluación del estudiante**: 21 preguntas sensoriales, 4 de autorregulación y 2 de selección múltiple (situaciones y apoyos). Total: 27 pantallas.
- **Observación del profesorado**: los mismos siete ámbitos, adaptados a conductas observadas o comunicadas, más las cuatro preguntas de autorregulación y los dos apartados cerrados. Total: 27 pantallas.
- **Ambas perspectivas**: las dos modalidades independientes, 54 pantallas, sin sumar ni promediar resultados.

**Todas las respuestas son cerradas**. Para las preguntas de frecuencia se ofrecen cinco niveles y opciones para indicar desconocimiento, ausencia de experiencia o preferencia por no responder. Las respuestas no valorables no se convierten en cero.

Las preguntas de selección múltiple tienen las opciones «Ninguna» y «No sé / No dispongo de información», que son excluyentes. Cada opción relevante genera una orientación contextual o una estrategia para probar y revisar. Las conductas de autorregulación están separadas del recuento de sensibilidades.

## Demostración ficticia

La aplicación conserva **una única demostración**, la original, accesible desde la pantalla de inicio mediante «Ver una demostración ficticia». Usa tres estudiantes ficticios —**Lucía, Hugo y Martina**— y muestra los cuestionarios de Primaria. No se incluye una demostración adicional para Secundaria; esa modalidad se puede probar contestando los cuestionarios desde el recorrido habitual.

## Conservado de v0.7.0

- Los módulos de intereses y personalidad/preferencias.
- Las 21 observaciones originales de sensibilidades para Infantil y Primaria.
- Los informes, gráficas radiales, estilo del portfolio, orientaciones pedagógicas y navegación.
- El guardado temporal en la pestaña mediante `sessionStorage` y la exportación local a PDF.

## Alcance y cautelas

- Este cuestionario **no está validado** y no es una herramienta diagnóstica ni una prueba psicométrica.
- El recuento de respuestas frecuentes por ámbito es descriptivo; **no es una puntuación clínica** ni mide intensidad.
- Las respuestas del estudiante y del profesorado **no se comparan como si una fuese más correcta**. Las diferencias invitan a conversar y observar situaciones concretas.
- Las propuestas de apoyo deben acordarse y comprobarse con el alumnado; no se prescribe una dieta sensorial terapéutica.
- Se recomienda usar seudónimos para las pruebas. Los datos no se envían a un servidor; se almacenan temporalmente en la pestaña. Los PDF descargados deben tratarse como documentos que pueden contener información personal.
- Los logos identifican el entorno escolar, no acreditan ni validan científicamente el cuestionario.

**Autor:** Guillermo Montero Vaquero · Horizonte Talento · CEIP San Andrés (Almaraz).
