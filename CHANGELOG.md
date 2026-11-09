# Historial de cambios · Explorador de Aula

Las revisiones internas v2–v6 del prototipo se agrupan en la siguiente versión pública, **v0.5.0**. La publicación previa del repositorio corresponde a **v0.4**.

## [0.5.0] — 2026-11-09

### Incorporado
- Módulo de sensibilidades con 21 observaciones propias, orientaciones educativas individuales y propuesta de ajustes del entorno con seguimiento de cinco días.
- Resumen grupal integrado de **intereses, personalidad y sensibilidades**, con gráficos radiales y recomendaciones con **destinatarios identificados**.
- Demostración completa con tres estudiantes ficticios (Lucía, Hugo y Martina).
- Nombres o seudónimos opcionales, reflejados en informes y propuestas.
- Guardado temporal de múltiples exploraciones dentro de la pestaña, reanudación y borrado manual.
- Exportación directa de PDF individual y grupal, independiente de `window.print()`; enlaces alternativos para abrir/descargar.
- Indicador visible **v0.5.0** en la interfaz y en los PDF.

### Mejorado
- Navegación entre inicio, evaluación grupal e informes individuales sin pérdida del trabajo de la misma sesión.
- Recomendaciones del grupo separadas entre propuestas para cada estudiante y medidas válidas para la clase.
- Redacción de los apartados de personalidad: menos recuentos técnicos en el texto explicativo.
- Presentación responsive y accesibilidad básica de botones y avisos.

### Limitaciones conocidas
- Instrumentos orientativos y experimentales: no están validados como pruebas psicométricas o clínicas.
- Sensibilidades: preguntas propias provisionales, **no** reproducción de Koynos.
- `sessionStorage` puede desaparecer al cerrar pestaña o según privacidad del navegador; no hay copia en servidor.
- La impresión y las descargas pueden verse restringidas por navegadores integrados; se incluye exportación PDF como alternativa.

## [0.4] — 2026-11-05

- Versión anterior publicada del Explorador de Perfiles e Intereses con cuestionario de preferencias, intereses, recomendaciones y banco de retos.
