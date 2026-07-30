/* =========================================================
   MIA Tech — script.js
   ---------------------------------------------------------
   >>> EDITÁ ACÁ LOS DATOS DEL NEGOCIO Y EL CATÁLOGO <<<
   Todos los valores marcados como TEMPORAL / DEMO deben
   reemplazarse por la información y fotos reales.
   ========================================================= */

/* ---------------------------------------------------------
   1) CONFIGURACIÓN DE CONTACTO  (⚠ VALORES TEMPORALES)
   --------------------------------------------------------- */
const CONFIG = {
  // WhatsApp en formato internacional, SOLO números (sin + ni espacios).
  // TEMPORAL: reemplazar por el número real. Ej Argentina: 5491123456789
  phone: '5491100000000',
  phoneDisplay: '+54 9 11 0000-0000',   // Solo para mostrar en pantalla

  instagram: '@miatech',                // TEMPORAL
  instagramUrl: 'https://instagram.com/miatech',

  email: 'contacto@miatech.com',        // TEMPORAL
  zone: 'Zona Sur, Buenos Aires',       // TEMPORAL
  hours: 'Lunes a sábado, con coordinación previa', // TEMPORAL
};

/* ---------------------------------------------------------
   2) MENSAJES DE WHATSAPP predefinidos por contexto
   --------------------------------------------------------- */
const WA_MESSAGES = {
  general:  'Hola, quería consultar por periféricos y componentes.',
  servicio: 'Hola, quería solicitar un servicio técnico para mi PC.',
  armado:   'Hola, quería consultar por el armado de una computadora.',
  actualizar: 'Hola, necesito ayuda para actualizar los componentes de mi PC.',
};

/* Construye un enlace wa.me correctamente codificado */
function waLink(message) {
  const text = encodeURIComponent(message || WA_MESSAGES.general);
  return `https://wa.me/${CONFIG.phone}?text=${text}`;
}

/* ---------------------------------------------------------
   3) CATEGORÍAS DE PRODUCTOS
   Para editar: agregá / quitá objetos de este arreglo.
   icon = clave del set de íconos ICONS (más abajo).
   --------------------------------------------------------- */
const CATEGORIAS = [
  { icon: 'keyboard', name: 'Teclados',      desc: 'Mecánicos, membrana y compactos.' },
  { icon: 'mouse',    name: 'Mouse',         desc: 'Gamer, ergonómicos e inalámbricos.' },
  { icon: 'headset',  name: 'Auriculares',   desc: 'Con micrófono y sonido envolvente.' },
  { icon: 'monitor',  name: 'Monitores',     desc: 'Full HD, alta tasa de refresco.' },
  { icon: 'ram',      name: 'Memorias RAM',  desc: 'DDR4 / DDR5 para más rendimiento.' },
  { icon: 'ssd',      name: 'Discos SSD',    desc: 'SATA y NVMe para más velocidad.' },
  { icon: 'psu',      name: 'Fuentes',       desc: 'Certificadas y confiables.' },
  { icon: 'case',     name: 'Gabinetes',     desc: 'Con buen flujo de aire y estilo.' },
  { icon: 'gpu',      name: 'Placas de video', desc: 'Para gaming y trabajo pesado.' },
  { icon: 'cpu',      name: 'Procesadores',  desc: 'La base del rendimiento de tu PC.' },
  { icon: 'parts',    name: 'Accesorios',    desc: 'Cables, hubs, pads y más.' },
];

/* ---------------------------------------------------------
   4) PRODUCTOS DESTACADOS (⚠ CONTENIDO DEMOSTRATIVO)
   No representan stock, marcas ni precios reales.
   Para editar: cambiá nombre, categoría, descripción, etiqueta,
   imagen (img) y el mensaje de WhatsApp (wa) si querés uno propio.
   Imágenes en assets/img/  — reemplazables por fotos reales.
   --------------------------------------------------------- */
