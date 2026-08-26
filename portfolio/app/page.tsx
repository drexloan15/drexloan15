import { ArrowUpRight, CodeIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { capabilities, projects, stackGroups } from "@/data/portfolio";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jean Puccio",
  jobTitle: "Desarrollador Full Stack",
  url: "https://drexloan15.github.io/drexloan15/",
  address: { "@type": "PostalAddress", addressLocality: "Lima", addressCountry: "PE" },
  sameAs: [
    "https://github.com/drexloan15",
    "https://www.linkedin.com/in/weslye-jean-pieers-puccio-angulo-38a115246",
  ],
  knowsAbout: ["Next.js", "React", "TypeScript", "NestJS", "FastAPI", "PostgreSQL", "Docker", "Windows", "Linux"],
};

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  detailLabel,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  detailLabel: string;
}) {
  return (
    <div className="section-heading">
      <Reveal>
        <div className="section-heading__label"><span>{number}</span>{eyebrow}</div>
      </Reveal>
      <div className="section-heading__main">
        <Reveal><h2>{title}</h2></Reveal>
        <Reveal className="section-heading__summary" delay={0.08}>
          <span>{detailLabel}</span>
          <p>{description}</p>
        </Reveal>
      </div>
    </div>
  );
}

function CapabilityTicker() {
  return (
    <div className="ticker" aria-label={`Áreas de trabajo: ${capabilities.join(", ")}`}>
      <div className="ticker__track">
        {[0, 1].map((group) => (
          <div className="ticker__group" key={group} aria-hidden={group === 1}>
            {capabilities.map((item) => <span key={item}>{item}<i /></span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <ScrollProgress />
      <Navigation />

      <main id="contenido">
        <Hero />
        <CapabilityTicker />

        <section className="section profile" id="perfil">
          <div className="shell">
            <SectionHeading
              number="01"
              eyebrow="Perfil"
              title="Entender el conjunto cambia la calidad del resultado."
              description="No veo el frontend, el backend y la infraestructura como piezas aisladas. Trabajo en cómo se conectan para que el producto funcione bien de principio a fin."
              detailLabel="Mi enfoque"
            />

            <div className="profile__grid">
              <Reveal className="profile__statement" direction="left">
                <p className="profile__lead">
                  Desarrollo productos web completos y puedo tomar una funcionalidad desde la primera decisión técnica hasta su puesta en producción.
                </p>
                <p>
                  He trabajado en plataformas de gestión, monitoreo en tiempo real, automatizaciones, asistentes documentales y sitios corporativos. El punto de partida siempre es el mismo: comprender qué necesita resolverse y construir una solución que tenga sentido para ese contexto.
                </p>
                <p>
                  También me involucro en lo que no siempre se ve en una captura: permisos, colas, manejo de errores, secretos, documentación y despliegues en Windows y Linux.
                </p>
              </Reveal>

              <Reveal className="profile__metrics" direction="right" delay={0.1}>
                <div><strong>116</strong><span>dispositivos monitorizados</span></div>
                <div><strong>15</strong><span>endpoints en una sola solución</span></div>
                <div><strong>04</strong><span>casos presentados</span></div>
                <div><strong>02</strong><span>entornos: Windows + Linux</span></div>
              </Reveal>
            </div>

            <div className="principles">
              <Reveal className="principle principle--wide">
                <span className="principle__number">A</span>
                <div><h3>Visión de producto</h3><p>Primero entiendo la necesidad; después elijo la arquitectura y las herramientas.</p></div>
                <div className="principle__diagram" aria-hidden="true"><span>Problema</span><i /><span>Decisión</span><i /><span>Producto</span></div>
              </Reveal>
              <Reveal className="principle" delay={0.08}>
                <span className="principle__number">B</span>
                <CodeIcon />
                <h3>Código mantenible</h3>
                <p>Estructuras claras, responsabilidades definidas y documentación útil.</p>
              </Reveal>
              <Reveal className="principle principle--accent" delay={0.14}>
                <span className="principle__number">C</span>
                <div className="mini-terminal" aria-hidden="true"><span>$ deploy</span><i>✓ production ready</i></div>
                <h3>Pensar en producción</h3>
                <p>Una solución no termina cuando funciona en local.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section stack-section" id="stack">
          <div className="shell">
            <SectionHeading
              number="02"
              eyebrow="Stack"
              title="Herramientas para cada capa del producto."
              description="Una selección de tecnologías que utilizo con frecuencia. No es una lista cerrada: me adapto al entorno y a las necesidades reales de cada proyecto."
              detailLabel="Cómo elijo"
            />
            <div className="stack-grid">
              {stackGroups.map((group, index) => (
                <Reveal className="stack-card" key={group.title} delay={index * 0.06}>
                  <div className="stack-card__head"><span>{group.number}</span><i /></div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="proyectos">
          <div className="shell">
            <SectionHeading
              number="03"
              eyebrow="Proyectos"
              title="Trabajo que puede explicarse, no solo mostrarse."
              description="Cada caso resume el problema, la solución y las decisiones técnicas más relevantes. El código está disponible en GitHub."
              detailLabel="Qué encontrarás"
            />
            <div className="projects-grid">
              {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
            </div>
            <Reveal className="all-projects">
              <a href="https://github.com/drexloan15?tab=repositories" target="_blank" rel="noreferrer">
                <GithubIcon /> Explorar todos los repositorios <ArrowUpRight />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="contact__grid" aria-hidden="true" />
          <div className="shell contact__inner">
            <Reveal>
              <div className="contact__eyebrow"><i /> Disponible para conversar</div>
              <h2>¿Tienes un problema<br />que vale la pena <span>resolver?</span></h2>
              <p>Si buscas un desarrollador que pueda moverse entre interfaz, backend e infraestructura, cuéntame en qué estás trabajando.</p>
              <a className="button button--light" href="mailto:wespuccio1279@gmail.com">Iniciar una conversación <ArrowUpRight /></a>
            </Reveal>
            <Reveal className="contact__aside" delay={0.12}>
              <span>Contacto directo</span>
              <a href="mailto:wespuccio1279@gmail.com"><MailIcon />wespuccio1279@gmail.com</a>
              <a href="https://www.linkedin.com/in/weslye-jean-pieers-puccio-angulo-38a115246" target="_blank" rel="noreferrer"><LinkedinIcon />LinkedIn <ArrowUpRight /></a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer__inner">
          <a className="brand" href="#inicio"><span className="brand__mark">JP</span><span className="brand__name">Jean Puccio</span></a>
          <p>Diseñado y desarrollado con Next.js · {new Date().getFullYear()}</p>
          <div><a href="https://github.com/drexloan15" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a><a href="mailto:wespuccio1279@gmail.com" aria-label="Correo"><MailIcon /></a></div>
        </div>
      </footer>
    </>
  );
}
