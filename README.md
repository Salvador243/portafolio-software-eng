# Portafolio de Salvador García

Portafolio personal desarrollado con Vue 3, TypeScript, Vite y Tailwind CSS 4.

## 🚀 Tecnologías

- **Vue 3** - Framework progresivo de JavaScript
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS 4** - Framework de CSS utility-first
- **Radix Vue** - Componentes UI accesibles
- **Lucide Vue** - Iconos modernos
- **shadcn-vue** - Componentes UI reutilizables
- **vue-i18n** - Internacionalización (Español/Inglés)

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm run dev

# Compilar para producción
pnpm run build

# Previsualizar build de producción
pnpm run preview
```

## 🎨 Características

- ✅ **Multiidioma (i18n)** - Español e Inglés con selector de idioma
- ✅ Diseño minimalista con colores neutros (blanco, gris, negro)
- ✅ Totalmente responsive
- ✅ Navegación suave entre secciones
- ✅ Sección de experiencia profesional con timeline
- ✅ Educación y certificaciones
- ✅ Información de contacto actualizada (LinkedIn, GitHub, Email)
- ✅ Componentes reutilizables
- ✅ TypeScript para type safety
- ✅ Optimizado para SEO

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.vue           # Navegación principal con selector de idioma
│   ├── LanguageSwitcher.vue # Selector ES/EN
│   ├── Hero.vue             # Sección hero/presentación
│   ├── About.vue            # Sobre mí
│   ├── Experience.vue       # Experiencia profesional (3 años)
│   ├── Education.vue        # Educación y certificaciones
│   ├── Skills.vue           # Habilidades técnicas
│   ├── Projects.vue         # Proyectos destacados
│   ├── Contact.vue          # Información de contacto
│   └── Footer.vue           # Pie de página
├── data/
│   ├── experiences.ts       # Datos de experiencia (ES/EN)
│   ├── education.ts         # Datos de educación (ES/EN)
│   └── projects.ts          # Datos de proyectos (ES/EN)
├── i18n/
│   ├── index.ts             # Configuración i18n
│   └── locales/
│       ├── es.ts            # Traducciones en español
│       └── en.ts            # Traducciones en inglés
├── lib/
│   └── utils.ts             # Utilidades (cn helper)
├── App.vue                  # Componente principal
├── main.ts                  # Punto de entrada
└── style.css                # Estilos globales con Tailwind
```

## 🎯 Proyectos Destacados

El portafolio incluye información sobre:

### Microservicios Backend (NestJS)
- **integradora-auth** - Servicio de autenticación con JWT
- **integradora-general** - Servicio general del sistema
- **integradora-tools** - Gestión de herramientas e inventario

### Frontend (Angular)
- **integradora-front** - Aplicación Angular con arquitectura clean

Todos los proyectos implementan **Clean Architecture** y mejores prácticas de desarrollo.



## 📝 Licencia

MIT © Salvador García