const PRODUCTOS = [
  { name: 'Teclado mecánico RGB',  cat: 'Teclados',      tag: 'Destacado',   img: 'assets/img/prod-teclado.svg',     desc: 'Switches con retroiluminación y buena respuesta.' },
  { name: 'Mouse gamer 6 botones', cat: 'Mouse',         tag: 'Nuevo',       img: 'assets/img/prod-mouse.svg',       desc: 'Sensor preciso y diseño ergonómico.' },
  { name: 'Auriculares con micrófono', cat: 'Auriculares', tag: 'Recomendado', img: 'assets/img/prod-auriculares.svg', desc: 'Sonido envolvente y micrófono ajustable.' },
  { name: 'Monitor Full HD',       cat: 'Monitores',     tag: 'Destacado',   img: 'assets/img/prod-monitor.svg',     desc: 'Panel nítido, ideal para juego y trabajo.' },
  { name: 'Placa de video',        cat: 'Placas de video', tag: 'Recomendado', img: 'assets/img/prod-gpu.svg',       desc: 'Rendimiento para gaming y edición.' },
  { name: 'Disco SSD',             cat: 'Discos SSD',    tag: 'Nuevo',       img: 'assets/img/prod-ssd.svg',         desc: 'Arranque y cargas mucho más rápidas.' },
];

/* ---------------------------------------------------------
   5) SERVICIOS TÉCNICOS
   Cada uno abre WhatsApp con un mensaje específico (wa).
   --------------------------------------------------------- */
const SERVICIOS = [
  {
    icon: 'clean', name: 'Limpieza completa de PC',
    items: ['Limpieza interna', 'Eliminación de polvo', 'Limpieza de ventiladores', 'Organización básica del cableado', 'Revisión visual general'],
    wa: 'Hola, quería solicitar una limpieza completa para mi PC.',
  },
  {
    icon: 'thermal', name: 'Cambio de pasta térmica',
    items: ['Procesador', 'Control de temperaturas', 'Revisión del sistema de refrigeración'],
    wa: 'Hola, quería consultar por el cambio de pasta térmica de mi PC.',
  },
  {
    icon: 'optimize', name: 'Mantenimiento y optimización',
    items: ['Optimización de inicio', 'Limpieza de archivos innecesarios', 'Actualización básica de controladores', 'Revisión de rendimiento'],
    wa: 'Hola, quería consultar por mantenimiento y optimización de Windows.',
  },
  {
    icon: 'install', name: 'Instalación de componentes',
    items: ['Memorias RAM', 'Discos SSD', 'Fuentes', 'Placas de video', 'Ventiladores', 'Otros componentes compatibles'],
    wa: 'Hola, quería consultar por la instalación de componentes en mi PC.',
  },
  {
    icon: 'build', name: 'Armado de PC',
    items: ['Selección de componentes', 'Compatibilidad', 'Ensamblado', 'Configuración inicial', 'Pruebas básicas'],
    wa: WA_MESSAGES.armado,
  },
  {
    icon: 'diagnose', name: 'Diagnóstico de fallas',
    items: ['Problemas de encendido', 'Temperaturas elevadas', 'Reinicios', 'Lentitud', 'Ruidos', 'Problemas de almacenamiento o memoria'],
    wa: 'Hola, quería solicitar un diagnóstico de fallas para mi PC.',
  },
];

/* ---------------------------------------------------------
   6) POR QUÉ ELEGIRNOS
   --------------------------------------------------------- */
const BENEFICIOS = [
  { icon: 'chat',    title: 'Atención directa',          desc: 'Hablás siempre con nosotros, sin intermediarios.' },
  { icon: 'receipt', title: 'Presupuestos transparentes', desc: 'Sabés qué se hace y cuánto cuesta antes de empezar.' },
  { icon: 'shield',  title: 'Trabajo cuidadoso',          desc: 'Tratamos tu equipo con el máximo cuidado.' },
  { icon: 'bulb',    title: 'Recomendaciones a medida',   desc: 'Según tu necesidad y tu presupuesto.' },
  { icon: 'puzzle',  title: 'Componentes compatibles',    desc: 'Verificamos compatibilidad antes de instalar.' },
  { icon: 'chat',    title: 'Seguimiento por WhatsApp',   desc: 'Coordinamos y te mantenemos al tanto.' },
  { icon: 'users',   title: 'Para todos',                 desc: 'Gamers, estudiantes, profesionales y hogares.' },
  { icon: 'bolt',    title: 'Servicio rápido',            desc: 'Buscamos resolver en el menor tiempo posible.' },
];

