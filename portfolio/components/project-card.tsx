"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PointerEvent } from "react";
import { ArrowUpRight, CheckIcon, GithubIcon } from "@/components/icons";
import type { Project } from "@/data/portfolio";

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "services") {
    return (
      <div className="project-mock project-mock--services" aria-hidden="true">
        <div className="mock-window-bar"><i /><i /><i /><span>service-map.yml</span></div>
        <div className="service-map">
          <div className="service-map__core"><span>Gateway</span><strong>API</strong><i /></div>
          <svg viewBox="0 0 400 170" preserveAspectRatio="none"><path d="M200 48v28M200 76H66v30M200 76h134v30M200 76v30" /><path className="pulse-path" d="M200 48v28M200 76H66v30" /></svg>
          <div className="service-map__nodes">
            <span><i />Incidentes<small>:3001</small></span>
            <span><i />Problemas<small>:3002</small></span>
            <span><i />Cambios<small>:3003</small></span>
          </div>
        </div>
        <div className="mock-status-row"><span><i />4 servicios activos</span><span>24ms promedio</span></div>
      </div>
    );
  }

  if (type === "monitoring") {
    const bars = [42, 67, 54, 81, 62, 88, 72, 94, 76, 84, 58, 90];
    return (
      <div className="project-mock project-mock--monitoring" aria-hidden="true">
        <div className="monitor-head"><div><span>Dispositivos</span><strong>116</strong></div><span className="monitor-live"><i /> EN VIVO</span></div>
        <div className="monitor-chart">
          {bars.map((height, index) => <motion.i key={index} initial={{ scaleY: 0 }} whileInView={{ scaleY: height / 100 }} viewport={{ once: true }} transition={{ delay: index * 0.035, duration: 0.55 }} />)}
        </div>
        <div className="monitor-summary"><span><i className="summary-ok" />103 operativas</span><span><i className="summary-warn" />9 alertas</span><span><i className="summary-off" />4 sin conexión</span></div>
      </div>
    );
  }

  if (type === "portal") {
    return (
      <div className="project-mock project-mock--portal" aria-hidden="true">
        <aside><b>JP</b><i /><i /><i /><i /></aside>
        <div className="portal-content">
          <div className="portal-top"><span>Buenos días, agente</span><i /></div>
          <div className="portal-metrics"><span><small>Abiertos</small><b>24</b></span><span><small>En curso</small><b>08</b></span><span><small>Resueltos</small><b>92%</b></span></div>
          <div className="portal-list"><span><i />Actualización de acceso <b>Alta</b></span><span><i />Consulta de servicio <b>Media</b></span></div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-mock project-mock--assistant" aria-hidden="true">
      <div className="assistant-head"><span><i /> Asistente interno</span><small>RAG activo</small></div>
      <div className="assistant-chat"><p className="chat-user">¿Cuál es el proceso para escalar una incidencia?</p><p className="chat-bot"><i />Encontré el procedimiento en 3 documentos. Primero, valida la prioridad...</p></div>
      <div className="assistant-sources"><span>proceso-soporte.pdf</span><span>manual-interno.pdf</span></div>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <motion.article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
      onPointerMove={handlePointerMove}
      initial={reduceMotion ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-card__glow" aria-hidden="true" />
      <div className="project-card__visual"><ProjectVisual type={project.visual} /></div>
      <div className="project-card__copy">
        <div className="project-card__meta"><span>{project.number}</span><span>{project.category}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="project-card__details">
          {project.details.map((detail) => <li key={detail}><CheckIcon />{detail}</li>)}
        </ul>
        <ul className="project-card__tags" aria-label="Tecnologías utilizadas">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <a className="project-card__link" href={project.github} target="_blank" rel="noreferrer">
          <GithubIcon /> Ver código <ArrowUpRight />
        </a>
      </div>
    </motion.article>
  );
}
