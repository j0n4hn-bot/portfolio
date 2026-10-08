# JoNa DataSol // Engineering & Portfolio Platform

> **Arquitectura de Software, Pipelines de Datos y Soluciones de Inteligencia Artificial.**  
> Diseñado y desarrollado íntegramente por **JoNa Dev** (**Powered by JoNa**).

---

## 📌 Resumen del Proyecto

Plataforma web modular de alto rendimiento desarrollada con enfoque **Mobile-First**, renderizado reactivo a 60 FPS y persistencia relacional con **Supabase (PostgreSQL)**.

El sistema opera bajo una arquitectura desacoplada orientada a servicios:
- **Portal Público (Showcase):** Experiencia inmersiva con fondo dinámico neuronal en Canvas 2D, selector tri-estado de tema (Oscuro, Claro, Sistema), soporte multilingüe y catálogo de proyectos en tiempo real.
- **Control Hub (CMS Propietario):** Panel administrativo protegido bajo GoTrue JWT y Row Level Security (RLS) que integra:
  - Sincronización automatizada bidireccional con la API de GitHub.
  - Editor clásico de publicaciones técnicas en Markdown con optimización SEO automatizada.
  - Repositorio digital de medios (DAM) con motor de recorte milimétrico en Canvas y conversión nativa a formato WebP.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript, Vite |
| **Estilos & Animación** | Vanilla CSS Tokens, Glassmorphism, HTML5 Canvas 2D |
| **Internacionalización** | i18next (ES / EN) |
| **Backend & Base de Datos** | Supabase, PostgreSQL, Row Level Security (RLS) |
| **Almacenamiento** | Supabase Storage Buckets (WebP Assets) |
| **Seguridad & Auth** | JWT Session Persisted Tokens, Protected Route Guards |

---

## 🔒 Propiedad Intelectual y Licencia

Este repositorio es una muestra pública de ingeniería y diseño (**Showcase / Proof of Concept**).  
El código fuente integral del núcleo del backend, esquemas relacionales avanzados y módulos administrativos privados están protegidos y restringidos bajo derechos de autor exclusivos de **JoNa Dev**.

**Todos los derechos reservados © 2026 JoNa DataSol.**  
*Powered by JoNa.*
