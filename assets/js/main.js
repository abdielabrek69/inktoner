(() => {
  "use strict";

  const config = window.SITE_CONFIG || {};
  const whatsapp = String(config.whatsapp || "").replace(/\D/g, "");

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mainNav = document.querySelector("#main-navigation");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      menuToggle.setAttribute("aria-label", expanded ? "Abrir menú" : "Cerrar menú");
      mainNav.classList.toggle("is-open", !expanded);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

  document.querySelectorAll("[data-dropdown-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const parent = button.closest(".has-dropdown");
      const open = parent.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });
  });

  document.addEventListener("click", (event) => {
    document.querySelectorAll(".has-dropdown.is-open").forEach((parent) => {
      if (!parent.contains(event.target)) {
        parent.classList.remove("is-open");
        const button = parent.querySelector("[data-dropdown-toggle]");
        if (button) button.setAttribute("aria-expanded", "false");
      }
    });
  });

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("a[data-nav-link]").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const makeWhatsAppUrl = (message) => {
    if (!whatsapp) return null;
    return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
  };

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const message = link.getAttribute("data-whatsapp-message") ||
      "Hola, quiero solicitar información sobre los servicios de INKTONER WEB & SYSTEM.";
    const url = makeWhatsAppUrl(message);
    if (!url) {
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => event.preventDefault());
      return;
    }
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");

  if (contactForm && formStatus) {
    const setStatus = (message, type) => {
      formStatus.textContent = message;
      formStatus.className = `form-status is-visible ${type}`;
    };

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameField = document.querySelector("#name");
      const serviceField = document.querySelector("#service");
      const messageField = document.querySelector("#message");
      const name = nameField?.value.trim() || "";
      const service = serviceField?.value || "";
      const message = messageField?.value.trim() || "";

      if (name.length < 2 || name.length > 100) {
        setStatus("Escribe un nombre válido (2 a 100 caracteres).", "warning");
        nameField?.focus();
        return;
      }
      if (!service) {
        setStatus("Selecciona el servicio que necesitas.", "warning");
        serviceField?.focus();
        return;
      }
      if (message.length < 5 || message.length > 1500) {
        setStatus("El mensaje debe tener entre 5 y 1500 caracteres.", "warning");
        messageField?.focus();
        return;
      }
      if (!whatsapp) {
        setStatus("Configura el número de WhatsApp en assets/js/config.js antes de publicar.", "warning");
        return;
      }

      const text = [
        "Hola, quiero solicitar información a INKTONER WEB & SYSTEM.",
        `Nombre: ${name}`,
        `Servicio: ${service}`,
        `Mensaje: ${message}`
      ].join("\n");

      const url = makeWhatsAppUrl(text);
      if (!url) return;
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("Se abrió WhatsApp con tu solicitud.", "success");
      contactForm.reset();
    });
  }
})();
