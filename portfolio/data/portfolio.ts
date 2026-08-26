export type Project = {
  number: string;
  category: string;
  title: string;
  summary: string;
  details: string[];
  stack: string[];
  github: string;
  featured?: boolean;
  visual: "services" | "monitoring" | "portal" | "assistant";
};

export const projects: Project[] = [
  {
    number: "01",
    category: "Arquitectura distribuida",
    title: "MesaITSM",
    summary:
      "Una plataforma modular para gestionar incidencias, problemas y cambios sin mezclar responsabilidades ni comprometer la trazabilidad.",
    details: [
      "Cuatro microservicios independientes con NestJS y Prisma",
      "Cálculo de vencimientos, colas de trabajo y control por roles",
      "Entorno reproducible con Docker Compose y gestión de secretos",
    ],
    stack: ["NestJS", "React", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/drexloan15/MesaITSM",
    featured: true,
    visual: "services",
  },
  {
    number: "02",
    category: "Observabilidad",
    title: "Monitoreo de 116 impresoras",
    summary:
      "Convertí un seguimiento manual en hojas de cálculo en un sistema que reúne estado, consumo, alertas e historial en tiempo real.",
    details: [
      "Recolección de datos por SNMP",
      "API FastAPI con 15 endpoints",
      "Mapa de sedes y alertas controladas",
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "SNMP", "Leaflet"],
    github: "https://github.com/drexloan15/dashboard-react",
    visual: "monitoring",
  },
  {
    number: "03",
    category: "Producto web",
    title: "Portal de atención multirrol",
    summary:
      "Una interfaz diferenciada para clientes y agentes, diseñada para organizar la atención y adaptar la experiencia a cada perfil.",
    details: [
      "Diseñador visual de flujos",
      "Base de conocimiento y paneles",
      "Roles, permisos y marca configurable",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Roles y permisos"],
    github: "https://github.com/drexloan15/comutel-frontend",
    visual: "portal",
  },
  {
    number: "04",
    category: "IA aplicada",
    title: "Asistente documental",
    summary:
      "Una aplicación que permite consultar documentación interna desde la web o WhatsApp y recibir respuestas basadas en contenido recuperado.",
    details: [
      "Canalización RAG implementada desde cero",
      "Ingesta y almacenamiento vectorial",
      "Integración mediante un router de WhatsApp",
    ],
    stack: ["Python", "FastAPI", "RAG", "Vector store", "WhatsApp API"],
    github: "https://github.com/drexloan15/ChatBot-Helpdesk-assistant",
    visual: "assistant",
  },
];

export const stackGroups = [
  {
    number: "01",
    title: "Interfaces",
    description: "Experiencias claras, rápidas y adaptables a cualquier pantalla.",
    items: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "TanStack Query", "Recharts", "Leaflet"],
  },
  {
    number: "02",
    title: "Backend",
    description: "APIs y servicios pensados para crecer sin perder mantenibilidad.",
    items: ["NestJS", "Node.js", "Python", "FastAPI", "Express", "Prisma", "JWT", "Swagger", "PHP"],
  },
  {
    number: "03",
    title: "Datos",
    description: "Persistencia, búsquedas y procesamiento asíncrono según el caso.",
    items: ["PostgreSQL", "Redis", "Bull", "Elasticsearch", "RabbitMQ", "Vector stores"],
  },
  {
    number: "04",
    title: "Operación",
    description: "Entornos reproducibles y despliegues preparados para el mundo real.",
    items: ["Docker", "Docker Compose", "Vault", "Windows", "Linux", "PM2", "Git", "SNMP"],
  },
];

export const capabilities = [
  "Frontend",
  "Backend",
  "APIs",
  "Datos",
  "Automatización",
  "Infraestructura",
  "Windows",
  "Linux",
];
