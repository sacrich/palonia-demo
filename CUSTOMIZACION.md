# Personalización de la demo Palonia (Solution Engineer)

Copia local de las pantallas publicadas en GitHub Pages, lista para adaptar a tu cuenta o historia de cliente en demos de **Agentforce**, **Data Cloud** y **Service Cloud**.

## Estructura del proyecto

```
WORLD TOUR - TLV 2026/
└── palonia-demo/
    ├── index.html                              ← menú de navegación
    ├── agenticEmailPaloniaEN.html              ← canal Email
    ├── agenticwebPaloniaEN.html                ← canal Web
    ├── agenticWhatsappPaloniaModificaReservaEN.html
    ├── fichaclientePaloniaEN.html              ← perfil 360 / Data Cloud
    ├── CUSTOMIZACION.md
    └── assets/                                 ← logos e imágenes (offline)
```

Ruta absoluta del hub:

`/Users/sacrich/Desktop/WORLD TOUR - TLV 2026/palonia-demo/index.html`

## Cómo abrir la demo en local

### Opción A — Servidor local (recomendado)

Desde Terminal:

```bash
cd "/Users/sacrich/Desktop/WORLD TOUR - TLV 2026/palonia-demo"
python3 -m http.server 8080
```

Abre en el navegador: **http://localhost:8080/** (entra por `index.html`).

### Opción B — Abrir archivo directamente

Doble clic en `index.html` o arrástralo al navegador. Puede funcionar, pero algunos navegadores limitan scripts locales; si algo falla, usa la opción A.

## Qué necesita internet

| Recurso | Origen |
|--------|--------|
| Imágenes de marca Palonia | Carpeta `assets/` (sin internet) |
| React, ReactDOM, Babel | unpkg.com |
| Tailwind CSS | cdn.tailwindcss.com |
| Fuentes (Google Fonts) | fonts.googleapis.com |
| Font Awesome | cdnjs.cloudflare.com |
| Foto de cliente (Unsplash) | Solo en `fichaclientePaloniaEN.html` |

Para demo **sin red**, tendrías que descargar también esos CDN y cambiar las etiquetas `<script>` / `<link>` en cada HTML.

## Qué personalizar para tu demo de Salesforce

1. **Marca y logos** — Sustituye los PNG/WebP en `assets/` (mismos nombres de archivo) o cambia las rutas en los HTML. Archivos clave: `palonia-primary-logo-01.png`, `palonia-primary-logo-white-01.png`, `palonia-icon.png`, `agentforce_icon.webp`.

2. **Nombre del cliente** — Busca `Sarah` en los cuatro HTML y en la ficha cliente; cámbialo por el nombre del prospecto o persona ficticia de la cuenta.

3. **Referencias de reserva** — Ejemplo actual: `BCL-8472`, URLs tipo `Palonia.com/modify/...`. Alinea con el guion de tu historia (código de booking, enlace de pago, etc.).

4. **Nombre de la empresa** — Busca `Palonia`, `Palonia Hotel Group`, títulos de página y textos del agente; reemplaza por el hotel, retailer o marca del cliente.

5. **Mensajes Agentforce / Data Cloud** — En `fichaclientePaloniaEN.html` revisa transcripciones, resúmenes de sesión y pestañas (affinities, related). En WhatsApp/Web/Email ajusta el guion del bot para reflejar acciones (modificar reserva, upsell, handoff a humano).

6. **Idioma** — Los archivos están en inglés (`*EN.html`). Puedes duplicar un HTML y traducir strings dentro de `<script type="text/babel">` o del HTML estático.

## Flujo sugerido en presentación

1. Abre **index.html** y presenta el hub omnicanal.
2. **WhatsApp** o **Web** — interacción del agente con el huésped.
3. **Email** — confirmación / marketing post-interacción.
4. **Ficha cliente** — vista 360 unificada y sesiones Agentforce en Data Cloud.

## Origen de los archivos

Descargados desde URLs públicas (sin acceso al repositorio Git):

- https://jcompan.github.io/Palonia/

No modifiques el sitio original; trabaja solo en esta carpeta `palonia-demo/`.
