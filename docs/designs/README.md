# Diseños del portfolio — carpeta de entrega

> Aquí va el contenido del ZIP que genera Claude (diseño) a partir de `../DESIGN_BRIEF.md`.

## Qué poner aquí
Descomprime `portfolio-designs.zip` directamente en esta carpeta. Debe quedar:

```
docs/designs/
├── 00-design-tokens.md      ← paleta + tipografía + tono por proyecto
├── 01-finpulse.html
├── 02-meditrack.html
├── 03-civicdesk.html
├── 04-fleetgo.html
├── 05-shopforge.html
├── 06-pulseboard.html
├── 07-teamflow.html
├── 08-nesthunt.html
├── 09-learnloop.html
├── 10-chatsphere.html
├── 11-documind.html
├── 12-sensorscope.html
├── 13-tastytable.html
└── 14-cryptovault.html
```

## ⚠️ NOTA PARA CLAUDE CODE (leer al iniciar cualquier proyecto)
Antes de implementar el frontend de **cualquier** proyecto:
1. Abre el `.html` correspondiente en esta carpeta (es la fuente de verdad del diseño).
2. Lee `00-design-tokens.md` para extraer paleta, tipografía y tono exactos.
3. Traduce esos tokens al stack del proyecto (Angular/Tailwind, React/Tailwind, etc.) — **no reinventes el diseño**, replícalo y mejóralo en código.

El diseño en HTML es solo el mockup de referencia; la implementación real va en el repo independiente de cada proyecto (ver estructura en `../PORTFOLIO_PROJECTS.md`).
