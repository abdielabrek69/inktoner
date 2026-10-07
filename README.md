# INKTONER WEB & SYSTEM — versión SEO + seguridad

Sitio estático multipágina optimizado para SEO técnico, SEO on-page, rendimiento, accesibilidad y endurecimiento básico de seguridad.

## Lo que se mejoró

- `title` y meta descriptions específicas por página.
- Canonical y Open Graph consistentes.
- Datos estructurados JSON-LD (`ProfessionalService`, `Service`, `BreadcrumbList`, etc.).
- `robots.txt` y `sitemap.xml`.
- Imágenes locales para reducir dependencias de terceros y permitir una CSP más estricta.
- HTML semántico, navegación accesible y enlaces internos.
- CSP mediante meta tag para hosting estático.
- Archivo `_headers` para hosts que sí soportan headers (por ejemplo Cloudflare Pages/Netlify).
- `security.txt` para reporte responsable de vulnerabilidades.
- JavaScript sin `eval()`, sin `innerHTML` y sin almacenamiento de datos del formulario.
- Validación de longitud y contenido del formulario antes de generar el enlace de WhatsApp.
- `noopener noreferrer` en enlaces externos.
- Imágenes con `loading=lazy` y `decoding=async` cuando corresponde.

## IMPORTANTE: dominio

Esta versión usa como dominio inicial:

`https://abdielabrek69.github.io/INKTONER/`

Si vas a publicarlo en otro dominio o subruta, cambia `domain` en `assets/js/config.js` **y** el dominio en los archivos HTML, `robots.txt`, `sitemap.xml` y `.well-known/security.txt`.

No dejes un dominio incorrecto en `canonical`, porque puede perjudicar la indexación.

## Seguridad

Es un sitio estático: no hay PHP, base de datos ni API propia expuesta, por lo que la superficie de ataque es mucho menor que en una aplicación con backend. Ningún HTML estático puede garantizar que sea imposible de hackear. La protección fuerte depende también del servidor/hosting, HTTPS, cuenta de GitHub y configuración de despliegue.

El archivo `_headers` **no es aplicado por GitHub Pages**; sí puede aprovecharse en plataformas que soportan archivos `_headers`. En GitHub Pages, la CSP incluida como meta tag funciona como capa adicional.

## Contacto

Los datos actuales están centralizados en `assets/js/config.js`.

## Google Search Console

Después de publicar, verifica el sitio en Google Search Console y envía `sitemap.xml`. La verificación HTML existente se conserva.
