"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { ArrowDown, ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

const phrases = ["interfaces que se sienten bien", "servicios que escalan", "datos que ayudan a decidir", "despliegues que se sostienen"];

function SystemPanel() {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 140, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 140, damping: 22 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    rotateY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 7);
    rotateX.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 7);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className="system-panel-wrap"
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
    >
      <div className="system-panel" aria-label="Representación animada de una arquitectura web en producción">
        <div className="system-panel__topbar">
          <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
          <span>production.flow</span>
          <span className="live-status"><i /> online</span>
        </div>

        <div className="system-panel__body">
          <div className="architecture">
            <div className="architecture__eyebrow">Arquitectura del sistema</div>
            <div className="architecture__flow">
              <motion.div className="system-node system-node--client" animate={reduceMotion ? {} : { y: [0, -3, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <span>01</span><strong>Web client</strong><small>Next.js · React</small>
              </motion.div>
              <div className="flow-line flow-line--one"><i /></div>
              <motion.div className="system-node system-node--api" animate={reduceMotion ? {} : { y: [0, 3, 0] }} transition={{ duration: 4.6, repeat: Infinity }}>
                <span>02</span><strong>API layer</strong><small>NestJS · FastAPI</small>
              </motion.div>
              <div className="flow-line flow-line--two"><i /></div>
              <div className="system-node-grid">
                <div className="system-node system-node--small"><span>03</span><strong>Data</strong><small>PostgreSQL</small></div>
                <div className="system-node system-node--small"><span>04</span><strong>Queue</strong><small>Redis · Bull</small></div>
              </div>
            </div>
          </div>

          <div className="deploy-console">
            <div className="deploy-console__line"><span>$</span> deploy --environment production</div>
            <div className="deploy-console__steps">
              <span><i className="is-done" /> build</span>
              <span><i className="is-done" /> test</span>
              <span><i className="is-running" /> deploy</span>
            </div>
            <div className="deploy-console__bar"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 0.82 }} transition={{ duration: 1.4, delay: 1, ease: "easeOut" }} /></div>
          </div>
        </div>

        <div className="system-panel__footer">
          <span className="panel-label">Entornos</span>
          <span className="os-badge"><i className="os-badge__windows" /> Windows</span>
          <span className="os-badge"><i className="os-badge__linux">$</i> Linux</span>
          <span className="panel-version">v2.0</span>
        </div>
      </div>

      <motion.div className="floating-chip floating-chip--top" animate={reduceMotion ? {} : { y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <span>API</span> estable
      </motion.div>
      <motion.div className="floating-chip floating-chip--bottom" animate={reduceMotion ? {} : { y: [0, 9, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}>
        <i /> listo para producción
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const [phrase, setPhrase] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setPhrase((current) => (current + 1) % phrases.length), 3000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="hero" id="inicio">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="shell hero__inner">
        <motion.div className="hero__copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } } }}>
          <motion.div className="availability" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
            <i /> Desarrollador full stack <span>· Lima, Perú</span>
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 34 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } }}>
            Del problema <span> a producción.</span>
          </motion.h1>

          <motion.div className="hero__dynamic" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Construyo&nbsp;
            <span className="hero__phrase">
              <AnimatePresence mode="wait">
                <motion.span key={phrase} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -24, opacity: 0 }} transition={{ duration: 0.38 }}>
                  {phrases[phrase]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p className="hero__description" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
            Diseño y desarrollo productos web completos: desde la experiencia de usuario y la lógica de negocio hasta los datos, la infraestructura y el despliegue en Windows o Linux.
          </motion.p>

          <motion.div className="hero__actions" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
            <a className="button button--primary" href="#proyectos">Explorar proyectos <ArrowDown /></a>
            <a className="button button--ghost" href="mailto:wespuccio1279@gmail.com">Hablemos <ArrowUpRight /></a>
          </motion.div>

          <motion.div className="hero__social" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <span>Encuéntrame en</span>
            <a href="https://github.com/drexloan15" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/weslye-jean-pieers-puccio-angulo-38a115246" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="mailto:wespuccio1279@gmail.com" aria-label="Correo electrónico"><MailIcon /></a>
          </motion.div>
        </motion.div>

        <SystemPanel />
      </div>

      <a className="scroll-cue" href="#perfil" aria-label="Continuar hacia la sección Perfil"><span>Scroll</span><i /></a>
    </section>
  );
}