/* ---------------------------------------------------------
   7) EQUIPO (tarjetas listas para foto / rol / redes)
   photo: dejar '' para mostrar la inicial. Para usar foto real:
   photo: 'assets/img/maurito.jpg'
   Redes: completar URLs reales o dejar '' para ocultar.
   --------------------------------------------------------- */
const EQUIPO = [
  { name: 'Maurito', role: 'Rol a definir', photo: '', desc: 'Apasionado por el hardware y el rendimiento de las PC.', ig: '', wa: '' },
  { name: 'Iván',    role: 'Rol a definir', photo: '', desc: 'Enfocado en el armado y la puesta a punto de equipos.', ig: '', wa: '' },
  { name: 'Andy',    role: 'Rol a definir', photo: '', desc: 'Atento al detalle en mantenimiento y limpieza.', ig: '', wa: '' },
];

/* ---------------------------------------------------------
   8) TESTIMONIOS (⚠ CONTENIDO DE EJEMPLO — reemplazar)
   --------------------------------------------------------- */
const TESTIMONIOS = [
  { quote: 'Ejemplo de testimonio: dejaron mi PC como nueva y me explicaron todo con claridad.', name: 'Cliente de ejemplo', meta: 'Reemplazar por testimonio real', stars: 5 },
  { quote: 'Ejemplo de testimonio: me ayudaron a elegir los componentes según mi presupuesto.', name: 'Cliente de ejemplo', meta: 'Reemplazar por testimonio real', stars: 5 },
  { quote: 'Ejemplo de testimonio: presupuesto claro y trabajo prolijo, muy recomendables.', name: 'Cliente de ejemplo', meta: 'Reemplazar por testimonio real', stars: 5 },
];

/* ---------------------------------------------------------
   9) PREGUNTAS FRECUENTES
   --------------------------------------------------------- */
const FAQS = [
  { q: '¿Realizan presupuestos?', a: 'Sí. Antes de cualquier trabajo te informamos el presupuesto para que decidas con total claridad. No avanzamos sin tu confirmación.' },
  { q: '¿Cuánto demora una limpieza?', a: 'Depende del estado y el modelo del equipo. Te damos una estimación al coordinar, luego de revisar tu PC.' },
  { q: '¿Instalan componentes comprados por el cliente?', a: 'Sí, podemos instalar componentes que ya tengas, siempre que verifiquemos que son compatibles con tu equipo.' },
  { q: '¿Venden componentes nuevos?', a: 'Estamos armando el catálogo. Consultanos por WhatsApp qué necesitás y te informamos disponibilidad y opciones.' },
  { q: '¿Trabajan con computadoras gamer?', a: 'Sí. Trabajamos con equipos de gaming, de trabajo, de estudio y de uso hogareño.' },
  { q: '¿Realizan mantenimiento a domicilio?', a: 'Coordinamos según la zona y el tipo de trabajo. Escribinos por WhatsApp y vemos la mejor forma de ayudarte.' },
  { q: '¿Cómo coordinamos la entrega del equipo?', a: 'Lo acordamos por WhatsApp según tu disponibilidad y ubicación, buscando la opción más cómoda para vos.' },
  { q: '¿Ofrecen garantía sobre el servicio?', a: 'Trabajamos con cuidado y responsabilidad. Las condiciones de cada servicio las conversamos al momento de presupuestar.' },
  { q: '¿Cómo sé qué componente es compatible con mi PC?', a: 'Contanos tu equipo o mandanos los datos que tengas y te asesoramos sobre las opciones compatibles antes de comprar o instalar.' },
];

/* ---------------------------------------------------------
   10) ÍCONOS SVG (set interno, sin librerías externas)
   --------------------------------------------------------- */
