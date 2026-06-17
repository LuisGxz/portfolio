# Design Brief — Portfolio de Luis Chiquito Vera

> **Para quién es esto:** pégalo en Claude (claude.ai, modo diseño / artifacts). Pídele que genere **un mockup de diseño por proyecto** y al final **un ZIP con todo**.
>
> **Objetivo:** definir la identidad visual (paleta, tipografía, layout) de cada proyecto del portfolio, de forma **ligera**, para luego implementarla en código con Claude Code.

---

## 0. Instrucciones para Claude (diseño) — LÉELAS PRIMERO

Eres un diseñador de producto senior. Vas a crear los mockups visuales de **14 proyectos** de portfolio. Cada proyecto tiene una identidad propia acorde a su dominio (fintech, salud, IA, etc.).

### Formato de entrega (IMPORTANTE — mantenlo ligero)

Para **cada** proyecto entrega **un único archivo HTML autocontenido**:

- Nombre: `NN-nombreproyecto.html` (ej: `01-finpulse.html`).
- **Tailwind vía CDN** (`<script src="https://cdn.tailwindcss.com"></script>`) — sin build, sin node_modules, abre directo en el navegador.
- Fuentes vía Google Fonts (`<link>`).
- Iconos: Lucide vía CDN o SVG inline. **No** uses imágenes pesadas; usa placeholders con `bg-gradient` o bloques de color y datos *seed* realistas (nombres, montos, fechas creíbles — nada de "Lorem ipsum").
- En **un solo HTML** muestra las **2–3 pantallas clave** del proyecto, una debajo de otra, separadas por un encabezado de sección (ej: `<!-- Pantalla 1: Dashboard -->`).
- Debe verse pulido y responsive (mobile-first). Incluye modo oscuro donde el prompt lo pida.

Además, **un archivo extra**: `00-design-tokens.md` con, **por proyecto**, una tabla de:
- Paleta (hex de primario, secundario, acentos, fondo, texto, estados).
- Tipografías (display + body, con su Google Font).
- Radio de bordes, sombras y "tono" (1 línea describiendo la sensación).

### Al final
Empaqueta **todos los `.html` + `00-design-tokens.md`** en un **único ZIP** llamado `portfolio-designs.zip` y entrégalo para descargar.

### Principios transversales (todos los proyectos)
- Nada de estética "AI genérica" (degradados morados por defecto, cards flotantes random). Diseño **intencional** por dominio.
- Jerarquía visual clara, espaciado generoso y consistente (escala 4/8px).
- Accesibilidad: contraste AA, foco visible, tamaños táctiles ≥44px.
- Microinteracciones descritas con clases/transiciones de Tailwind (`transition`, `hover:`, `animate-`).
- Datos realistas en cada pantalla.

---

## 1. Los 14 proyectos a diseñar

> Cada bloque = un archivo HTML. El dominio y la sensación importan tanto como las pantallas.

### 01 · FinPulse — Banca personal (Fintech)
Dashboard de banca personal premium. Estética: confianza financiera moderna — fondo oscuro elegante (deep navy/charcoal) con acentos verde menta y detalles dorados sutiles. Tipografía geométrica sans (Inter/Geist) con números tabulares para montos. **Pantallas:** (1) Dashboard con tarjeta de saldo grande, gráfico de área de flujo de efectivo, lista de transacciones recientes con iconos por categoría; (2) detalle/transferencia con stepper; (3) presupuestos con barras de progreso. Microinteracciones: conteo animado en montos, skeletons. Modo oscuro por defecto. Sensación Revolut/Wise con identidad propia.

