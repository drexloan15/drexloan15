"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "@/components/icons";

const links = [
  { href: "#perfil", label: "Perfil" },
  { href: "#stack", label: "Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(`#${entry.target.id}`)),
      { rootMargin: "-42% 0px -52%" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const current = root.dataset.theme ?? "dark";
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? "nav--scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="shell nav__inner">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            <span className="brand__mark">JP</span>
            <span className="brand__name">Jean Puccio</span>
          </a>

          <nav className="nav__links" aria-label="Navegación principal">
            {links.map((link) => (
              <a key={link.href} href={link.href} className={active === link.href ? "is-active" : ""}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <button className="icon-button theme-toggle" type="button" onClick={toggleTheme} aria-label="Cambiar tema">
              <SunIcon className="theme-toggle__sun" />
              <MoonIcon className="theme-toggle__moon" />
            </button>
            <button
              className="icon-button menu-button"
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-movil"
            className="mobile-menu"
            aria-label="Navegación móvil"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu__links">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.06 }}
                >
                  <span>0{index + 1}</span>{link.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