const ICONS = {
  keyboard: '<path fill="currentColor" d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m2 3v2h2V9zm4 0v2h2V9zm4 0v2h2V9zm-8 4v2h2v-2zm4 0v2h6v-2z"/>',
  mouse: '<path fill="currentColor" d="M12 2a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6m1 6h-2V5a1 1 0 0 1 2 0z"/>',
  headset: '<path fill="currentColor" d="M12 2a9 9 0 0 0-9 9v6a3 3 0 0 0 3 3h1v-8H5v-1a7 7 0 0 1 14 0v1h-2v8h1a3 3 0 0 0 3-3v-6a9 9 0 0 0-9-9"/>',
  monitor: '<path fill="currentColor" d="M3 4h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-7v2h3v2H7v-2h3v-2H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 2v9h16V6z"/>',
  ram: '<path fill="currentColor" d="M2 8h20v6h-2v3h-3v-3h-2v3h-2v-3h-2v3H8v-3H6v3H3v-3H2zm4 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"/>',
  ssd: '<path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m2 3v4h8V7zm10 0v2h2V7zM7 15v2h2v-2zm4 0v2h2v-2z"/>',
  psu: '<path fill="currentColor" d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8m6 1v2h2V9zm-1-1h-2v2h2z"/>',
  case: '<path fill="currentColor" d="M6 2h9l3 3v17H6zm2 4v2h6V6zm0 4v2h6v-2zm7 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>',
  gpu: '<path fill="currentColor" d="M2 7h18a2 2 0 0 1 2 2v8h-3v-2h-2v2H4a2 2 0 0 1-2-2zm5 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/>',
  cpu: '<path fill="currentColor" d="M9 2v2H7a2 2 0 0 0-2 2v2H3v2h2v2H3v2h2v2a2 2 0 0 0 2 2h2v2h2v-2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2v-2h-2v-2h2V8h-2V6a2 2 0 0 0-2-2h-2V2h-2v2h-2V2zm0 6h6v6H9z"/>',
  parts: '<path fill="currentColor" d="M12 2 4 6v6c0 5 3.4 9.7 8 10 4.6-.3 8-5 8-10V6zm0 3.2 5 2.4V12c0 3.5-2.2 6.9-5 7.4-2.8-.5-5-3.9-5-7.4V7.6z"/>',
  clean: '<path fill="currentColor" d="m16 3 5 5-2 2-2-2-8 8-3 6-1-1 6-3 8-8-2-2zM4 20l3-1 1 1-1 3-3 1-1-3z"/>',
  thermal: '<path fill="currentColor" d="M12 2a3 3 0 0 0-3 3v8.6a5 5 0 1 0 6 0V5a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v9.6l.6.4a3 3 0 1 1-3.2 0l.6-.4V5a1 1 0 0 1 1-1"/>',
  optimize: '<path fill="currentColor" d="M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-3-6.2V3zm-1 5v6l5 3 1-1.7-4-2.3V7z"/>',
  install: '<path fill="currentColor" d="M13 2v10.6l3-3L17.4 11 12 16.4 6.6 11 8 9.6l3 3V2zM4 18h16v4H4z"/>',
  build: '<path fill="currentColor" d="m21.7 6.3-2.4 2.4a3 3 0 0 1-4-4l2.4-2.4a5 5 0 0 0-6.6 6.2L3 14.6a2 2 0 0 0 2.8 2.8l6.1-8.1a5 5 0 0 0 6.2-6.6z"/>',
  diagnose: '<path fill="currentColor" d="M10 2a8 8 0 1 0 4.9 14.3l5 5 1.4-1.4-5-5A8 8 0 0 0 10 2m0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12m-1 2v3H6v2h3v3h2v-3h3V9h-3V6z"/>',
  chat: '<path fill="currentColor" d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2m3 5v2h10V8zm0 4v2h7v-2z"/>',
  receipt: '<path fill="currentColor" d="M5 2h14v20l-2.5-1.5L14 22l-2-1.5L10 22l-2.5-1.5L5 22zm3 4v2h8V6zm0 4v2h8v-2zm0 4v2h5v-2z"/>',
  shield: '<path fill="currentColor" d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5zm-1 13-3.5-3.5L9 10l2 2 4-4 1.5 1.5z"/>',
  bulb: '<path fill="currentColor" d="M9 21h6v-1H9zm3-19a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2M9 22h6v1H9z"/>',
  puzzle: '<path fill="currentColor" d="M20 12a2 2 0 0 0-2-2V7a2 2 0 0 0-2-2h-3a2 2 0 1 0-4 0H6a2 2 0 0 0-2 2v3a2 2 0 1 0 0 4v3a2 2 0 0 0 2 2h3a2 2 0 1 1 4 0h3a2 2 0 0 0 2-2v-3a2 2 0 0 0 2-2"/>',
  users: '<path fill="currentColor" d="M8 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6M2 19c0-3 3-5 6-5s6 2 6 5v1H2zm14-4c2.4.3 5 2 5 4v1h-4v-1c0-1.6-.7-3-1.9-4z"/>',
  bolt: '<path fill="currentColor" d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
  arrow: '<path fill="currentColor" d="M13 5l7 7-7 7-1.4-1.4L16.2 13H4v-2h12.2l-4.6-4.6z"/>',
  check: '<path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>',
};