### 02 · MediTrack — Telemedicina (Salud)
Plataforma clínica. Estética: clínica moderna y tranquila — blancos limpios, azul confianza (#2563EB) y verde salud como acento, mucho espacio en blanco, esquinas suaves, sombras sutiles. Tipografía legible (Inter). **Pantallas:** (1) Dashboard del médico con citas del día en timeline; (2) ficha de paciente con tabs (datos/historia/recetas); (3) calendario de reservas en grilla horaria. Badges de estado (confirmada/pendiente/cancelada). Accesibilidad AA prioritaria. Profesional, segura y humana.

### 03 · CivicDesk — Trámites ciudadanos (Gobierno)
Portal de trámites gubernamentales. Estética: institucional pero moderno y accesible — azul institucional (#1E3A8A), gris neutro, blanco, acento ámbar (alertas) y verde (aprobado). Tipografía clara y oficial. WCAG AA, alto contraste, claridad ante todo. **Pantallas:** (1) catálogo de trámites en grid con iconos; (2) formulario de solicitud con stepper y subida de documentos; (3) seguimiento de estado en timeline vertical. Transmite transparencia y confianza pública.

### 04 · FleetGo — Logística & tracking (Ionic/móvil)
App móvil de repartidor + panel web de logística. Estética: enérgica y operativa — naranja logística (#F97316) y azul oscuro, alto contraste para sol, botones grandes táctiles. **Pantallas:** (móvil) (1) lista de entregas del día en tarjetas con estado; (2) detalle con mapa y botón grande "Marcar entregado" + firma; (web) (3) mapa fullscreen con pines de unidades en vivo, sidebar de pedidos y métricas. Modo oscuro para conducción nocturna. Mobile-first absoluto.

### 05 · ShopForge — E-commerce
Tienda online premium. Elige un nicho con personalidad (café de especialidad o sneakers). Estética editorial y aspiracional — fotografía protagonista (usa bloques/gradientes como placeholder), mucho espacio negativo, tipografía display de impacto + sans legible, paleta cálida refinada. **Pantallas:** (1) home con hero y grid de destacados; (2) detalle de producto con galería, selector y reviews; (3) checkout en pasos / panel admin con dashboard de ventas. Hover en cards, animación "añadir al carrito". Modo claro elegante.

### 06 · PulseBoard — Analítica de datos (BI)
Plataforma de analítica. Estética: data-dense pero elegante, "command center" — fondo grafito oscuro, acentos cian/violeta neón para datos, tipografía mono para números. **Pantallas:** (1) dashboard con grid de widgets (KPIs grandes, gráficos línea/barra/dona/heatmap); (2) constructor con drag & drop; (3) tabla de dataset con filtros. Gráficos protagonistas, tooltips ricos. Inspiración Grafana/Vercel Analytics más pulido.

### 07 · TeamFlow — Gestión de proyectos (SaaS)
SaaS tipo Linear/Height. Estética: minimalista y rápido — gris muy claro (y variante oscura), un único acento vibrante (índigo/violeta), tipografía nítida, densidad alta pero ordenada, atajos de teclado visibles. **Pantallas:** (1) tablero Kanban con cards arrastrables y avatares; (2) panel lateral de detalle de tarea; (3) vista lista/tabla. Transiciones de 150ms. Modo oscuro de primera clase. Veloz y "pro".

### 08 · NestHunt — Inmobiliaria con mapas (React)
Portal inmobiliario. Estética: cálida y aspiracional tipo Airbnb — blancos, tierra/coral suaves, fotografía grande (placeholders), tipografía amable redondeada. **Pantallas:** (1) búsqueda split-view (cards a la izquierda + mapa a la derecha, sincronizados al hover); (2) detalle de propiedad con galería y mapa de zona; (3) filtros como chips/sliders. Cards con foto, precio, badges. Mobile: mapa colapsable. Cálido y confiable.

### 09 · LearnLoop — Plataforma educativa (LMS)
Cursos online. Estética: amigable y motivadora tipo Duolingo/Coursera moderno — paleta vibrante equilibrada (verde aprendizaje + acento cálido), iconos redondeados, gamificación sutil (progreso, rachas, badges). **Pantallas:** (1) catálogo en grid con thumbnails y progreso; (2) vista de lección con reproductor, módulos laterales y barra de progreso; (3) quiz interactivo con feedback. Microinteracción de logro (confetti al completar). Motiva a seguir.

### 10 · ChatSphere — Mensajería en tiempo real
App tipo Slack/Discord. Estética: moderna y enfocada — modo oscuro por defecto (grafito + acento púrpura/azul eléctrico), tipografía compacta legible, layout 3 columnas (canales | mensajes | miembros). **Pantallas:** (1) canal con mensajes agrupados por usuario, "escribiendo...", reacciones; (2) lista de canales con badges de no leídos; (3) panel de miembros con presencia. Aparición suave de mensajes, hover muestra acciones. Cómodo para uso prolongado.

### 11 · DocuMind — Asistente IA de documentos (IA/RAG)
Asistente de IA para documentos. Estética: IA moderna y confiable — fondo claro neutro (y variante oscura), acento en gradiente sutil azul→violeta sin clichés, tipografía limpia. **Pantallas:** (1) split-view: visor de documento (PDF simulado) a la izquierda, chat a la derecha con respuestas en streaming y citas resaltadas; (2) biblioteca de documentos en grid; (3) estado de procesamiento con progreso. Efecto typing en respuestas, resaltado de cita al hover. Inteligente, no recargado.

### 12 · SensorScope — Monitoreo IoT
Dashboard IoT industrial. Estética: panel de control técnico — fondo oscuro profundo, acentos por estado (verde OK, ámbar advertencia, rojo crítico), tipografía mono para lecturas, sensación "sala de control". **Pantallas:** (1) grid de tarjetas por dispositivo con lectura grande en vivo, mini-sparkline y estado; (2) detalle con gráficos de series temporales y panel de umbrales; (3) feed de alertas. Pulso al dato nuevo, parpadeo suave en críticos. Denso pero legible.

### 13 · TastyTable — Reservas de restaurantes (Ionic)
App móvil de reservas. Estética: apetitosa y elegante — paleta cálida (terracota/borgoña + crema), fotografía de comida protagonista (placeholders), serif display para nombres + sans para UI. **Pantallas:** (1) descubrir: cards de restaurante con foto, rating y "disponible hoy"; (2) detalle con galería, menú destacado y selector de reserva (fecha/hora/personas); (3) confirmación tipo ticket. Mobile-first (estilo app nativa), transiciones suaves. Da hambre y confianza.

### 14 · CryptoVault — Mercados cripto (React)
Dashboard de mercados cripto. Estética: terminal financiera moderna — fondo negro/grafito, verde y rojo precisos para sube/baja, acento neón sutil, tipografía mono para precios con tabular nums. **Pantallas:** (1) overview con tabla de mercado (precio, cambio 24h, sparkline, market cap) ordenable; (2) detalle de moneda con gráfico de velas y selector de timeframe; (3) portafolio con valor total, distribución (dona) y holdings con P&L coloreado. Flash verde/rojo al cambiar precio. Denso, rápido, "pro-trader". Modo oscuro absoluto.

---

## 2. Checklist final para Claude (diseño)
- [ ] 14 archivos `NN-nombre.html`, cada uno con sus 2–3 pantallas, Tailwind CDN, responsive, datos realistas.
- [ ] `00-design-tokens.md` con paleta + tipografía + tono por proyecto.
- [ ] Todo empaquetado en **`portfolio-designs.zip`** descargable.
