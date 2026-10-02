# INKTONER WEB & SYSTEM

Sitio web de **INKTONER WEB & SYSTEM**, enfocado en servicios de soporte técnico, mantenimiento de equipos, impresoras, consumibles, desarrollo web, sistemas POS y soluciones de tecnología.

## Descripción

Este proyecto corresponde al sitio web corporativo de INKTONER WEB & SYSTEM.

El sitio presenta los principales servicios ofrecidos y proporciona diferentes medios de contacto para solicitar información, soporte o cotizaciones.

### Servicios

* Soporte técnico y mantenimiento de equipos de cómputo.
* Instalación y configuración de software.
* Mantenimiento y soporte para impresoras.
* Venta de consumibles y accesorios.
* Desarrollo y mantenimiento de sitios web.
* Desarrollo de sistemas y soluciones empresariales.
* Sistemas punto de venta (POS).
* Redes y conectividad.
* Soluciones de seguridad informática.

## Tecnologías

El proyecto está desarrollado utilizando tecnologías web estándar:

* HTML5
* CSS3
* JavaScript
* Diseño responsive
* SEO básico
* Open Graph
* Accesibilidad web

No requiere frameworks ni dependencias externas para ejecutarse.

## Estructura del proyecto

```text
INKTONER/
├── assets/
│   ├── css/
│   ├── img/
│   └── js/
├── index.html
├── servicios.html
├── soporte.html
├── desarrollo-web.html
├── impresoras.html
├── pos.html
├── ciberseguridad.html
├── contacto.html
├── robots.txt
└── sitemap.xml
```

## Configuración

Antes de publicar el sitio, configura los datos de contacto en:

```text
assets/js/config.js
```

Ejemplo:

```javascript
const SITE_CONFIG = Object.freeze({
    whatsapp: "",
    phone: "",
    email: "",
    domain: ""
});
```

Introduce únicamente los datos comerciales correspondientes al negocio.

## Dominio

Antes de publicar el sitio, verifica que `canonical`, Open Graph, `robots.txt` y `sitemap.xml` utilicen el dominio oficial del sitio.

## Ejecución local

El sitio es completamente estático y no requiere Node.js, npm ni instalación de dependencias.

Puedes abrir directamente:

```text
index.html
```

También puedes utilizar un servidor local:

```bash
python -m http.server 8000
```

Después abre:

```text
http://localhost:8000
```

## Publicación

El proyecto puede desplegarse en diferentes servicios de hosting para sitios estáticos, incluyendo:

* GitHub Pages
* Netlify
* Vercel
* Hosting tradicional mediante FTP

Para GitHub Pages, sube el proyecto al repositorio y configura el despliegue desde la rama principal.

## Características

* Diseño responsive para dispositivos móviles, tablets y escritorio.
* Navegación adaptada a desktop y móvil.
* Menú con estado activo.
* Formulario de contacto.
* Integración con WhatsApp.
* SEO básico.
* Open Graph para compartir contenido.
* `robots.txt`.
* `sitemap.xml`.
* Accesibilidad mediante etiquetas y atributos ARIA.
* Focus visible para navegación mediante teclado.
* Skip link.
* Soporte para `prefers-reduced-motion`.
* JavaScript vanilla sin dependencias.
* Estructura multipágina.
* Código organizado y mantenible.

## Imágenes

Las imágenes utilizadas en determinadas secciones pueden cargarse desde servicios externos de imágenes.

Para un despliegue completamente independiente, se recomienda almacenar las imágenes localmente dentro de:

```text
assets/img/
```

y utilizar imágenes con los derechos de uso correspondientes.

## Seguridad

El proyecto utiliza JavaScript del lado del cliente y no requiere ejecución de código del servidor.

El formulario de contacto no procesa información sensible directamente en el sitio; prepara la información para establecer contacto mediante los canales configurados.

No se utilizan:

* `eval()`
* `innerHTML` para datos proporcionados por usuarios
* Dependencias innecesarias

## Estado del proyecto

**Proyecto funcional y preparado para despliegue**, sujeto a la configuración de los datos comerciales, dominio, imágenes y canales de contacto correspondientes.

## Autor

**INKTONER WEB & SYSTEM**

Soporte TI • Desarrollo Web • Sistemas • Tecnología