const svg = (name, size = 24) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">${ICONS[name] || ''}</svg>`;

/* Escapa texto para insertar de forma segura en el DOM */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* =========================================================
   RENDERIZADO DINÁMICO DE SECCIONES
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderConfig();
  renderCategorias();
  renderProductos();
  renderServicios();
  renderBeneficios();
  renderEquipo();
  renderTestimonios();
  renderFAQ();
  bindWhatsApp();
  initHeader();
  initMobileNav();
  initReveal();
  initAccordion();
  initFilters();
  initScrollSpy();
  initToTop();
  initContactForm();
  initSmoothScroll();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---- Datos de contacto en el DOM ---- */
function renderConfig() {
  document.querySelectorAll('[data-config]').forEach((el) => {
    const key = el.getAttribute('data-config');
    if (CONFIG[key]) el.textContent = CONFIG[key];
  });
  const ig = document.getElementById('contactIg');
  if (ig) ig.href = CONFIG.instagramUrl;
  const igFooter = document.getElementById('footerIg');
  if (igFooter) igFooter.href = CONFIG.instagramUrl;
  document.querySelectorAll('#contactMail, #footerMail').forEach((el) => {
    el.href = `mailto:${CONFIG.email}`;
  });
}

/* ---- Categorías ---- */
function renderCategorias() {
  const grid = document.getElementById('catGrid');
  grid.innerHTML = CATEGORIAS.map((c) => `
    <article class="cat-card reveal">
      <div class="cat-card__ico">${svg(c.icon, 28)}</div>
      <h3>${esc(c.name)}</h3>
      <p>${esc(c.desc)}</p>
      <a class="cat-card__btn" href="#" data-wa-msg="Hola, quería consultar disponibilidad de ${esc(c.name)}.">
        Consultar disponibilidad ${svg('arrow', 16)}
      </a>
    </article>`).join('');
}

/* ---- Productos ---- */
function renderProductos() {
  const grid = document.getElementById('prodGrid');
  grid.innerHTML = PRODUCTOS.map((p) => {
    const tagClass = p.tag ? `tag--${p.tag.toLowerCase()}` : '';
    return `
    <article class="prod-card reveal" data-cat="${esc(p.cat)}">
      <div class="prod-card__media">
        ${p.tag ? `<span class="tag ${tagClass}">${esc(p.tag)}</span>` : ''}
        <img src="${esc(p.img)}" alt="${esc(p.name)} (imagen demostrativa)" loading="lazy" width="800" height="600" />
      </div>
      <div class="prod-card__body">
        <span class="prod-card__cat">${esc(p.cat)}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <span class="demo-flag">Producto demostrativo</span>
        <a class="btn btn--wa" href="#" data-wa-msg="Hola, quería consultar por el producto: ${esc(p.name)} (${esc(p.cat)}).">
          ${svg('chat', 18)} Consultar por WhatsApp
        </a>
      </div>
    </article>`;
  }).join('');
}

/* ---- Servicios ---- */
function renderServicios() {
  const grid = document.getElementById('servGrid');
  grid.innerHTML = SERVICIOS.map((s) => `
    <article class="serv-card reveal">
      <div class="serv-card__ico">${svg(s.icon, 30)}</div>
      <h3>${esc(s.name)}</h3>
      <ul class="serv-card__list">
        ${s.items.map((i) => `<li>${svg('check', 17)}<span>${esc(i)}</span></li>`).join('')}
      </ul>
      <a class="btn btn--wa btn--block" href="#" data-wa-msg="${esc(s.wa)}">
        ${svg('chat', 18)} Consultar este servicio
      </a>
    </article>`).join('');
}

