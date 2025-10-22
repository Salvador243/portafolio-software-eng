export const projects = {
  es: [
    {
      title: 'Integradora Auth - Microservicio de Autenticación',
      description: 'Microservicio de autenticación desarrollado con NestJS y arquitectura clean. Implementa autenticación JWT, encriptación de contraseñas con bcrypt, y manejo de usuarios con MySQL y TypeORM.',
      technologies: ['NestJS', 'TypeScript', 'JWT', 'Bcrypt', 'MySQL', 'TypeORM', 'Clean Architecture'],
      github: 'https://github.com/Salvador243/integradora-auth',
      type: 'microservice' as const
    },
    {
      title: 'Integradora General - Microservicio General',
      description: 'Microservicio general para gestión de entidades del sistema. Desarrollado con NestJS, implementa validación de datos, manejo de errores personalizado y arquitectura modular.',
      technologies: ['NestJS', 'TypeScript', 'MySQL', 'TypeORM', 'Class Validator'],
      github: 'https://github.com/Salvador243/integradora-general',
      type: 'microservice' as const
    },
    {
      title: 'Integradora Tools - Microservicio de Herramientas',
      description: 'Microservicio para gestión de herramientas e inventario. Incluye funcionalidades de exportación a Excel con ExcelJS, gestión de categorías, tipos de herramientas e instancias.',
      technologies: ['NestJS', 'TypeScript', 'ExcelJS', 'MySQL', 'TypeORM'],
      github: 'https://github.com/Salvador243/integradora-tools',
      type: 'microservice' as const
    },
    {
      title: 'Integradora Front - Aplicación Angular',
      description: 'Aplicación frontend monolítica desarrollada con Angular 20. Implementa arquitectura clean, gestión de estado con servicios, integración con microservicios backend, y UI moderna con PrimeNG y Tailwind CSS.',
      technologies: ['Angular 20', 'TypeScript', 'RxJS', 'PrimeNG', 'Tailwind CSS', 'Clean Architecture'],
      github: 'https://github.com/Salvador243/integradora-front',
      demo: 'https://integradora-front.netlify.app',
      type: 'frontend' as const
    }
  ],
  en: [
    {
      title: 'Integradora Auth - Authentication Microservice',
      description: 'Authentication microservice developed with NestJS and clean architecture. Implements JWT authentication, password encryption with bcrypt, and user management with MySQL and TypeORM.',
      technologies: ['NestJS', 'TypeScript', 'JWT', 'Bcrypt', 'MySQL', 'TypeORM', 'Clean Architecture'],
      github: 'https://github.com/Salvador243/integradora-auth',
      type: 'microservice' as const
    },
    {
      title: 'Integradora General - General Microservice',
      description: 'General microservice for system entity management. Developed with NestJS, implements data validation, custom error handling, and modular architecture.',
      technologies: ['NestJS', 'TypeScript', 'MySQL', 'TypeORM', 'Class Validator'],
      github: 'https://github.com/Salvador243/integradora-general',
      type: 'microservice' as const
    },
    {
      title: 'Integradora Tools - Tools Microservice',
      description: 'Microservice for tools and inventory management. Includes Excel export functionality with ExcelJS, category management, tool types, and instances.',
      technologies: ['NestJS', 'TypeScript', 'ExcelJS', 'MySQL', 'TypeORM'],
      github: 'https://github.com/Salvador243/integradora-tools',
      type: 'microservice' as const
    },
    {
      title: 'Integradora Front - Angular Application',
      description: 'Monolithic frontend application developed with Angular 20. Implements clean architecture, state management with services, backend microservices integration, and modern UI with PrimeNG and Tailwind CSS.',
      technologies: ['Angular 20', 'TypeScript', 'RxJS', 'PrimeNG', 'Tailwind CSS', 'Clean Architecture'],
      github: 'https://github.com/Salvador243/integradora-front',
      demo: 'https://integradora-front.netlify.app',
      type: 'frontend' as const
    }
  ]
}
