import { useState, useEffect } from 'react'
import './App.css'
function App() {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="dashboard-wrapper">
      <div className="cyber-grid"></div>
      
      <header className="topbar glass">
        <div className="logo-container">
          <div className="logo-icon">JD</div>
          <div className="logo-text">JoNa<span className="accent">Dev</span></div>
        </div>
        <div className="topbar-actions">
          <span className="status-badge"><span className="pulse"></span> AI Augmented</span>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <div className="dashboard-layout">
        {/* PANEL IZQUIERDO: PERFIL Y COPY (Data Analyst Focus) */}
        <aside className="profile-panel glass animate-slide-up delay-100">
          <div className="profile-header">
            <h1 className="profile-name">Jonathan</h1>
            <p className="profile-location">📍 Honduras</p>
          </div>
          
          <div className="profile-role">
            <h2>Data Analyst | SQL Specialist • BI • AI-Augmented</h2>
          </div>

          <div className="about-section">
            <p>
              Con bases sólidas en programación y arquitectura de bases de datos (especialista en MySQL), 
              me dedico a transformar datos complejos en información estratégica para negocios. 
              Integro Inteligencia Artificial en mi flujo de trabajo como un multiplicador de fuerza 
              operativa para escribir código más limpio, automatizar procesos y acelerar el análisis 
              de datos con máxima precisión.
            </p>
          </div>

          <div className="skills-matrix">
            <h3>Core Skills</h3>
            <div className="tags">
              <span className="tag core">SQL</span>
              <span className="tag core">Python / Pandas</span>
              <span className="tag core">Excel</span>
              <span className="tag core">Power BI</span>
              <span className="tag core">Tableau</span>
              <span className="tag">Data Cleaning</span>
              <span className="tag">Data Visualization</span>
              <span className="tag">EDA</span>
            </div>

            <h3 className="mt-4">Data & Architecture</h3>
            <div className="tags">
              <span className="tag data">MySQL</span>
              <span className="tag data">SQL Server</span>
              <span className="tag data">Oracle</span>
              <span className="tag data">PostgreSQL</span>
              <span className="tag">ETL</span>
              <span className="tag">Data Modeling</span>
            </div>

            <h3 className="mt-4">Complementary</h3>
            <div className="tags">
              <span className="tag comp">Automation</span>
              <span className="tag comp">OR-Tools</span>
              <span className="tag comp">AI-Assisted Dev</span>
              <span className="tag comp">Git / GitHub</span>
            </div>
          </div>
        </aside>

        {/* PANEL DERECHO: FEATURED PROJECTS */}
        <main className="data-panel animate-slide-up delay-200">
          <div className="panel-header">
            <h2>Featured Projects</h2>
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
          </div>

          <div className="repos-grid">
            <a href="https://klassia-edu.vercel.app" target="_blank" rel="noopener noreferrer" className="repo-card glass">
              <div className="repo-top">
                <h3>Klassia Edu</h3>
                <span className="lang-indicator">Gamificación • Tiempo Real</span>
              </div>
              <p className="repo-desc">Webapp de gamificación educativa (estilo ClassDojo) pionera en integrar gamificación física en tiempo real mediante tarjetas y códigos QR.</p>
              <div className="repo-stats">
                <span>⭐ Core Project</span>
                <span>🔗 Ver Demo</span>
              </div>
            </a>

            <a href="https://schoolasync.vercel.app" target="_blank" rel="noopener noreferrer" className="repo-card glass">
              <div className="repo-top">
                <h3>SchoolAsync</h3>
                <span className="lang-indicator">Motor Metaheurístico • Algoritmos</span>
              </div>
              <p className="repo-desc">Motor algorítmico que resuelve y genera horarios escolares automáticamente manejando restricciones duras/blandas (50+ docentes, 1000+ asignaturas).</p>
              <div className="repo-stats">
                <span>⭐ Data Architecture</span>
                <span>🔗 Ver Demo</span>
              </div>
            </a>

            <a href="https://laisev.vercel.app" target="_blank" rel="noopener noreferrer" className="repo-card glass">
              <div className="repo-top">
                <h3>LaiSeV</h3>
                <span className="lang-indicator">E-commerce • IA Analítica</span>
              </div>
              <p className="repo-desc">Plataforma de alquiler de mobiliario con Dashboard Analítico. Incluye un Asesor Comercial Autónomo (IA) que procesa telemetría de visitas para sugerir ventas.</p>
              <div className="repo-stats">
                <span>⭐ Business Intelligence</span>
                <span>🔗 Ver Demo</span>
              </div>
            </a>

            <a href="#" className="repo-card glass">
              <div className="repo-top">
                <h3>eduPlan-IA</h3>
                <span className="lang-indicator">AI-Augmented • Data</span>
              </div>
              <p className="repo-desc">Solución acelerada por Inteligencia Artificial para la planificación y análisis de métricas educativas.</p>
              <div className="repo-stats">
                <span>⭐ AI Tooling</span>
                <span>🚧 En construcción</span>
              </div>
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