/* ---- Beneficios ---- */
function renderBeneficios() {
  const grid = document.getElementById('benefitsGrid');
  grid.innerHTML = BENEFICIOS.map((b) => `
    <div class="benefit reveal">
      <div class="benefit__ico">${svg(b.icon, 24)}</div>
      <div><h3>${esc(b.title)}</h3><p>${esc(b.desc)}</p></div>
    </div>`).join('');
}

/* ---- Equipo ---- */
function renderEquipo() {
  const grid = document.getElementById('teamGrid');
  grid.innerHTML = EQUIPO.map((m) => {
    const inicial = m.name.charAt(0).toUpperCase();
    const foto = m.photo
      ? `<img src="${esc(m.photo)}" alt="Foto de ${esc(m.name)}" loading="lazy" />`
      : inicial;
    const redes = [];
    if (m.ig) redes.push(`<a href="${esc(m.ig)}" target="_blank" rel="noopener" aria-label="Instagram de ${esc(m.name)}">${svg('chat', 18)}</a>`);
    if (m.wa) redes.push(`<a href="${esc(m.wa)}" target="_blank" rel="noopener" aria-label="WhatsApp de ${esc(m.name)}">${svg('chat', 18)}</a>`);
    return `
    <article class="team-card reveal">
      <div class="team-card__photo">${foto}</div>
      <h3>${esc(m.name)}</h3>
      <p class="team-card__role">${esc(m.role)}</p>
      <p>${esc(m.desc)}</p>
      ${redes.length ? `<div class="team-card__social">${redes.join('')}</div>`
        : `<p class="placeholder-note">Foto, rol y redes: listos para completar.</p>`}
    </article>`;
  }).join('');
}

/* ---- Testimonios ---- */
function renderTestimonios() {
  const grid = document.getElementById('testimonialsGrid');
  grid.innerHTML = TESTIMONIOS.map((t) => `
    <blockquote class="testimonial reveal">
      <span class="testimonial__demo">Ejemplo</span>
      <div class="testimonial__stars" aria-label="${t.stars} de 5 estrellas">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
      <p class="testimonial__quote">${esc(t.quote)}</p>
      <footer class="testimonial__author">
        <span class="testimonial__avatar" aria-hidden="true">${esc(t.name.charAt(0))}</span>
        <span><span class="testimonial__name">${esc(t.name)}</span><br><span class="testimonial__meta">${esc(t.meta)}</span></span>
      </footer>
    </blockquote>`).join('');
}

/* ---- FAQ ---- */
function renderFAQ() {
  const acc = document.getElementById('accordion');
  acc.innerHTML = FAQS.map((f, i) => `
    <div class="acc-item">
      <button class="acc-head" aria-expanded="false" aria-controls="acc-body-${i}" id="acc-head-${i}">
        <span>${esc(f.q)}</span>
        <span class="acc-icon" aria-hidden="true"></span>
      </button>
      <div class="acc-body" id="acc-body-${i}" role="region" aria-labelledby="acc-head-${i}">
        <div class="acc-body__inner">${esc(f.a)}</div>
      </div>
    </div>`).join('');
}

/* =========================================================
   INTERACTIVIDAD
   ========================================================= */

/* ---- Enlaces de WhatsApp ---- */
function bindWhatsApp() {
  // Botones con data-wa="clave" usan WA_MESSAGES
  document.querySelectorAll('[data-wa]').forEach((el) => {
    const key = el.getAttribute('data-wa');
    el.setAttribute('href', waLink(WA_MESSAGES[key] || WA_MESSAGES.general));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });
  // Delegación para elementos con data-wa-msg (mensaje literal) — cubre contenido dinámico
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-wa-msg]');
    if (!t) return;
    e.preventDefault();
    window.open(waLink(t.getAttribute('data-wa-msg')), '_blank', 'noopener');
  });
}

