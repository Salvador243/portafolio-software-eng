export const projects = {
  es: [
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
    },
    {
      title: 'Sistema Avanzado de Requisiciones',
      description: 'Sistema de suministro corporativo construido con Angular 18, Lazy Loading y reactividad fina mediante Signals. Implementa arquitectura clean, gestión de estado con servicios y UI moderna con PrimeNG y Tailwind CSS.',
      technologies: ['Angular 18', 'TypeScript', 'Signals', 'Lazy Loading', 'PrimeNG', 'Tailwind CSS', 'RxJS'],
      github: 'https://github.com/Salvador243/integradora-front',
      demo: 'https://integradora-front.netlify.app',
      type: 'frontend' as const
    }
  ],
  en: [
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
    },
    {
      title: 'Advanced Requisition System',
      description: 'Corporate supply system built with Angular 18, Lazy Loading, and fine-grained reactivity using Signals. Implements clean architecture, service-based state management, and modern UI with PrimeNG and Tailwind CSS.',
      technologies: ['Angular 18', 'TypeScript', 'Signals', 'Lazy Loading', 'PrimeNG', 'Tailwind CSS', 'RxJS'],
      github: 'https://github.com/Salvador243/integradora-front',
      demo: 'https://integradora-front.netlify.app',
      type: 'frontend' as const
    }
  ]
}
