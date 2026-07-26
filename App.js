const { useState } = React;

// Reusable Image Carousel Component
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveCarousel = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn carousel-prev" onClick={() => moveCarousel(-1)}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      {images.map((imgSrc, idx) => (
        <img
          key={idx}
          src={imgSrc}
          className={`carousel-slide ${idx === currentIndex ? 'active' : ''}`}
          alt={`Slide ${idx}`}
        />
      ))}
      <button className="carousel-btn carousel-next" onClick={() => moveCarousel(1)}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    if (window.innerWidth <= 900) {
      setMenuActive(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const name = encodeURIComponent(formData.name);
    const subject = encodeURIComponent(formData.subject);
    const message = encodeURIComponent(formData.message);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=srinidhib18@gmail.com&su=${subject}&body=Name:%20${name}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.open(gmailUrl, '_blank');
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div>
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#home" className="logo">SRINIDHI B</a>
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
            <i className={`fa-solid ${menuActive ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
          <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#publications" onClick={closeMenu}>Publications</a></li>
            <li><a href="#engagement" onClick={closeMenu}>Academic Engagements</a></li>
            <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Floating Scroll Controls */}
      <div className="scroll-nav-buttons">
        <button className="scroll-btn" onClick={scrollToTop} title="Scroll to Top">
          <i className="fa-solid fa-chevron-up"></i>
        </button>
        <button className="scroll-btn" onClick={scrollToBottom} title="Scroll to Bottom">
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>

      {/* Hero Section */}
      <div className="hero-wrapper" id="home">
        <section className="hero" id="about">
          <div className="hero-content">
            <div className="badge-intro">
              <i className="fa-solid fa-code"></i> Engineer II - Software @ Microchip Technology
            </div>
            <h1 className="hero-title">Srinidhi B</h1>
            <div className="hero-subtitle">Architecting Enterprise Web Systems, REST APIs & Cloud Solutions</div>
            <p className="hero-desc">
              Full-Stack Software Engineer with 3+ years of experience architecting enterprise web applications, distributed ERP systems, and secure API microservices using <strong>React</strong>, <strong>.NET Core</strong>, <strong>C#</strong>, and <strong>SQL Server</strong>.
            </p>

            <div className="metrics-bar">
              <div className="metric-item">
                <div className="metric-icon"><i className="fa-solid fa-sitemap"></i></div>
                <span className="metric-value">System Design</span>
                <span className="metric-label">HLD, LLD & SOLID</span>
              </div>
              <div className="metric-item">
                <div className="metric-icon"><i className="fa-solid fa-network-wired"></i></div>
                <span className="metric-value">Distributed Systems</span>
                <span className="metric-label">Async Jobs & APIs</span>
              </div>
              <div className="metric-item">
                <div className="metric-icon"><i className="fa-solid fa-cloud"></i></div>
                <span className="metric-value">Cloud & DevOps</span>
                <span className="metric-label">Azure, Docker & CI/CD</span>
              </div>
              <div className="metric-item">
                <div className="metric-icon"><i className="fa-solid fa-layer-group"></i></div>
                <span className="metric-value">Full-Stack Core</span>
                <span className="metric-label">.NET Core & React</span>
              </div>
            </div>

            <div className="btn-group">
              <a href="#contact" className="btn btn-primary"><i className="fa-solid fa-paper-plane"></i> Get In Touch</a>
              <a href="Resume/Srinidhi.pdf" target="_blank" rel="noopener noreferrer" download className="btn btn-secondary"><i className="fa-solid fa-download"></i> Download Resume</a>
            </div>
          </div>
          <div className="hero-image-container">
            <img 
              src="Images/Sri.JPG" 
              onError={(e) => { e.target.onerror = null; e.target.src = 'Images/Sri.jpg'; }} 
              alt="Srinidhi B" 
              className="hero-image" 
            />
          </div>
        </section>
      </div>

      {/* Experience */}
      <section id="experience">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Microchip Technology Inc. · Full-Time Enterprise Engineering</p>
        </div>
        <div className="timeline">
          {/* Engineer II - Software (Full-time) */}
          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <div className="timeline-role">Engineer II - Software</div>
                <div className="timeline-company">Microchip Technology Inc. | Bengaluru, Karnataka, India</div>
              </div>
              <div className="timeline-date">Oct 2023 – Present · Full-time</div>
            </div>
            <ul className="timeline-list">
              <li>Designed and developed full-stack web applications using <strong>React</strong>, <strong>.NET</strong>, and <strong>Oracle SQL</strong>, supporting internal enterprise workflows.</li>
              <li>Designed backend services for ERP and invoicing platforms using <strong>ASP.NET MVC (.NET)</strong>, <strong>SQL Server</strong>, and <strong>React</strong> supporting 10,000+ enterprise users.</li>
              <li>Architected <strong>REST APIs</strong> consumed by React frontend modules enabling reliable data exchange across distributed application services.</li>
              <li>Integrated <strong>OAuth 2.0</strong> authentication and <strong>Role-Based Access Control (RBAC)</strong> securing customer-facing APIs and internal enterprise modules.</li>
              <li>Diagnosed and resolved <strong>HTTPS–TLS handshake failures</strong>, improving API reliability and secure communication in production environments.</li>
              <li>Optimized SQL queries, indexing strategies, and backend logic, improving API response performance by <strong>25–30%</strong>.</li>
              <li>Established modular service architecture following <strong>Clean Architecture</strong>, <strong>SOLID principles</strong>, <strong>HLD/LLD</strong>, and <strong>DSA</strong> for scalable software solutions.</li>
              <li>Implemented unit testing using <strong>MOQ</strong> and <strong>NUnit</strong> to ensure production-ready, maintainable code, collaborating with QA, product, and engineering teams.</li>
            </ul>
          </div>
          {
          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <div className="timeline-role">Software Engineering Intern / Engineer I</div>
                <div className="timeline-company">Microchip Technology Inc. | Bengaluru, Karnataka, India</div>
              </div>
              <div className="timeline-date">Oct 2022 – Oct 2023</div>
            </div>
            <ul className="timeline-list">
              <li>Contributed to enterprise web application components using C#, .NET Core, and React.</li>
              <li>Assisted in database schema optimizations, stored procedure writing, and RESTful API integrations.</li>
            </ul>
          </div>
          }
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="section-header">
          <h2 className="section-title">Enterprise Systems & Architectural Implementations</h2>
          <p className="section-subtitle">Detailed breakdown of enterprise production platforms I designed and developed at scale</p>
        </div>
        <div className="grid-2">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">MySo – Customer Order Management & ERP Platform</h3>
              <p className="card-desc">
                I engineered a mission-critical, customer-facing order management platform enabling seamless order placement, live status tracking, and automated ERP-integrated invoicing for enterprise customers. To guarantee high availability and fault tolerance across high-volume workloads, I designed structured order lifecycle workflows featuring <strong>asynchronous background job handling</strong> and automated retry mechanisms for failed order reprocessing. I integrated robust <strong>OAuth 2.0</strong> security protocols and <strong>Role-Based Access Control (RBAC)</strong> to safeguard customer transactions and internal API endpoints, while optimizing database queries to handle large-scale data synchronization smoothly.
              </p>
              <div className="tag-container">
                <span className="tag">.NET Core</span>
                <span className="tag">React</span>
                <span className="tag">SQL Server</span>
                <span className="tag">Azure</span>
                <span className="tag">Docker</span>
                <span className="tag">HLD & LLD</span>
                <span className="tag">Asynchronous Jobs</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Sales Order Invoicing & Financial Engine</h3>
              <p className="card-desc">
                I architected high-performance invoice generation services that aggregate complex order, pricing, and tax data across distributed ERP backend modules. I implemented automated data validation and financial reconciliation logic to eliminate manual processing delays and human error, accelerating invoicing pipelines. By designing modular service layers using <strong>Clean Architecture</strong> and <strong>SOLID principles</strong>, I ensured the system supports configurable business rules for dynamic pricing and regional tax compliance. The backend APIs were refactored and tuned with <strong>optimized SQL indexing</strong>, resulting in a <strong>25–30% boost</strong> in overall API response performance under peak loads.
              </p>
              <div className="tag-container">
                <span className="tag">ASP.NET MVC</span>
                <span className="tag">Entity Framework</span>
                <span className="tag">REST API</span>
                <span className="tag">SQL Optimization</span>
                <span className="tag">Clean Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Core technical competencies directly from my engineering resume</p>
        </div>

        <div className="skills-category">
          <div className="skills-category-title"><i className="fa-solid fa-server"></i> Backend & Security</div>
          <div className="skills-wrapper">
            <span className="skill-pill">.NET Core</span>
            <span className="skill-pill">.NET Framework</span>
            <span className="skill-pill">C#</span>
            <span className="skill-pill">Web APIs</span>
            <span className="skill-pill">OAuth 2.0</span>
            <span className="skill-pill">Role-Based Access Control (RBAC)</span>
            <span className="skill-pill">Entity Framework</span>
            <span className="skill-pill">LINQ</span>
            <span className="skill-pill">Distributed Systems</span>
          </div>
        </div>

        <div className="skills-category">
          <div className="skills-category-title"><i className="fa-solid fa-sitemap"></i> Architecture, System Design & DSA</div>
          <div className="skills-wrapper">
            <span className="skill-pill">High-Level Design (HLD)</span>
            <span className="skill-pill">Low-Level Design (LLD)</span>
            <span className="skill-pill">Data Structures & Algorithms (DSA)</span>
            <span className="skill-pill">Clean Architecture</span>
            <span className="skill-pill">SOLID Principles</span>
            <span className="skill-pill">Object-Oriented Design (OOD)</span>
          </div>
        </div>

        <div className="skills-category">
          <div className="skills-category-title"><i className="fa-solid fa-database"></i> Database Technologies</div>
          <div className="skills-wrapper">
            <span className="skill-pill">SQL Server</span>
            <span className="skill-pill">Oracle SQL</span>
            <span className="skill-pill">Stored Procedures</span>
            <span className="skill-pill">Query Optimization & Indexing</span>
          </div>
        </div>

        <div className="skills-category">
          <div className="skills-category-title"><i className="fa-solid fa-cloud"></i> Cloud & DevOps</div>
          <div className="skills-wrapper">
            <span className="skill-pill">Microsoft Azure</span>
            <span className="skill-pill">Docker</span>
            <span className="skill-pill">CI/CD Pipelines</span>
            <span className="skill-pill">Azure DevOps</span>
            <span className="skill-pill">Git</span>
            <span className="skill-pill">IIS Deployments</span>
          </div>
        </div>

        <div className="skills-category">
          <div className="skills-category-title"><i className="fa-brands fa-react"></i> Frontend</div>
          <div className="skills-wrapper">
            <span className="skill-pill">React</span>
            <span className="skill-pill">Kendo UI</span>
            <span className="skill-pill">JavaScript</span>
            <span className="skill-pill">jQuery</span>
            <span className="skill-pill">HTML / CSS</span>
            <span className="skill-pill">Bootstrap</span>
          </div>
        </div>

        <div className="skills-category">
          <div className="skills-category-title"><i className="fa-solid fa-vial"></i> Testing & Quality Assurance</div>
          <div className="skills-wrapper">
            <span className="skill-pill">NUnit</span>
            <span className="skill-pill">Moq</span>
            <span className="skill-pill">Unit Testing</span>
            <span className="skill-pill">Integration Testing</span>
          </div>
        </div>

        <div className="skills-category">
          <div className="skills-category-title"><i className="fa-solid fa-brain"></i> AI & Future Tech Interests</div>
          <div className="skills-wrapper">
            <span className="skill-pill">Generative AI</span>
            <span className="skill-pill">Large Language Models (LLMs)</span>
            <span className="skill-pill">Machine Learning</span>
            <span className="skill-pill">Deep Learning</span>
            <span className="skill-pill">Model Context Protocol (MCP)</span>
            <span className="skill-pill">AI-Powered Backend Systems</span>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications">
        <div className="section-header">
          <h2 className="section-title">Research & Publications</h2>
          <p className="section-subtitle">Academic research papers & global conference presentations</p>
        </div>
        
        <div className="grid">
          <div className="card">
            <div className="card-img-wrapper">
              <ImageCarousel images={[
                "Images/Thammasat University, Thailand-0.jfif",
                "Images/Thammasat University, Thailand-1.jfif",
                "Images/Thammasat University, Thailand-2.jfif",
                "Images/Thammasat University, Thailand-3.jfif",
                "Images/Thammasat University, Thailand-4.jfif",
                "Images/Thammasat University, Thailand-5.jfif"
              ]} />
            </div>
            <div className="card-body">
              <h3 className="card-title">International Conference Presentation – Thammasat University, Thailand</h3>
              <p className="card-desc">Honored to have our research paper presented at Thammasat University, Thailand. This achievement reflects the collective effort, collaboration, and dedication of the entire team. Grateful to work alongside my co-authors — Prathik K, Dr. Tejashwini P S — throughout this research journey. Presenting our work on an international platform was a great opportunity to exchange ideas, gain new perspectives, and contribute to meaningful academic discussions.</p>
              <div className="tag-container">
                <span className="tag">Thammasat Univ, Thailand</span>
                <span className="tag">International Research</span>
                <span className="tag">Brain Tumor Segmentation</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <img src="Images/Pancreatic.PNG" onError={(e) => { e.target.onerror = null; e.target.src = 'Images/Pancreatic.png'; }} alt="Pancreatic Cancer Research" className="card-img" />
            </div>
            <div className="card-body">
              <h3 className="card-title">An XAI Approach to Predictive Analytics of Pancreatic Cancer</h3>
              <p className="card-desc">Published at IEEE ICIT 2023 (Amman, Jordan). I developed an Explainable AI (XAI)-based deep learning model for pancreatic cancer prediction using CT imaging data, achieving ~95% classification accuracy and improving early risk detection reliability. Integrated SHAP and LIME interpretability frameworks to explain model decisions, improving prediction transparency by 30% in feature contribution clarity.</p>
              <div className="tag-container">
                <span className="tag">IEEE Xplore</span>
                <span className="tag">Explainable AI</span>
                <span className="tag">Predictive Analytics</span>
              </div>
              <a href="https://ieeexplore.ieee.org/document/10225991" target="_blank" rel="noopener noreferrer" className="btn-highlight">
                View IEEE Publication <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <img src="Images/Covid.JPG" onError={(e) => { e.target.onerror = null; e.target.src = 'Images/Covid.jpg'; }} alt="Covid Research Paper" className="card-img" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Survey on Predictive Modeling for Covid-19 and Pneumonia Detection</h3>
              <p className="card-desc">Published in the International Journal of Computer Science & Communication (IJCSC). Authored and published a comprehensive technical survey paper evaluating predictive modeling, machine learning algorithms, and deep learning chest X-ray detection techniques for Covid-19 and pneumonia diagnostics.</p>
              <div className="tag-container">
                <span className="tag">IJCSC Journal</span>
                <span className="tag">Healthcare AI</span>
                <span className="tag">Predictive Modeling</span>
              </div>
              <a href="http://www.csjournals.com/IJEE/TUMKUR/20.%20Sri.pdf" target="_blank" rel="noopener noreferrer" className="btn-highlight">
                Read PDF Document <i className="fa-solid fa-file-pdf"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Engagements */}
      <section id="engagement">
        <div className="section-header">
          <h2 className="section-title">Academic Engagements & Honors</h2>
          <p className="section-subtitle">Evaluating student projects and academic distinctions in my own words</p>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card-img-wrapper">
              <ImageCarousel images={[
                "Images/BIT on Tableau and Power BI-1.jfif",
                "Images/BIT on Tableau and Power BI-2.jfif"
              ]} />
            </div>
            <div className="card-body">
              <h3 className="card-title">Judge: Tableau & Power BI Project Evaluation</h3>
              <p className="card-desc">Honored to serve as a Judge for the 5th Semester Department of CSE(Data Science), BIT on Tableau and Power BI. It was a pleasure evaluating the innovative ideas, analytical thinking, and data visualization skills demonstrated by the students. The projects reflected significant effort, creativity, and technical understanding in data analytics.</p>
              <div className="tag-container">
                <span className="tag">BIT Bengaluru</span>
                <span className="tag">Power BI</span>
                <span className="tag">Tableau</span>
                <span className="tag">Data Analytics</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <img src="Images/Project Exhibition.jfif" alt="7th Sem Project Exhibition Judging" className="card-img" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Judge: 7th Semester Main Project Exhibition</h3>
              <p className="card-desc">Thank you to the Department of CSE(Data Science), BIT for the opportunity to be a part of the 7th Semester Project Exhibition as a judge. It was a wonderful experience to witness such innovative projects, creativity, and teamwork from the students. Congratulations to all the participants and winners for their hard work!</p>
              <div className="tag-container">
                <span className="tag">BIT Bengaluru</span>
                <span className="tag">Main Project Exhibition</span>
                <span className="tag">Data Science</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <img src="Images/Mtech Rank.jfif" alt="MTech 2nd Rank Holder" className="card-img" />
            </div>
            <div className="card-body">
              <h3 className="card-title">2nd Rank Holder – M.Tech (CSE)</h3>
              <p className="card-desc">It's been a while since I secured 2nd rank in the M.Tech program at Bangalore Institute of Technology college, and I wanted to share this milestone. I would also like to express my sincere gratitude to the CSE Department at BIT for their unwavering support throughout this academic journey.</p>
              <div className="tag-container">
                <span className="tag">Academic Gold Medalist</span>
                <span className="tag">BIT Distinction</span>
                <span className="tag">2nd Rank</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications">
        <div className="section-header">
          <h2 className="section-title">Licenses & Certifications</h2>
          <p className="section-subtitle">Verified professional credentials and engineering specializations</p>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Low Level System Design, Design Patterns & SOLID Principles</h3>
              <p className="card-desc">Issued by Udemy (Feb 2026). Mastery in Low Level Design (LLD), object-oriented design patterns, and SOLID principles for architecting scalable, maintainable enterprise backend systems.</p>
              <div className="tag-container">
                <span className="tag">System Design</span>
                <span className="tag">LLD</span>
                <span className="tag">SOLID</span>
              </div>
              <a href="https://www.udemy.com/certificate/UC-01053d6e-7913-46ed-a1a6-a1ac747fdca4/" target="_blank" rel="noopener noreferrer" className="btn-highlight">
                Verify Credential <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title">The Complete JavaScript Course 2025: From Zero to Expert!</h3>
              <p className="card-desc">Issued by Udemy (Nov 2025). Advanced modern JavaScript, asynchronous promises, event loops, functional programming paradigms, and high-performance Web API integration.</p>
              <div className="tag-container">
                <span className="tag">JavaScript</span>
                <span className="tag">ES6+</span>
                <span className="tag">Frontend</span>
              </div>
              <a href="https://www.udemy.com/certificate/UC-c0849c32-5990-4be2-b939-372e133eb18f/" target="_blank" rel="noopener noreferrer" className="btn-highlight">
                Verify Credential <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Advanced Algorithms and Complexity</h3>
              <p className="card-desc">Issued by Coursera / UC San Diego (Mar 2022). Comprehensive coursework covering advanced data structures, algorithmic complexity analysis, network flows, linear programming, and NP-completeness.</p>
              <div className="tag-container">
                <span className="tag">Algorithms</span>
                <span className="tag">DSA</span>
                <span className="tag">UC San Diego</span>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/verify/ACTUA3PD3LMZ" target="_blank" rel="noopener noreferrer" className="btn-highlight">
                Verify Credential <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Open to discussions regarding full-stack engineering, API design, system architecture, or tech collaborations.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-card">
            <div className="contact-item">
              <div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div>
              <div>
                <div style={{ fontWeight: 700 }}>Location</div>
                <div style={{ color: 'var(--text-secondary)' }}>Bengaluru / Tumakuru, Karnataka, India</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
              <div>
                <div style={{ fontWeight: 700 }}>Email</div>
                <div style={{ color: 'var(--text-secondary)' }}>srinidhib18@gmail.com</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
              <div>
                <div style={{ fontWeight: 700 }}>Phone</div>
                <div style={{ color: 'var(--text-secondary)' }}>+91 8747930438</div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                id="subject" 
                placeholder="Subject / Job Opportunity" 
                value={formData.subject} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleInputChange} 
                required 
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary"><i className="fa-solid fa-paper-plane"></i> Send via Gmail</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="social-links">
          <a href="mailto:srinidhib18@gmail.com" target="_blank" rel="noopener noreferrer" title="Email"><i className="fa-solid fa-envelope"></i></a>
          <a href="https://www.linkedin.com/in/srinidhi-b-545071199/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/srinidhi8747" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.instagram.com/srinidhi_vasishta_/" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <p>&copy; 2026 Srinidhi B. All rights reserved.</p>
      </footer>
    </div>
  );
}
