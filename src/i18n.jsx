import { createContext, useContext, useState } from 'react';

const translations = {
    en: {
        // Navbar / MobileMenu
        nav: {
            home: 'Home',
            projects: 'Projects',
            posts: 'Posts',
            about: 'About',
            contact: 'Contact',
        },

        // Home
        home: {
            eyebrow: 'Welcome to my portfolio',
            roles: ['SOFTWARE ENGINEER', 'STUDENT'],
            description: '5th-year Systems Engineering student at UTN FRC. Building practical software through real-world projects.',
            viewProjects: 'View Projects',
            aboutMe: 'About Me',
            contact: 'Contact',
        },

        // Projects
        projects: {
            heading: 'Featured Projects',
            subtitle: 'Academic and production projects. Click View Details to learn more about each one.',
            viewDetails: 'View Details',
            screenshots: 'Screenshots',
            details: 'Details',
            systemRoles: 'System Roles',
            keyFeatures: 'Key Features',
            devApproach: 'Development Approach',
            architecture: 'Architecture',
            stack: 'Stack',
            fromProblem: 'From Problem to Product',
            fromProblemText: 'This project started from a real operational problem observed while interacting with the center as a patient. After several conversations with the staff, I analyzed the workflow of appointments, payments and professional schedules, and proposed a custom digital system to centralize those processes — translating business needs directly into working software.',
            items: {
                thalus: {
                    title: 'Thalus Recovery Platform',
                    shortDesc: 'Production web platform developed for a kinesiology center to manage appointments, professionals, payments and patient sessions.',
                    fullDesc: [
                        'Thalus is a production web platform built for a kinesiology and sports recovery center. The system centralizes appointment scheduling, payment processing, patient management and professional operations into a single platform actively used daily by the business.',
                        'The platform defines three system roles — Receptionist, Professional and Patient — each with a dedicated interface and controlled permissions ensuring secure access to information.',
                    ],
                    approach: 'Developed using iterative MVP methodology — delivering a functional system first (authentication, appointments, roles, dashboards), then progressively adding integrations: payment processing via Mercado Pago, WhatsApp activity notifications, and Google Calendar sync.',
                    architecture: 'Django monolithic architecture with modular apps: accounts, branches, services, appointments, payments, notifications, and calendar sync. Deployed on a VPS with Cloudflare protection and token-based role-based access control.',
                    roleNames: ['Receptionist', 'Professional', 'Patient'],
                    roles: [
                        { desc: 'Manages appointments, attendance and daily operations per branch' },
                        { desc: 'Views assigned schedule, manages patient sessions and tracks attendance' },
                        { desc: 'Books appointments, manages packages, performs payments and tracks sessions' },
                    ],
                },
                'sim-g11': {
                    title: 'SIM-G11 – Queue Simulation',
                    shortDesc: 'Simulation system developed to study queueing models and stochastic processes using Python scientific libraries.',
                    fullDesc: [
                        'University project developed for a Simulation course to explore modeling and analysis of stochastic systems, with a focus on queueing models and performance analysis.',
                        'Implemented using Python alongside scientific and testing libraries to simulate system behavior, analyze performance metrics and validate results through automated tests. Also includes a basic frontend interface to visualize simulation results under different conditions.',
                    ],
                    features: [
                        'Queue system simulation with configurable parameters',
                        'Stochastic event generation and statistical analysis',
                        'Mathematical modeling of system performance',
                        'Automated test suite with Pytest',
                        'Frontend interface to visualize simulation results',
                    ],
                },
                cima: {
                    title: 'CIMA – Disability Center ABM',
                    shortDesc: 'Web application to manage patients and professionals for a disabilities integration center, with REST API and authentication.',
                    fullDesc: [
                        'Full-stack web application built for a real client: a disabilities integration center. The system manages patients and professionals, handles authentication and provides role-based access to the platform.',
                        'The live demo uses credentials admin / 123. The published version is intentionally limited to protect client data — the production system includes an appointment calendar, specialties management and further operational features.',
                    ],
                    features: [
                        'Patient and professional ABM (full CRUD)',
                        'JWT-based authentication with Bcrypt',
                        'REST API built with Express.js',
                        'Role-based access control',
                        'PostgreSQL relational data model',
                    ],
                },
                'abm-cars': {
                    title: 'Car Dealership ABM',
                    shortDesc: 'Microservices-based Java application to manage a car dealership test drive system with Keycloak authentication.',
                    fullDesc: [
                        'Java backend application developed for a university course on distributed systems. Implements a microservices architecture for managing a car dealership test drive workflow.',
                        'Integrates Keycloak for authentication and authorization, an API Gateway for service routing and a notification subsystem. Follows MVC, DAO and DTO design patterns throughout.',
                    ],
                    features: [
                        'Microservices architecture with Spring Boot',
                        'Keycloak authentication and authorization',
                        'API Gateway for request routing',
                        'Notification system',
                        'MVC / DAO / DTO patterns',
                    ],
                },
            },
        },

        // Posts
        posts: {
            heading: 'Latest LinkedIn Posts',
            subtitle: 'Insights, projects and ideas I share on LinkedIn.',
            viewPost: 'View Post',
            followMe: 'Follow me on LinkedIn',
            errorMsg: 'Unable to load posts at the moment.',
            visitProfile: 'Visit my LinkedIn profile',
        },

        // About
        about: {
            heading: 'About Me',
            subtitle: 'Background, experience and what drives me.',
            summaryP1: 'Advanced Systems Engineering student in my fifth year at Universidad Tecnológica Nacional – FRC, with hands-on professional experience in both corporate and fintech environments. Currently working as a Test Automation Engineer at Banco de Córdoba, and previously contributed to automated testing at EPAM Systems.',
            summaryP2: 'I focus on building practical and maintainable software — applying engineering patterns, collaborative workflows, and iterative delivery to solve real problems. I believe in minimal viable solutions and just-in-time development as the foundation for producing clean, purposeful code.',
            techStack: 'Tech Stack',
            thalusTitle: 'Thalus Kine – Clinic Management System',
            thalusDesc: 'A full management system built for a real kinesiotherapy clinic. The project involved direct domain discovery sessions with the client, translating operational business needs into concrete software features, and solving day-to-day workflow problems through iterative improvements. Delivered as a minimal viable product and evolved based on continuous user feedback.',
            epamRole: 'Test Automation Engineer · Jun 2025 – Dec 2025',
            epamItems: [
                'Java-based software projects within distributed corporate teams.',
                'Analysis of existing codebases and business flows.',
                'Design and documentation of automated test cases.',
                'Enterprise software development processes and best practices.',
            ],
            bancoRole: 'Test Automation Engineer · Dec 2025 – Present',
            bancoItems: [
                'Fintech environment validating business-critical banking applications.',
                'Analyzed and worked with Python-based automation scripts.',
                'Automated functional validations to improve regression coverage.',
                'Collaborated across QA, development, and business teams in Agile.',
            ],
            education: 'Education',
            degree: 'B.S. in Systems Engineering (In Progress · 5th Year)',
            degreeDetail: 'UTN FRC (2022 – Present)',
            coursework: 'Relevant coursework: Java (Udemy 110h+), Web Development, Agile practices, Simulation',
        },

        // Contact
        contact: {
            heading: 'Get In Touch',
            subtitle: 'Open to opportunities, collaborations, and conversations.',
            email: 'Email',
            emailSub: 'Send a message',
            linkedin: 'LinkedIn',
            linkedinSub: 'Connect',
            github: 'GitHub',
            githubSub: 'View code',
        },
    },

    es: {
        nav: {
            home: 'Inicio',
            projects: 'Proyectos',
            posts: 'Posts',
            about: 'Sobre mí',
            contact: 'Contacto',
        },

        home: {
            eyebrow: 'Bienvenido a mi portfolio',
            roles: ['INGENIERO DE SOFTWARE', 'ESTUDIANTE'],
            description: 'Estudiante de 5° año de Ingeniería en Sistemas en UTN FRC. Construyendo software práctico a través de proyectos reales.',
            viewProjects: 'Ver Proyectos',
            aboutMe: 'Sobre Mí',
            contact: 'Contacto',
        },

        projects: {
            heading: 'Proyectos Destacados',
            subtitle: 'Proyectos académicos y de producción. Hacé clic en Ver Detalles para más información.',
            viewDetails: 'Ver Detalles',
            screenshots: 'Capturas',
            details: 'Detalles',
            systemRoles: 'Roles del Sistema',
            keyFeatures: 'Funcionalidades Clave',
            devApproach: 'Enfoque de Desarrollo',
            architecture: 'Arquitectura',
            stack: 'Stack',
            fromProblem: 'Del Problema al Producto',
            fromProblemText: 'Este proyecto nació de un problema operativo real observado al interactuar con el centro como paciente. Tras varias conversaciones con el personal, analicé el flujo de turnos, pagos y agendas profesionales, y propuse un sistema digital a medida para centralizar esos procesos — traduciendo necesidades del negocio directamente en software funcional.',
            items: {
                thalus: {
                    title: 'Thalus Recovery Platform',
                    shortDesc: 'Plataforma web en producción desarrollada para un centro de kinesiología para gestionar turnos, profesionales, pagos y sesiones de pacientes.',
                    fullDesc: [
                        'Thalus es una plataforma web en producción construida para un centro de kinesiología y recuperación deportiva. El sistema centraliza la programación de turnos, procesamiento de pagos, gestión de pacientes y operaciones profesionales en una única plataforma utilizada diariamente por el negocio.',
                        'La plataforma define tres roles de sistema — Recepcionista, Profesional y Paciente — cada uno con una interfaz dedicada y permisos controlados que aseguran el acceso seguro a la información.',
                    ],
                    approach: 'Desarrollado con metodología MVP iterativa — entregando primero un sistema funcional (autenticación, turnos, roles, dashboards), y luego integrando progresivamente: procesamiento de pagos via Mercado Pago, notificaciones por WhatsApp y sincronización con Google Calendar.',
                    architecture: 'Arquitectura monolítica Django con apps modulares: cuentas, sucursales, servicios, turnos, pagos, notificaciones y sincronización de calendario. Desplegado en VPS con protección Cloudflare y control de acceso basado en roles con tokens.',
                    roleNames: ['Recepcionista', 'Profesional', 'Paciente'],
                    roles: [
                        { desc: 'Gestiona turnos, asistencia y operaciones diarias por sucursal' },
                        { desc: 'Ve su agenda asignada, gestiona sesiones de pacientes y registra asistencia' },
                        { desc: 'Reserva turnos, gestiona paquetes, realiza pagos y sigue sus sesiones' },
                    ],
                },
                'sim-g11': {
                    title: 'SIM-G11 – Simulación de Colas',
                    shortDesc: 'Sistema de simulación desarrollado para estudiar modelos de colas y procesos estocásticos usando librerías científicas de Python.',
                    fullDesc: [
                        'Proyecto universitario desarrollado para la materia Simulación, enfocado en el modelado y análisis de sistemas estocásticos, con énfasis en modelos de colas y análisis de rendimiento.',
                        'Implementado con Python junto a librerías científicas y de testing para simular comportamiento del sistema, analizar métricas de rendimiento y validar resultados mediante tests automatizados. También incluye una interfaz frontend básica para visualizar resultados bajo diferentes condiciones.',
                    ],
                    features: [
                        'Simulación de sistemas de colas con parámetros configurables',
                        'Generación de eventos estocásticos y análisis estadístico',
                        'Modelado matemático del rendimiento del sistema',
                        'Suite de tests automatizados con Pytest',
                        'Interfaz frontend para visualizar resultados',
                    ],
                },
                cima: {
                    title: 'CIMA – ABM Centro de Discapacidad',
                    shortDesc: 'Aplicación web para gestionar pacientes y profesionales de un centro de integración de personas con discapacidad, con API REST y autenticación.',
                    fullDesc: [
                        'Aplicación web full-stack construida para un cliente real: un centro de integración de personas con discapacidad. El sistema gestiona pacientes y profesionales, maneja autenticación y provee acceso basado en roles.',
                        'La demo utiliza las credenciales admin / 123. La versión publicada está intencionalmente limitada para proteger datos del cliente — el sistema en producción incluye calendario de turnos, gestión de especialidades y más funcionalidades operativas.',
                    ],
                    features: [
                        'ABM de pacientes y profesionales (CRUD completo)',
                        'Autenticación JWT con Bcrypt',
                        'API REST construida con Express.js',
                        'Control de acceso basado en roles',
                        'Modelo de datos relacional PostgreSQL',
                    ],
                },
                'abm-cars': {
                    title: 'ABM Concesionaria de Autos',
                    shortDesc: 'Aplicación Java basada en microservicios para gestionar un sistema de pruebas de manejo con autenticación Keycloak.',
                    fullDesc: [
                        'Aplicación backend Java desarrollada para una materia universitaria sobre sistemas distribuidos. Implementa una arquitectura de microservicios para gestionar el flujo de pruebas de manejo de una concesionaria.',
                        'Integra Keycloak para autenticación y autorización, un API Gateway para enrutamiento de servicios y un subsistema de notificaciones. Sigue los patrones de diseño MVC, DAO y DTO en todo el proyecto.',
                    ],
                    features: [
                        'Arquitectura de microservicios con Spring Boot',
                        'Autenticación y autorización con Keycloak',
                        'API Gateway para enrutamiento de requests',
                        'Sistema de notificaciones',
                        'Patrones MVC / DAO / DTO',
                    ],
                },
            },
        },

        posts: {
            heading: 'Últimos Posts de LinkedIn',
            subtitle: 'Ideas, proyectos y aprendizajes que comparto en LinkedIn.',
            viewPost: 'Ver Post',
            followMe: 'Seguime en LinkedIn',
            errorMsg: 'No se pudieron cargar los posts en este momento.',
            visitProfile: 'Visitá mi perfil de LinkedIn',
        },

        about: {
            heading: 'Sobre Mí',
            subtitle: 'Trayectoria, experiencia y lo que me motiva.',
            summaryP1: 'Estudiante avanzado de Ingeniería en Sistemas en mi quinto año en la Universidad Tecnológica Nacional – FRC, con experiencia profesional práctica en entornos corporativos y fintech. Actualmente trabajando como Automatizador de Pruebas en Banco de Córdoba, y previamente contribuyendo a la automatización de testing en EPAM Systems.',
            summaryP2: 'Me enfoco en construir software práctico y mantenible — aplicando patrones de ingeniería, flujos de trabajo colaborativos y entrega iterativa para resolver problemas reales. Creo en las soluciones mínimas viables y el desarrollo justo a tiempo como base para producir código limpio y con propósito.',
            techStack: 'Tech Stack',
            thalusTitle: 'Thalus Kine – Sistema de Gestión Clínica',
            thalusDesc: 'Un sistema de gestión completo construido para una clínica de kinesiología real. El proyecto involucró sesiones directas de descubrimiento de dominio con el cliente, traduciendo necesidades operativas del negocio en funcionalidades de software concretas, y resolviendo problemas de flujo de trabajo diario mediante mejoras iterativas. Entregado como producto mínimo viable y evolucionado en base a feedback continuo del usuario.',
            epamRole: 'Automatizador de Pruebas · Jun 2025 – Dic 2025',
            epamItems: [
                'Proyectos de software basados en Java dentro de equipos corporativos distribuidos.',
                'Análisis de codebases existentes y flujos de negocio.',
                'Diseño y documentación de casos de prueba automatizados.',
                'Procesos y mejores prácticas de desarrollo de software empresarial.',
            ],
            bancoRole: 'Automatizador de Pruebas · Dic 2025 – Presente',
            bancoItems: [
                'Entorno fintech validando aplicaciones bancarias de misión crítica.',
                'Análisis e interacción con scripts de automatización en Python.',
                'Automatización de validaciones funcionales para mejorar la cobertura de regresión.',
                'Colaboración entre equipos de QA, desarrollo y negocio en metodología Agile.',
            ],
            education: 'Educación',
            degree: 'Ingeniería en Sistemas (En Curso · 5° Año)',
            degreeDetail: 'UTN FRC (2022 – Presente)',
            coursework: 'Formación relevante: Java (Udemy 110h+), Desarrollo Web, Prácticas Ágiles, Simulación',
        },

        contact: {
            heading: 'Contacto',
            subtitle: 'Abierto a oportunidades, colaboraciones y conversaciones.',
            email: 'Email',
            emailSub: 'Enviame un mensaje',
            linkedin: 'LinkedIn',
            linkedinSub: 'Conectar',
            github: 'GitHub',
            githubSub: 'Ver código',
        },
    },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('en');
    const t = translations[lang];
    const toggleLang = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'));

    return (
        <LanguageContext.Provider value={{ lang, t, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);
