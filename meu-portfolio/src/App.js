import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Projeto Exemplo 1',
      description: 'Sistema de gerenciamento com dashboard interativo e análise de dados em tempo real',
      image: '',
      thinking: 'Comecei pensando em resolver o problema de forma escalável. A ideia era criar algo que pudesse crescer sem precisar refazer tudo do zero. Desenhei a arquitetura pensando em microserviços desde o início.',
      problems: 'Tive problemas com a sincronização de dados em tempo real. O banco começou a ficar lento com muitos usuários simultâneos. Além disso, a API estava demorando demais para responder em horários de pico.',
      solutions: 'Implementei Redis para cache, otimizei as queries com índices adequados e migrei para WebSockets para comunicação em tempo real. Isso reduziu a latência em 70% e melhorou muito a experiência do usuário.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'WebSocket'],
      github: 'https://github.com/seu-usuario/projeto',
      demo: 'https://demo.seusite.com',
      status: 'Concluído'
    },
    {
      id: 2,
      title: 'Projeto Exemplo 2',
      description: 'API REST para e-commerce com sistema completo de pagamentos',
      image: '',
      thinking: 'Precisava de algo robusto para lidar com transações financeiras. Segurança era prioridade número um, então pesquisei bastante sobre as melhores práticas antes de começar.',
      problems: 'Integração com gateway de pagamento foi um pesadelo. A documentação era confusa e os erros não eram claros. Precisei fazer muito debug e testes.',
      solutions: 'Criei uma camada de abstração para os pagamentos, facilitando trocar de gateway se necessário. Implementei logs detalhados e um sistema de retry automático para requisições que falhassem.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      github: '',
      demo: '',
      status: 'Em andamento'
    },
    {
      id: 3,
      title: 'Projeto Exemplo 3',
      description: 'Aplicativo mobile para gestão de tarefas e produtividade',
      image: '',
      thinking: 'Queria criar algo simples mas eficiente. Estudei vários apps concorrentes para entender o que funcionava e o que era só firula.',
      problems: 'Performance no mobile era um desafio. Lista com muitos itens começava a travar.',
      solutions: 'Implementei virtualização de listas e otimizei re-renders desnecessários. O app ficou fluido mesmo com centenas de tarefas.',
      technologies: ['React Native', 'TypeScript', 'Firebase'],
      github: 'https://github.com/seu-usuario/app',
      demo: '',
      status: 'Concluído'
    }
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [profileImage, setProfileImage] = useState(''); // Cole a URL da sua foto aqui

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fef5f7 0%, #fff 50%, #fef5f7 100%)',
      color: '#2d2d2d',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '25px 50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 182, 193, 0.2)' : 'none',
      transition: 'all 0.4s ease',
      boxShadow: scrolled ? '0 2px 20px rgba(255, 182, 193, 0.1)' : 'none'
    },
    logo: {
      fontSize: '1.4em',
      fontWeight: 700,
      color: '#e91e63',
      letterSpacing: '2px'
    },
    navLinks: {
      display: 'flex',
      gap: '40px',
      alignItems: 'center'
    },
    navLink: {
      color: '#666',
      textDecoration: 'none',
      fontSize: '0.95em',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      position: 'relative'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 50px',
      position: 'relative',
      overflow: 'hidden'
    },
    sakuraPetal: {
      position: 'absolute',
      width: '20px',
      height: '20px',
      background: 'linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 100%)',
      borderRadius: '50% 0 50% 0',
      opacity: 0.6,
      animation: 'float 15s infinite ease-in-out'
    },
    heroContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '80px',
      maxWidth: '1200px',
      zIndex: 2
    },
    heroLeft: {
      flex: 1
    },
    heroTitle: {
      fontSize: '4.5em',
      fontWeight: 800,
      marginBottom: '20px',
      lineHeight: '1.1',
      color: '#2d2d2d',
      letterSpacing: '-1px'
    },
    heroSubtitle: {
      fontSize: '1.8em',
      color: '#e91e63',
      marginBottom: '20px',
      fontWeight: 600
    },
    heroDescription: {
      fontSize: '1.1em',
      color: '#666',
      lineHeight: '1.9',
      marginBottom: '40px',
      maxWidth: '500px'
    },
    ctaButton: {
      padding: '16px 40px',
      background: 'linear-gradient(135deg, #e91e63 0%, #f06292 100%)',
      border: 'none',
      borderRadius: '50px',
      color: '#fff',
      fontSize: '1em',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(233, 30, 99, 0.3)'
    },
    heroRight: {
      flex: 0.8
    },
    profileImageContainer: {
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '8px solid #fff',
      boxShadow: '0 20px 60px rgba(233, 30, 99, 0.2)',
      background: 'linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    profileImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    section: {
      padding: '120px 50px',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '3.5em',
      fontWeight: 800,
      marginBottom: '20px',
      color: '#2d2d2d',
      position: 'relative',
      display: 'inline-block'
    },
    sectionSubtitle: {
      fontSize: '1.2em',
      color: '#999',
      marginBottom: '60px',
      fontWeight: 400
    },
    accent: {
      color: '#e91e63'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '40px',
      marginTop: '60px'
    },
    projectCard: {
      background: '#fff',
      borderRadius: '24px',
      overflow: 'hidden',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
      border: '1px solid rgba(255, 182, 193, 0.2)'
    },
    projectCardHover: {
      transform: 'translateY(-12px)',
      boxShadow: '0 20px 60px rgba(233, 30, 99, 0.2)'
    },
    projectImage: {
      width: '100%',
      height: '260px',
      background: 'linear-gradient(135deg, #ffebee 0%, #fce4ec 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    projectImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    projectStatus: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      padding: '8px 18px',
      background: 'rgba(255, 255, 255, 0.95)',
      color: '#e91e63',
      borderRadius: '30px',
      fontSize: '0.85em',
      fontWeight: 600,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    },
    projectContent: {
      padding: '35px'
    },
    projectTitle: {
      fontSize: '1.6em',
      fontWeight: 700,
      marginBottom: '12px',
      color: '#2d2d2d'
    },
    projectDescription: {
      color: '#666',
      marginBottom: '25px',
      lineHeight: '1.7',
      fontSize: '0.98em'
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '25px'
    },
    techBadge: {
      padding: '8px 16px',
      background: 'linear-gradient(135deg, #ffebee 0%, #fce4ec 100%)',
      border: '1px solid rgba(233, 30, 99, 0.2)',
      borderRadius: '20px',
      fontSize: '0.85em',
      color: '#e91e63',
      fontWeight: 600
    },
    viewButton: {
      width: '100%',
      padding: '14px',
      background: 'transparent',
      border: '2px solid #e91e63',
      borderRadius: '12px',
      color: '#e91e63',
      fontSize: '0.95em',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '30px',
      backdropFilter: 'blur(8px)'
    },
    modalContent: {
      background: '#fff',
      borderRadius: '30px',
      maxWidth: '900px',
      width: '100%',
      maxHeight: '90vh',
      overflow: 'auto',
      boxShadow: '0 30px 100px rgba(233, 30, 99, 0.3)',
      position: 'relative'
    },
    modalHeader: {
      padding: '50px 50px 30px 50px',
      borderBottom: '1px solid rgba(255, 182, 193, 0.2)',
      position: 'relative'
    },
    closeBtn: {
      position: 'absolute',
      top: '25px',
      right: '25px',
      background: 'linear-gradient(135deg, #ffebee 0%, #fce4ec 100%)',
      border: 'none',
      color: '#e91e63',
      fontSize: '1.8em',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      cursor: 'pointer',
      fontWeight: 300,
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 1
    },
    modalBody: {
      padding: '40px 50px 50px 50px'
    },
    modalSection: {
      marginBottom: '40px'
    },
    modalSectionTitle: {
      fontSize: '1.4em',
      color: '#e91e63',
      marginBottom: '15px',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    modalText: {
      color: '#666',
      lineHeight: '2',
      fontSize: '1.05em'
    },
    linkButtons: {
      display: 'flex',
      gap: '15px',
      marginTop: '40px'
    },
    linkBtn: {
      padding: '14px 30px',
      background: 'linear-gradient(135deg, #e91e63 0%, #f06292 100%)',
      border: 'none',
      borderRadius: '50px',
      color: '#fff',
      fontWeight: 600,
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      fontSize: '0.95em'
    },
    about: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    },
    aboutText: {
      fontSize: '1.2em',
      lineHeight: '2',
      color: '#666',
      marginBottom: '30px'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '25px',
      marginTop: '60px'
    },
    skillCard: {
      padding: '30px',
      background: '#fff',
      borderRadius: '20px',
      border: '1px solid rgba(255, 182, 193, 0.2)',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
    },
    skillTitle: {
      fontSize: '1.2em',
      fontWeight: 700,
      color: '#e91e63',
      marginBottom: '12px'
    },
    skillList: {
      color: '#666',
      fontSize: '0.95em',
      lineHeight: '1.8'
    }
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          @keyframes float {
            0%, 100% { 
              transform: translateY(0) rotate(0deg); 
              opacity: 0.6;
            }
            50% { 
              transform: translateY(-100px) rotate(180deg); 
              opacity: 0.3;
            }
          }
          
          ::-webkit-scrollbar {
            width: 12px;
          }
          
          ::-webkit-scrollbar-track {
            background: #fef5f7;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #e91e63 0%, #f06292 100%);
            border-radius: 10px;
          }
          
          .nav-link:hover {
            color: #e91e63 !important;
          }
          
          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(233, 30, 99, 0.4);
          }
          
          .view-button:hover {
            background: linear-gradient(135deg, #e91e63 0%, #f06292 100%);
            color: #fff;
          }
          
          .close-btn:hover {
            transform: rotate(90deg);
            background: linear-gradient(135deg, #e91e63 0%, #f06292 100%);
            color: #fff;
          }
          
          .link-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(233, 30, 99, 0.4);
          }
          
          .skill-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(233, 30, 99, 0.15);
          }
        `}
      </style>

      <nav style={styles.nav}>
        <div style={styles.logo}></div>
        <div style={styles.navLinks}>
          <span className="nav-link" style={styles.navLink} onClick={() => scrollToSection('hero')}>
            Início
          </span>
          <span className="nav-link" style={styles.navLink} onClick={() => scrollToSection('projects')}>
            Projetos
          </span>
          <span className="nav-link" style={styles.navLink} onClick={() => scrollToSection('about')}>
            Sobre
          </span>
        </div>
      </nav>

      <section id="hero" style={styles.hero}>
        {/* Pétalas decorativas */}
        <div style={{...styles.sakuraPetal, top: '10%', left: '10%', animationDelay: '0s'}}></div>
        <div style={{...styles.sakuraPetal, top: '20%', right: '15%', animationDelay: '2s'}}></div>
        <div style={{...styles.sakuraPetal, bottom: '15%', left: '20%', animationDelay: '4s'}}></div>
        <div style={{...styles.sakuraPetal, bottom: '25%', right: '10%', animationDelay: '6s'}}></div>

        <div style={styles.heroContent}>
          <div style={styles.heroLeft}>
            <h1 style={styles.heroTitle}>Gabriel</h1>
            <h2 style={styles.heroSubtitle}>Desenvolvedor Full Stack</h2>
            <p style={styles.heroDescription}>
              Transformo ideias em código funcional. Construo soluções que resolvem problemas reais, com foco em qualidade e performance.
            </p>
            <button 
              className="cta-button"
              style={styles.ctaButton}
              onClick={() => scrollToSection('projects')}
            >
              Ver Meus Projetos
            </button>
          </div>

          <div style={styles.heroRight}>
            <div style={styles.profileImageContainer}>
              {profileImage ? (
                <img src={profileImage} alt="Gabriel" style={styles.profileImage} />
              ) : (
                <span style={{color: '#e91e63', fontSize: '1.1em', fontWeight: 600}}>
                  <img src="https://via.placeholder.com/150" alt="Placeholder" />
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Meus <span style={styles.accent}>Projetos</span>
        </h2>
        <p style={styles.sectionSubtitle}>
          Soluções que desenvolvi, os desafios enfrentados e como resolvi cada um deles
        </p>

        <div style={styles.projectsGrid}>
          {projects.map(project => (
            <div
              key={project.id}
              style={{
                ...styles.projectCard,
                ...(hoveredCard === project.id ? styles.projectCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div style={styles.projectImage}>
                {project.image ? (
                  <img src={project.image} alt={project.title} style={styles.projectImageImg} />
                ) : (
                  <span style={{color: '#e91e63', fontSize: '0.95em'}}>
                    Adicione a imagem do projeto
                  </span>
                )}
                <div style={styles.projectStatus}>{project.status}</div>
              </div>
              
              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
                
                <div style={styles.techStack}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} style={styles.techBadge}>{tech}</span>
                  ))}
                </div>
                
                <button className="view-button" style={styles.viewButton}>
                  Ver Detalhes Completos
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{...styles.section, background: 'linear-gradient(135deg, #fff 0%, #fef5f7 100%)'}}>
        <div style={styles.about}>
          <h2 style={styles.sectionTitle}>
            Sobre <span style={styles.accent}>Mim</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Desenvolvedor apaixonado por tecnologia e resolução de problemas
          </p>
          
          <p style={styles.aboutText}>
            E aí! Sou o Gabriel, desenvolvedor full stack que gosta de transformar ideias em realidade. Trabalho com código há alguns anos e cada projeto é uma nova oportunidade de aprender e evoluir.
          </p>
          
          <p style={styles.aboutText}>
            Meu foco é criar soluções que funcionam de verdade, sem enrolação. Gosto de encarar desafios técnicos e sempre busco a melhor forma de resolver cada problema.
          </p>

          <div style={styles.skillsGrid}>
            <div className="skill-card" style={styles.skillCard}>
              <div style={styles.skillTitle}>Frontend</div>
              <div style={styles.skillList}>React, JavaScript, HTML/CSS</div>
            </div>
            <div className="skill-card" style={styles.skillCard}>
              <div style={styles.skillTitle}>Backend</div>
              <div style={styles.skillList}>Node.js, Python, APIs REST</div>
            </div>
            <div className="skill-card" style={styles.skillCard}>
              <div style={styles.skillTitle}>Database</div>
              <div style={styles.skillList}>MongoDB, PostgreSQL, Redis</div>
            </div>
            <div className="skill-card" style={styles.skillCard}>
              <div style={styles.skillTitle}>DevOps</div>
              <div style={styles.skillList}>Git, Docker, Linux</div>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div style={styles.modal} onClick={() => setSelectedProject(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <button className="close-btn" style={styles.closeBtn} onClick={() => setSelectedProject(null)}>×</button>
              <h2 style={styles.projectTitle}>{selectedProject.title}</h2>
              <p style={styles.projectDescription}>{selectedProject.description}</p>
              <div style={styles.techStack}>
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} style={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
            
            <div style={styles.modalBody}>
              <div style={styles.modalSection}>
                <h3 style={styles.modalSectionTitle}>
                  <span>💡</span> Como Pensei
                </h3>
                <p style={styles.modalText}>{selectedProject.thinking}</p>
              </div>
              
              <div style={styles.modalSection}>
                <h3 style={styles.modalSectionTitle}>
                  <span>⚡</span> Problemas Encontrados
                </h3>
                <p style={styles.modalText}>{selectedProject.problems}</p>
              </div>
              
              <div style={styles.modalSection}>
                <h3 style={styles.modalSectionTitle}>
                  <span>✨</span> Soluções Implementadas
                </h3>
                <p style={styles.modalText}>{selectedProject.solutions}</p>
              </div>
              
              {(selectedProject.github || selectedProject.demo) && (
                <div style={styles.linkButtons}>
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="link-btn" style={styles.linkBtn}>
                      Ver no GitHub
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="link-btn" style={styles.linkBtn}>
                      Ver Demo ao Vivo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;