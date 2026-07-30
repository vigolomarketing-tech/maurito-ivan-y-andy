# MIA Tech — Sitio web

Sitio web profesional para **MIA Tech** (Maurito, Iván y Andy): venta de
periféricos y componentes, y servicio técnico de PC (limpieza, pasta térmica,
mantenimiento, instalación de componentes, armado y diagnóstico).

El objetivo del sitio es **generar consultas y ventas por WhatsApp**.

- **Stack:** HTML + CSS + JavaScript puro (sin frameworks ni backend).
- **Hosting:** GitHub Pages (workflow de GitHub Actions incluido).
- **Diseño:** oscuro, tecnológico, gamer/premium y 100% responsive.

---

## 📁 Estructura del proyecto

```
.
├── index.html                # Estructura y contenido de la página
├── styles.css                # Estilos (tokens de color/tamaño en :root)
├── script.js                 # Datos editables + interactividad
├── robots.txt                # SEO
├── sitemap.xml               # SEO
├── .nojekyll                 # Sirve /assets tal cual en GitHub Pages
├── assets/
│   ├── favicon.svg           # Ícono del sitio
│   ├── og-image.svg          # Imagen para redes (Open Graph)
│   └── img/                  # Ilustraciones de productos y antes/después
└── .github/workflows/deploy.yml   # Despliegue automático a GitHub Pages
```

> Casi todo el **contenido editable vive en `script.js`** (arriba de todo).
> Es el archivo que vas a tocar para cambiar datos, productos y textos.

---

## ⚙️ Datos temporales que TENÉS que reemplazar

Están todos en `script.js`, en el objeto **`CONFIG`** (arriba de todo):

| Dato        | Valor temporal actual              | Dónde |
|-------------|------------------------------------|-------|
| WhatsApp    | `5491100000000`                    | `CONFIG.phone` (solo números, formato internacional) |
| Tel. visible| `+54 9 11 0000-0000`               | `CONFIG.phoneDisplay` |
| Instagram   | `@miatech` / URL                   | `CONFIG.instagram`, `CONFIG.instagramUrl` |
| Correo      | `contacto@miatech.com`             | `CONFIG.email` |
| Zona        | `Zona Sur, Buenos Aires`           | `CONFIG.zone` |
| Horario     | `Lunes a sábado, con coordinación previa` | `CONFIG.hours` |

También conviene actualizar la URL pública en:
`index.html` (etiquetas `og:url` y `canonical`), `robots.txt` y `sitemap.xml`,
y los datos estructurados `LocalBusiness` dentro de `index.html`.

> El número de WhatsApp va **sin** el signo `+`, sin espacios ni guiones.
> Ejemplo para Argentina: `54` + `9` + código de área sin 0 + número sin 15.

---

## 🛒 Cómo editar los PRODUCTOS

En `script.js`, editá el arreglo **`PRODUCTOS`**. Cada producto:

```js
{
  name: 'Teclado mecánico RGB',        // Nombre
  cat:  'Teclados',                    // Categoría (debe coincidir con una de CATEGORIAS)
  tag:  'Destacado',                   // Etiqueta: 'Destacado' | 'Nuevo' | 'Recomendado' | ''
  img:  'assets/img/prod-teclado.svg', // Imagen (ver más abajo)
  desc: 'Switches con retroiluminación y buena respuesta.',
}
```

- Los productos son **demostrativos**: no hay stock ni precios reales.
- Los filtros por categoría se generan solos a partir de `cat`.
- El botón "Consultar por WhatsApp" arma el mensaje con el nombre del producto.

### Categorías
Editá el arreglo **`CATEGORIAS`**. El campo `icon` usa el set interno `ICONS`
(claves disponibles: `keyboard, mouse, headset, monitor, ram, ssd, psu, case,
gpu, cpu, parts`).

---

## 🖼️ Cómo cambiar las IMÁGENES

Las imágenes son ilustraciones **SVG propias** (sin licencias externas) en
`assets/img/`. Para usar fotos reales:

1. Colocá tu imagen en `assets/img/` (ej. `assets/img/teclado.jpg`).
2. Cambiá el campo `img` del producto en `script.js`.
3. Para **antes/después**, reemplazá los `src` en `index.html`
   (sección `#antes-despues`). Mantené el texto `alt`.
4. Para el **equipo**, en `EQUIPO` poné `photo: 'assets/img/maurito.jpg'`
   (si lo dejás vacío, se muestra la inicial).

Recomendación: imágenes livianas (JPG/WebP optimizado) y proporción 4:3.

---

## ✍️ Cómo editar TEXTOS y secciones

- **Servicios:** arreglo `SERVICIOS` en `script.js` (nombre, ítems y mensaje de WhatsApp).
- **Por qué elegirnos:** arreglo `BENEFICIOS`.
- **Equipo (Maurito, Iván, Andy):** arreglo `EQUIPO` (rol, descripción y redes).
- **Testimonios:** arreglo `TESTIMONIOS` (marcados como *Ejemplo*).
- **Preguntas frecuentes:** arreglo `FAQS`.
- **Hero, cómo trabajamos y avisos:** directamente en `index.html`.

---

## 💬 Mensajes de WhatsApp

- Los mensajes generales están en `WA_MESSAGES` (`script.js`).
- Botones con `data-wa="general|servicio|armado|actualizar"` usan esos mensajes.
- Botones con `data-wa-msg="texto..."` envían un mensaje literal (se usa en
  productos, categorías y servicios). Todos los enlaces se codifican con `wa.me`.

---

## 🚀 Probar localmente

No requiere compilación. Abrí `index.html` en el navegador, o levantá un
servidor simple:

```bash
python3 -m http.server 8080
# luego abrí http://localhost:8080
```

---

## 🌐 Publicar en GitHub Pages

Ya está incluido el workflow `.github/workflows/deploy.yml`, que publica el
sitio automáticamente cada vez que se hace push a la rama de desarrollo.

Para activarlo (una sola vez):

1. En GitHub: **Settings → Pages**.
2. En **Build and deployment → Source**, elegí **GitHub Actions**.
3. Hacé push a la rama configurada; el workflow despliega el sitio.
4. La URL pública aparece en la pestaña **Actions** (job *Deploy*) y en
   **Settings → Pages**.

URL prevista:
`https://vigolomarketing-tech.github.io/maurito-ivan-y-andy/`

---

## ♿ Accesibilidad y rendimiento

- Respeta `prefers-reduced-motion` (desactiva animaciones si el usuario lo pide).
- HTML semántico, jerarquía de encabezados y textos `alt` en imágenes.
- Sin dependencias ni claves sensibles. Íconos e ilustraciones en SVG liviano.

---

_Sitio desarrollado para Maurito, Iván y Andy._
