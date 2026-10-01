# INKTONER WEB & SYSTEM

Sitio web estático multipágina para soporte TI, impresoras, consumibles, desarrollo web, POS y ciberseguridad.

## Antes de publicar

### Logo
El prompt exige `assets/img/INKTONER.PNG`, pero el logo oficial no fue adjuntado. El ZIP incluye un PNG transparente de 1x1 solo para conservar la ruta requerida. **Reemplázalo por el logo oficial antes de publicar.**

### Contacto
Edita `assets/js/config.js`:

```js
const SITE_CONFIG = Object.freeze({
    whatsapp: "",
    phone: "",
    email: "",
    domain: ""
});
```

No se inventaron datos comerciales.

### Dominio
El proyecto usa `https://www.ejemplo.com/` como placeholder en canonical, Open Graph, robots y sitemap. Sustitúyelo por el dominio real.

## Ejecutar

No requiere Node.js ni dependencias.

Puedes abrir `index.html` directamente o usar:

```bash
python -m http.server 8000
```

## GitHub Pages

Sube el contenido a un repositorio y activa GitHub Pages desde la rama principal.

## Incluye

- 10 páginas HTML independientes.
- CSS centralizado y responsive.
- Menú desktop/mobile.
- Estado activo de navegación.
- SEO básico y Open Graph.
- robots.txt y sitemap.xml.
- Accesibilidad: labels, focus visible, skip link, aria y reduced motion.
- Formulario estático que prepara una solicitud de WhatsApp.
- JavaScript vanilla sin dependencias.
- Sin `eval()` y sin `innerHTML` para datos de usuario.

## Imágenes

Las imágenes de servicio se cargan desde URLs de Unsplash para mantener el ZIP ligero. Para un despliegue totalmente autónomo, puedes sustituirlas por imágenes locales con licencia compatible.

## Checklist final

- [ ] Reemplazar el placeholder `assets/img/INKTONER.PNG`.
- [ ] Configurar WhatsApp, teléfono y correo.
- [ ] Configurar dominio real.
- [ ] Revisar las imágenes.
- [ ] Probar navegación desktop y móvil.
- [ ] Probar formulario.
- [ ] Publicar.
