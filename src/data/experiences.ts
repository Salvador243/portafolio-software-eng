export interface Experience {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
  tags: string[]
  current?: boolean
}

export const experiences: Record<'es' | 'en', Experience[]> = {
  es: [
    {
      title: 'Desarrollador Técnico Salesforce',
      company: 'Cliente de Servicios Financieros (Confidencial)',
      period: 'Enero 2026 - Presente',
      location: 'Remoto',
      current: true,
      responsibilities: [
        'Desarrollo y mantenimiento de soluciones Salesforce con Lightning Web Components (LWC) y Apex, traduciendo requerimientos de negocio a implementaciones nativas de la plataforma.',
        'Creación y edición de OmniScripts y Data Mappers (OmniStudio) para procesos de negocio guiados e interacciones basadas en datos.',
        'Automatización y configuración con Flows, List Views y Object Manager para la gestión de registros, configuración de UI y administración a nivel de objeto.',
        'Modelado de datos: diseño y evolución del modelo de datos (objetos estándar y personalizados, campos y relaciones) respetando las dependencias de configuración de la plataforma.',
        'Pruebas unitarias de clases Apex y mantenimiento de la cobertura de tests requerida para despliegues, garantizando la calidad del código antes de cada entrega.',
        'Gobernanza de datos: aplicación de prácticas de data governance de Salesforce en un entorno regulado de servicios financieros.'
      ],
      tags: ['LWC', 'Apex', 'OmniStudio', 'OmniScripts', 'Data Mappers', 'Flows', 'Object Manager', 'Apex Testing', 'Data Modeling']
    },
    {
      title: 'Front-end Developer',
      company: 'The Palace Company',
      period: 'Septiembre 2024 - Octubre 2025',
      location: 'Mérida, Yucatán',
      responsibilities: [
        'Diseño de un ecosistema modular de micro-frontends con Vue 2/3 y Vite, implementando Vite Federation para carga de módulos en runtime y Vue Router para navegación entre aplicaciones distribuidas.',
        'Arquitectura de capas de estado global con Pinia y patrones de Composition API, gestionando sincronización de datos en tiempo real y reduciendo la huella de memoria del cliente.',
        'Desarrollo de interfaces de alta fidelidad con PrimeVue y utilidades propias de Composition API. Integración de GraphQL vía Apollo Client con caché avanzado y políticas de UI optimista.',
        'Aseguramiento de calidad con 100% de cobertura de lógica usando Vitest y pruebas E2E con Playwright en pipelines CI/CD de GitHub Actions.'
      ],
      tags: ['Vue 2/3', 'Vite Federation', 'Pinia', 'PrimeVue', 'GraphQL', 'Apollo', 'Vitest', 'Playwright']
    },
    {
      title: 'Full Stack Developer',
      company: 'CreSer Sin Fronteras',
      period: 'Marzo 2023 - Agosto 2024',
      location: 'CDMX',
      responsibilities: [
        'Ingeniería de un ecosistema Laravel 10 aplicando Domain-Driven Design: capas de servicio, repositorios y value objects para desacoplar las reglas de negocio de la persistencia.',
        'Optimización de esquemas MySQL complejos, reduciendo la latencia de consultas un 60% mediante indexación personalizada, profiling y caché con Redis.',
        'Desarrollo de un motor de reportes de alto rendimiento para generación masiva de PDF/Excel con Laravel Queues y Redis de forma asíncrona.',
        'Gestión de almacenamiento escalable en AWS S3 y despliegues automatizados en Elastic Beanstalk.'
      ],
      tags: ['Laravel 10', 'PHP 8', 'DDD', 'MySQL', 'Redis', 'AWS S3', 'Elastic Beanstalk']
    },
    {
      title: 'Full Stack Developer Jr',
      company: 'Datahome',
      period: 'Septiembre 2022 - Febrero 2023',
      location: 'Villahermosa',
      responsibilities: [
        'Modernización de módulos financieros legacy, gestionando migraciones de Python 2.7 a 3.10.',
        'Implementación de triggers y funciones personalizadas en PostgreSQL para automatizar bitácoras de auditoría e integridad de datos.',
        'Refactorización de código monolítico hacia arquitecturas modulares con principios SOLID, mejorando la eficiencia de algoritmos para cálculos financieros complejos.'
      ],
      tags: ['Python', 'PostgreSQL', 'SOLID', 'Migraciones']
    },
    {
      title: 'Full Stack Developer Jr',
      company: 'SIAC WEB',
      period: 'Mayo 2022 - Agosto 2022',
      location: 'CDMX',
      responsibilities: [
        'Desarrollo de microservicios de facturación CFDI 4.0 con Python (Flask): parsing seguro de XML, transformaciones XSLT e integración de firma digital con el SAT.',
        'Construcción de dashboards interactivos de Recursos Humanos con Vanilla JS y jQuery, garantizando compatibilidad cross-browser y manipulación optimizada del DOM.'
      ],
      tags: ['Python', 'Flask', 'CFDI 4.0', 'XML/XSLT', 'JavaScript', 'jQuery']
    }
  ],
  en: [
    {
      title: 'Technical Salesforce Developer',
      company: 'Financial Services Client (Confidential)',
      period: 'January 2026 - Present',
      location: 'Remote',
      current: true,
      responsibilities: [
        'Build and maintain Salesforce solutions using Lightning Web Components (LWC) and Apex, translating business requirements into platform-native implementations.',
        'Create and edit OmniScripts and Data Mappers (OmniStudio) to support guided business processes and data-driven interactions.',
        'Automation and configuration with Flows, List Views and Object Manager for record management, UI configuration and object-level administration.',
        'Data modeling: design and evolution of the data model (standard and custom objects, fields and relationships) respecting platform configuration dependencies.',
        'Unit testing for Apex classes and maintenance of the test coverage required for deployments, ensuring code quality before every delivery.',
        'Data governance: applying Salesforce data governance practices within a regulated financial services environment.'
      ],
      tags: ['LWC', 'Apex', 'OmniStudio', 'OmniScripts', 'Data Mappers', 'Flows', 'Object Manager', 'Apex Testing', 'Data Modeling']
    },
    {
      title: 'Front-end Developer',
      company: 'The Palace Company',
      period: 'September 2024 - October 2025',
      location: 'Mérida, Mexico',
      responsibilities: [
        'Designed a modular micro-frontend ecosystem using Vue 2/3 and Vite, implementing Vite Federation for runtime module loading and Vue Router for complex navigation across distributed micro-apps.',
        'Architected global state layers using Pinia with composition patterns, managing real-time data synchronicity and reducing client-side memory footprint.',
        'Developed high-fidelity interfaces using PrimeVue and custom Composition API utilities. Integrated GraphQL via Apollo Client with advanced caching and optimistic UI policies.',
        'Enforced 100% logic coverage using Vitest and Playwright for E2E testing within automated GitHub Actions CI/CD pipelines.'
      ],
      tags: ['Vue 2/3', 'Vite Federation', 'Pinia', 'PrimeVue', 'GraphQL', 'Apollo', 'Vitest', 'Playwright']
    },
    {
      title: 'Full Stack Developer',
      company: 'CreSer Sin Fronteras',
      period: 'March 2023 - August 2024',
      location: 'CDMX',
      responsibilities: [
        'Engineered a robust Laravel 10 ecosystem applying Domain-Driven Design: service layers, repositories and value objects to decouple business rules from framework persistence.',
        'Optimized complex MySQL schemas, reducing query latency by 60% through custom indexing, query profiling and Redis caching.',
        'Developed a high-performance reporting engine for mass PDF/Excel generation using asynchronous Laravel Queues and Redis.',
        'Managed scalable file storage on AWS S3 and automated deployments on Elastic Beanstalk.'
      ],
      tags: ['Laravel 10', 'PHP 8', 'DDD', 'MySQL', 'Redis', 'AWS S3', 'Elastic Beanstalk']
    },
    {
      title: 'Full Stack Developer Jr',
      company: 'Datahome',
      period: 'September 2022 - February 2023',
      location: 'Villahermosa',
      responsibilities: [
        'Led the modernization of legacy financial modules, managing Python 2.7 to 3.10 migrations.',
        'Implemented custom PostgreSQL triggers and functions to automate audit logging and data integrity checks.',
        'Refactored monolithic codebases into modular architectures using SOLID principles, enhancing algorithm efficiency for complex financial calculations.'
      ],
      tags: ['Python', 'PostgreSQL', 'SOLID', 'Migrations']
    },
    {
      title: 'Full Stack Developer Jr',
      company: 'SIAC WEB',
      period: 'May 2022 - August 2022',
      location: 'CDMX',
      responsibilities: [
        'Developed CFDI 4.0 invoicing microservices using Python (Flask): secure XML parsing, XSLT transformations and digital signature integration with SAT authorities.',
        'Crafted interactive HR dashboards using Vanilla JS and jQuery, ensuring cross-browser compatibility and optimized DOM manipulation.'
      ],
      tags: ['Python', 'Flask', 'CFDI 4.0', 'XML/XSLT', 'JavaScript', 'jQuery']
    }
  ]
}
