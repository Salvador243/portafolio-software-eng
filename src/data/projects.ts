export interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  type: 'microservice' | 'frontend'
}

export const projects: Record<'es' | 'en', Project[]> = {
  es: [
    {
      title: 'Ecosistema de Soporte Inteligente',
      description: 'Backend de alta disponibilidad en NestJS con WhatsApp Business Cloud API. Motor de procesamiento de webhooks orientado a eventos que convierte consultas de usuarios en tickets de servicio estructurados dentro del CRM del cliente.',
      technologies: ['NestJS', 'Node.js', 'WhatsApp Cloud API', 'Webhooks', 'Event-Driven', 'CRM'],
      type: 'microservice' as const
    },
    {
      title: 'Portal Avanzado de Requisiciones',
      description: 'Portal corporativo de suministros con Angular 18 y Signals para reactividad fina, mejorando el rendimiento de renderizado en tablas de datos complejas. UI consistente con PrimeNG y sincronización de estado de servidor con TanStack Query.',
      technologies: ['Angular 18', 'Signals', 'TypeScript', 'PrimeNG', 'TanStack Query', 'Tailwind CSS'],
      github: 'https://github.com/Salvador243/integradora-front',
      demo: 'https://integradora-front.netlify.app',
      type: 'frontend' as const
    },
    {
      title: 'Control de Inventario de Herramientas',
      description: 'Arquitectura distribuida para la trazabilidad de activos industriales mediante microservicios y AWS Elastic Beanstalk. Sistema completo de gestión de inventario con autenticación JWT, gestión de herramientas y exportación de datos.',
      technologies: ['NestJS', 'TypeScript', 'AWS Elastic Beanstalk', 'MySQL', 'TypeORM', 'JWT', 'Clean Architecture'],
      github: 'https://github.com/Salvador243/integradora-tools',
      type: 'microservice' as const
    },
    {
      title: 'Sistema de Gestión para ONG',
      description: 'Plataforma integral de gestión logística utilizando Clean Architecture y APIs RESTful. Incluye gestión de cursos, exámenes, resultados, integración con WordPress y Moodle, y almacenamiento en AWS S3.',
      technologies: ['Laravel', 'PHP 8', 'Vue 3', 'MySQL', 'AWS S3', 'WordPress', 'Moodle', 'Clean Architecture'],
      type: 'frontend' as const
    }
  ],
  en: [
    {
      title: 'Intelligent Support Ecosystem',
      description: 'High-availability backend in NestJS using WhatsApp Business Cloud API. Event-driven webhook processing engine that automatically converts user queries into structured service tickets within the client CRM.',
      technologies: ['NestJS', 'Node.js', 'WhatsApp Cloud API', 'Webhooks', 'Event-Driven', 'CRM'],
      type: 'microservice' as const
    },
    {
      title: 'Advanced Requisition Portal',
      description: 'Corporate supply portal built with Angular 18 and Signals for fine-grained reactivity, improving rendering performance in complex data tables. Consistent UI with PrimeNG and server-state synchronization via TanStack Query.',
      technologies: ['Angular 18', 'Signals', 'TypeScript', 'PrimeNG', 'TanStack Query', 'Tailwind CSS'],
      github: 'https://github.com/Salvador243/integradora-front',
      demo: 'https://integradora-front.netlify.app',
      type: 'frontend' as const
    },
    {
      title: 'Tool Inventory Control System',
      description: 'Distributed architecture for industrial asset traceability using microservices and AWS Elastic Beanstalk. Complete inventory management system with JWT authentication, tool management, and data export.',
      technologies: ['NestJS', 'TypeScript', 'AWS Elastic Beanstalk', 'MySQL', 'TypeORM', 'JWT', 'Clean Architecture'],
      github: 'https://github.com/Salvador243/integradora-tools',
      type: 'microservice' as const
    },
    {
      title: 'NGO Management System',
      description: 'Comprehensive logistics management platform using Clean Architecture and RESTful APIs. Includes course management, exams, results, WordPress and Moodle integration, and AWS S3 storage.',
      technologies: ['Laravel', 'PHP 8', 'Vue 3', 'MySQL', 'AWS S3', 'WordPress', 'Moodle', 'Clean Architecture'],
      type: 'frontend' as const
    }
  ]
}
