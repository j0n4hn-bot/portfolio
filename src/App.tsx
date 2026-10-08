import { useState, useEffect } from 'react'
import './App.css'
import { useGitHubRepos } from './hooks/useGitHubRepos'

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )
  
  // TODO: Reemplaza con tu usuario real (ej: 'jonadev')
  const { repos, loading } = useGitHubRepos('octocat');

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
        {/* PANEL IZQUIERDO: PERFIL Y COPY (Cortana) */}
        <aside className="profile-panel glass animate-slide-up delay-100">
          <div className="profile-header">
            <h1 className="profile-name">Jonathan</h1>
            <p className="profile-location">📍 Honduras</p>
          </div>
          
          <div className="profile-role">
            <h2>Data Analyst &<br/>AI-Augmented Engineer</h2>
          </div>

          <div className="about-section">
            <p>
              Transformo volúmenes críticos de datos en arquitecturas de software accionables. 
              Como analista estratégico y desarrollador certificado en Oracle, no solo interpreto la información: 
              construyo la infraestructura que la soporta. Utilizo Inteligencia Artificial como un multiplicador 
              de fuerza operativa para diseñar, programar y escalar soluciones con precisión quirúrgica.
            </p>
          </div>

          <div className="skills-matrix">
            <h3>Capacidades Tácticas</h3>
            <div className="tags">
              <span className="tag oracle">Arquitectura Oracle DB</span>
              <span className="tag">Análisis Relacional (MySQL)</span>
              <span className="tag ai">Ingeniería Acelerada por IA</span>
              <span className="tag">Lógica Algorítmica Avanzada</span>
              <span className="tag networking">Infraestructura CCNA</span>
            </div>
          </div>
        </aside>

        {/* PANEL DERECHO: NODOS DE PRODUCCIÓN Y GITHUB (Jarvis) */}
        <main className="data-panel animate-slide-up delay-200">
          <div className="panel-header">
            <h2>Nodos de Producción (GitHub)</h2>
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
          </div>

          <div className="repos-grid">
            {loading ? (
              <div className="loading-state">
                <div className="loader"></div>
                <p>Estableciendo conexión con GitHub API...</p>
              </div>
            ) : (
              repos.length > 0 ? repos.map(repo => (
                <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-card glass">
                  <div className="repo-top">
                    <h3>{repo.name}</h3>
                    {repo.language && <span className="lang-indicator">{repo.language}</span>}
                  </div>
                  <p className="repo-desc">{repo.description || 'Procesamiento analítico y lógica de desarrollo sin descripción pública.'}</p>
                  <div className="repo-stats">
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🔗 Ver Código Fuente</span>
                  </div>
                </a>
              )) : (
                 <div className="repo-card glass empty-state">
                  <h3>No Signal</h3>
                  <p>Añade tu usuario de GitHub en App.tsx para desplegar métricas.</p>
                </div>
              )
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