/* ---- Header con cambio al hacer scroll ---- */
function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---- Menú hamburguesa ---- */
function initMobileNav() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('navOverlay');

  const close = () => {
    nav.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    overlay.hidden = true;
    document.body.style.overflow = '';
  };
  const open = () => {
    nav.classList.add('open');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  btn.addEventListener('click', () => (nav.classList.contains('open') ? close() : open()));
  overlay.addEventListener('click', close);
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 820) close(); });
}

/* ---- Animaciones al hacer scroll (respetando reduced-motion) ---- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => io.observe(el));
}

/* ---- Acordeón FAQ ---- */
function initAccordion() {
  const acc = document.getElementById('accordion');
  acc.addEventListener('click', (e) => {
    const head = e.target.closest('.acc-head');
    if (!head) return;
    const item = head.parentElement;
    const body = item.querySelector('.acc-body');
    const isOpen = item.classList.toggle('open');
    head.setAttribute('aria-expanded', String(isOpen));
    body.style.maxHeight = isOpen ? body.scrollHeight + 'px' : null;

    // Cerrar los demás (comportamiento de acordeón)
    acc.querySelectorAll('.acc-item').forEach((other) => {
      if (other !== item && other.classList.contains('open')) {
        other.classList.remove('open');
        other.querySelector('.acc-head').setAttribute('aria-expanded', 'false');
        other.querySelector('.acc-body').style.maxHeight = null;
      }
    });
  });
}

/* ---- Filtros de productos ---- */
function initFilters() {
  const bar = document.getElementById('filters');
  const cats = ['Todos', ...new Set(PRODUCTOS.map((p) => p.cat))];
  bar.innerHTML = cats.map((c, i) =>
    `<button class="filter${i === 0 ? ' active' : ''}" role="tab" data-filter="${esc(c)}">${esc(c)}</button>`).join('');

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    bar.querySelectorAll('.filter').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.getAttribute('data-filter');
    document.querySelectorAll('.prod-card').forEach((card) => {
      const show = f === 'Todos' || card.getAttribute('data-cat') === f;
      card.classList.toggle('is-hidden', !show);
    });
  });
}

/* ---- Scroll spy (marca el link activo del menú) ---- */
function initScrollSpy() {
  const links = [...document.querySelectorAll('.nav__link')];
  const map = new Map();
  links.forEach((l) => {
    const id = l.getAttribute('href').slice(1);
    const sec = document.getElementById(id);
    if (sec) map.set(sec, l);
  });
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((l) => l.classList.remove('active'));
        const link = map.get(en.target);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  map.forEach((_, sec) => io.observe(sec));
}

/* ---- Botón volver arriba ---- */
function initToTop() {
  const btn = document.getElementById('toTop');
  const onScroll = () => btn.classList.toggle('show', window.scrollY > 600);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });
}

/* ---- Scroll suave para anclas (con fallback) ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });
}

/* ---- Formulario de contacto → WhatsApp (validación básica) ---- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const setError = (input, msg) => {
    const field = input.closest('.field');
    field.classList.toggle('invalid', !!msg);
    const err = field.querySelector('.field__error');
    if (err) err.textContent = msg || '';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name;
    const type = form.type;
    const message = form.message;
    let ok = true;

    if (!name.value.trim()) { setError(name, 'Ingresá tu nombre.'); ok = false; } else setError(name, '');
    if (!type.value) { setError(type, 'Elegí una opción.'); ok = false; } else setError(type, '');

    if (!ok) {
      showToast('Revisá los campos marcados.');
      form.querySelector('.invalid input, .invalid select')?.focus();
      return;
    }

    const msg = `Hola, soy ${name.value.trim()}. Quería consultar por: ${type.value}.` +
      (message.value.trim() ? ` ${message.value.trim()}` : '');
    window.open(waLink(msg), '_blank', 'noopener');
    showToast('Abriendo WhatsApp con tu consulta…');
    form.reset();
  });

  // Limpia el error al escribir
  form.querySelectorAll('input, select').forEach((el) =>
    el.addEventListener('input', () => setError(el, '')));
}

/* ---- Toast accesible ---- */
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}
