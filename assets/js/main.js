
(() => {
    "use strict";
    const config = window.SITE_CONFIG || {};
    const menuToggle = document.querySelector("[data-menu-toggle]");
    const mainNav = document.querySelector("#main-navigation");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const expanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!expanded));
            mainNav.classList.toggle("is-open", !expanded);
        });
        mainNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
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
        if (link.getAttribute("href") === currentPath) link.setAttribute("aria-current", "page");
    });

    document.querySelectorAll("[data-year]").forEach((node) => {
        node.textContent = String(new Date().getFullYear());
    });

    document.querySelectorAll("[data-whatsapp]").forEach((link) => {
        const raw = String(config.whatsapp || "").replace(/\D/g, "");
        if (!raw) {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                window.alert("Configura SITE_CONFIG.whatsapp en assets/js/config.js para activar WhatsApp.");
            });
            link.setAttribute("href", "#");
            return;
        }
        const message = link.getAttribute("data-whatsapp-message") || "Hola, quiero solicitar información sobre sus servicios.";
        link.href = `https://wa.me/${raw}?text=${encodeURIComponent(message)}`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });

    const contactForm = document.querySelector("#contact-form");
    const formStatus = document.querySelector("#form-status");

    if (contactForm && formStatus) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.querySelector("#name")?.value.trim() || "";
            const service = document.querySelector("#service")?.value || "";
            const message = document.querySelector("#message")?.value.trim() || "";
            const whatsapp = String(config.whatsapp || "").replace(/\D/g, "");

            if (!name || !service || !message) {
                formStatus.textContent = "Completa nombre, servicio y mensaje antes de continuar.";
                formStatus.className = "form-status is-visible warning";
                return;
            }
            if (!whatsapp) {
                formStatus.textContent = "El formulario está listo, pero falta configurar el número de WhatsApp en assets/js/config.js.";
                formStatus.className = "form-status is-visible warning";
                return;
            }

            const text = [
                "Hola, quiero solicitar información.",
                `Nombre: ${name}`,
                `Servicio: ${service}`,
                `Mensaje: ${message}`
            ].join("\n");

            const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;
            window.open(url, "_blank", "noopener,noreferrer");
            formStatus.textContent = "Se abrió WhatsApp con tu solicitud.";
            formStatus.className = "form-status is-visible success";
            contactForm.reset();
        });
    }
})();
