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
    <div className="relative w-full h-52 overflow-hidden rounded-t-2xl bg-slate-900/80">
      <button 
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full glass-card flex items-center justify-center text-slate-200 hover:bg-brand-500 hover:text-white transition-all shadow-md"
        onClick={() => moveCarousel(-1)} 
        aria-label="Previous image"
      >
        <i className="fa-solid fa-chevron-left text-xs"></i>
      </button>

      {images.map((imgSrc, idx) => (
        <img
          key={idx}
          src={imgSrc}
          className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
            idx === currentIndex ? 'block opacity-100' : 'hidden opacity-0'
          }`}
          alt={`Slide ${idx + 1}`}
        />
      ))}

      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full glass-card flex items-center justify-center text-slate-200 hover:bg-brand-500 hover:text-white transition-all shadow-md"
        onClick={() => moveCarousel(1)} 
        aria-label="Next image"
      >
        <i className="fa-solid fa-chevron-right text-xs"></i>
      </button>
    </div>
  );
};

// Navbar Component
const Navbar = ({ menuActive, toggleMenu, closeMenu }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#home" className="font-mono font-bold text-lg text-white tracking-tight flex items-center gap-2">
        <span className="text-brand-500">&lt;</span>SRINIDHI B<span className="text-brand-500">/&gt;</span>
      </a>

      <button 
        className="md:hidden glass-card p-2 rounded-lg text-slate-300 hover:text-white"
        onClick={toggleMenu} 
        aria-label="Toggle navigation menu"
      >
        <i className={`fa-solid ${menuActive ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
      </button>

      <ul className={`md:flex items-center gap-6 text-xs font-mono text-slate-400 absolute md:static top-16 left-0 right-0 glass-nav md:bg-transparent p-6 md:p-0 flex-col md:flex-row space-y-4 md:space-y-0 ${
        menuActive ? 'flex' : 'hidden'
      }`}>
        <li><a href="#about" onClick={closeMenu} className="hover:text-white transition-colors">About</a></li>
        <li><a href="#experience" onClick={closeMenu} className="hover:text-white transition-colors">Experience</a></li>
        <li><a href="#projects" onClick={closeMenu} className="hover:text-white transition-colors">Projects</a></li>
        <li><a href="#skills" onClick={closeMenu} className="hover:text-white transition-colors">Skills</a></li>
        <li><a href="#publications" onClick={closeMenu} className="hover:text-white transition-colors">Publications</a></li>
        <li><a href="#engagement" onClick={closeMenu} className="hover:text-white transition-colors">Engagements</a></li>
        <li><a href="#certifications" onClick={closeMenu} className="hover:text-white transition-colors">Certifications</a></li>
        <li><a href="#contact" onClick={closeMenu} className="hover:text-white transition-colors">Contact</a></li>
      </ul>

      <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-xs font-mono bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-lg shadow-brand-500/20">
        <span>Get in Touch</span>
        <i className="fa-solid fa-arrow-right text-xs"></i>
      </a>
    </div>
  </nav>
);

// Hero Component
const Hero = () => (
  <section id="about" className="pt-28 pb-16 flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="space-y-6 max-w-2xl">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-brand-500/30 text-brand-400 text-xs font-mono">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Engineer II - Software @ Microchip Technology
      </div>

      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
        Srinidhi B
      </h1>
      
      <div className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-brand-500 to-purple-400">
        Architecting Enterprise Web Systems, REST APIs & Cloud Solutions
      </div>

      <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
        Full-Stack Software Engineer with 3+ years of experience architecting enterprise web applications, distributed ERP systems, and secure API microservices using <strong className="text-white font-bold">React</strong>, <strong className="text-white font-bold">.NET Core</strong>, <strong className="text-white font-bold">C#</strong>, and <strong className="text-white font-bold">SQL Server</strong>.
      </p>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="glass-card p-3 rounded-xl text-center">
          <div className="text-brand-400 text-base mb-1"><i className="fa-solid fa-sitemap"></i></div>
          <div className="text-white font-bold text-xs">System Design</div>
          <div className="text-slate-400 text-[10px] font-mono">HLD, LLD & SOLID</div>
        </div>
        <div className="glass-card p-3 rounded-xl text-center">
          <div className="text-brand-400 text-base mb-1"><i className="fa-solid fa-network-wired"></i></div>
          <div className="text-white font-bold text-xs">Distributed</div>
          <div className="text-slate-400 text-[10px] font-mono">Async Jobs & APIs</div>
        </div>
        <div className="glass-card p-3 rounded-xl text-center">
          <div className="text-brand-400 text-base mb-1"><i className="fa-solid fa-cloud"></i></div>
          <div className="text-white font-bold text-xs">Cloud & DevOps</div>
          <div className="text-slate-400 text-[10px] font-mono">Azure, Docker & CI/CD</div>
        </div>
        <div className="glass-card p-3 rounded-xl text-center">
          <div className="text-brand-400 text-base mb-1"><i className="fa-solid fa-layer-group"></i></div>
          <div className="text-white font-bold text-xs">Full-Stack Core</div>
          <div className="text-slate-400 text-[10px] font-mono">.NET Core & React</div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-4">
        <a href="Resume/Srinidhi.pdf" target="_blank" rel="noopener noreferrer" download className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-5 py-3 rounded-xl transition-all shadow-lg shadow-brand-500/20 text-xs font-mono">
          <i className="fa-solid fa-file-arrow-down"></i>
          Download Resume
        </a>
        <a href="https://www.linkedin.com/in/srinidhi-b-545071199/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 glass-card hover:bg-slate-800 text-white font-medium px-5 py-3 rounded-xl transition-colors text-xs font-mono">
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
        <a href="https://github.com/srinidhi8747" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 glass-card hover:bg-slate-800 text-white font-medium px-5 py-3 rounded-xl transition-colors text-xs font-mono">
          <i className="fa-brands fa-github"></i>
          GitHub
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 glass-card hover:bg-slate-800 text-white font-medium px-5 py-3 rounded-xl transition-colors text-xs font-mono">
          <i className="fa-solid fa-paper-plane"></i>
          Contact Me
        </a>
      </div>
    </div>

    {/* Profile Image with Glow effect */}
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
      <img 
        src="Images/Sri.JPG" 
        onError={(e) => { e.target.onerror = null; e.target.src = 'Images/Sri.jpg'; }} 
        alt="Srinidhi B" 
        className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover object-top rounded-2xl border border-slate-800 shadow-2xl" 
      />
    </div>
  </section>
);

// Experience Component
const Experience = () => (
  <section id="experience" className="space-y-8 py-12">
    <div className="pb-2">
      <h2 className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-1">Career Timeline</h2>
      <h3 className="text-2xl font-bold text-white tracking-tight">Work Experience</h3>
      <p className="text-slate-400 text-xs mt-1 font-mono">Microchip Technology Inc. · Full-Time Enterprise Engineering</p>
    </div>

    <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
      
      <div className="relative pl-10 space-y-2">
        <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 border-[#0b0f19]"></div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
          <span className="font-bold text-white text-lg">Engineer II - Software</span>
          <span className="font-mono text-xs text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">Oct 2023 – Present · Full-time</span>
        </div>
        <p className="text-xs font-mono text-slate-400">Microchip Technology Inc. | Bengaluru, Karnataka, India</p>
        <ul className="text-slate-400 text-xs sm:text-sm pt-2 space-y-2 list-disc list-inside leading-relaxed">
          <li>Designed and developed full-stack web applications using <strong className="text-white font-bold">React</strong>, <strong className="text-white font-bold">.NET</strong>, and <strong className="text-white font-bold">Oracle SQL</strong>, supporting internal enterprise workflows.</li>
          <li>Designed backend services for ERP and invoicing platforms using <strong className="text-white font-bold">ASP.NET MVC (.NET)</strong>, <strong className="text-white font-bold">SQL Server</strong>, and <strong className="text-white font-bold">React</strong> supporting <strong className="text-white font-bold">10,000+ enterprise users</strong>.</li>
          <li>Architected <strong className="text-white font-bold">REST APIs</strong> consumed by React frontend modules enabling reliable data exchange across distributed application services.</li>
          <li>Integrated <strong className="text-white font-bold">OAuth 2.0</strong> authentication and <strong className="text-white font-bold">Role-Based Access Control (RBAC)</strong> securing customer-facing APIs and internal enterprise modules.</li>
          <li>Diagnosed and resolved <strong className="text-white font-bold">HTTPS–TLS handshake failures</strong>, improving API reliability and secure communication in production environments.</li>
          <li>Optimized SQL queries, indexing strategies, and backend logic, improving API response performance by <strong className="text-white font-bold">25–30%</strong>.</li>
          <li>Established modular service architecture following <strong className="text-white font-bold">Clean Architecture</strong>, <strong className="text-white font-bold">SOLID principles</strong>, <strong className="text-white font-bold">HLD/LLD</strong>, and <strong className="text-white font-bold">DSA</strong> for scalable software solutions.</li>
          <li>Implemented unit testing using <strong className="text-white font-bold">Moq</strong> and <strong className="text-white font-bold">NUnit</strong> to ensure production-ready code.</li>
          <li>Containerized applications using <strong className="text-white font-bold">Docker</strong> and managed <strong className="text-white font-bold">IIS-hosted deployments</strong> integrated with <strong className="text-white font-bold">CI/CD pipelines</strong>, reducing deployment failures by <strong className="text-white font-bold">40%</strong>.</li>
        </ul>
      </div>

      <div className="relative pl-10 space-y-2">
        <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-[#0b0f19]"></div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
          <span className="font-bold text-white text-lg">Software Engineering Intern / Engineer I</span>
          <span className="font-mono text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full">Oct 2022 – Oct 2023</span>
        </div>
        <p className="text-xs font-mono text-slate-400">Microchip Technology Inc. | Bengaluru, Karnataka, India</p>
        <ul className="text-slate-400 text-xs sm:text-sm pt-2 space-y-2 list-disc list-inside leading-relaxed">
          <li>Contributed to enterprise web application components using <strong className="text-white font-bold">C#</strong>, <strong className="text-white font-bold">.NET Core</strong>, and <strong className="text-white font-bold">React</strong>.</li>
          <li>Assisted in <strong className="text-white font-bold">database schema optimizations</strong>, <strong className="text-white font-bold">stored procedure writing</strong>, and <strong className="text-white font-bold">RESTful API integrations</strong>.</li>
          <li>Implemented transactional <strong className="text-white font-bold">CRUD operations</strong> with validation and <strong className="text-white font-bold">integrity controls</strong>.</li>
          <li>Developed unit tests using <strong className="text-white font-bold">NUnit</strong> and <strong className="text-white font-bold">Moq</strong>, reducing regression defects by <strong className="text-white font-bold">25%</strong>.</li>
          <li>Assisted in debugging production issues and <strong className="text-white font-bold">optimizing database queries</strong> for high-volume workloads.</li>
        </ul>
      </div>

    </div>
  </section>
);

// Projects Component
const Projects = () => (
  <section id="projects" className="space-y-8 py-12">
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
      <div>
        <h2 className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-1">Architecture Showcase</h2>
        <h3 className="text-2xl font-bold text-white tracking-tight">Enterprise Systems & Implementations</h3>
      </div>
      <p className="text-slate-400 text-xs font-mono max-w-md">
        Detailed breakdown of enterprise production platforms designed and developed at scale
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all group">
        <div className="space-y-4">
          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Full-Stack ERP</span>
          <h4 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">MySo – Customer Order Management & ERP Platform</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Engineered a mission-critical, customer-facing order management platform enabling seamless order placement, live status tracking, and automated ERP-integrated invoicing. Designed structured order lifecycle workflows featuring <strong className="text-white font-bold">asynchronous background job handling</strong> and automated retry mechanisms. Integrated <strong className="text-white font-bold">OAuth 2.0</strong> security and <strong className="text-white font-bold">Role-Based Access Control (RBAC)</strong>.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 pt-6 font-mono text-xs text-brand-400">
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">.NET Core</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">React</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">SQL Server</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Azure</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Docker</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">HLD & LLD</span>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all group">
        <div className="space-y-4">
          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Financial Engine</span>
          <h4 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">Sales Order Invoicing & Financial Engine</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Architected high-performance invoice generation services that aggregate complex order, pricing, and tax data across distributed ERP backend modules. Implemented automated data validation and financial reconciliation logic. Designed modular service layers using <strong className="text-white font-bold">Clean Architecture</strong> and <strong className="text-white font-bold">SOLID principles</strong>. Delivered a <strong className="text-white font-bold">25–30% boost</strong> in API response performance under peak load.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 pt-6 font-mono text-xs text-emerald-400">
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">ASP.NET MVC</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Entity Framework</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">REST API</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">SQL Optimization</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Clean Architecture</span>
        </div>
      </div>

    </div>
  </section>
);

// Technical Skills Component
const Skills = () => (
  <section id="skills" className="space-y-8 py-12">
    <div className="pb-2">
      <h2 className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-1">Capabilities</h2>
      <h3 className="text-2xl font-bold text-white tracking-tight">Technical Skills</h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div className="glass-card rounded-xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-brand-400 font-mono text-xs font-semibold uppercase">
          <i className="fa-solid fa-server"></i> Backend & Security
        </div>
        <div className="flex flex-wrap gap-1.5 font-mono text-xs text-slate-300">
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">.NET Core</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">.NET Framework</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">C#</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Web APIs</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">OAuth 2.0</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">RBAC</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Entity Framework</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">LINQ</span>
        </div>
      </div>

      <div className="glass-card rounded-xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold uppercase">
          <i className="fa-solid fa-sitemap"></i> Architecture & DSA
        </div>
        <div className="flex flex-wrap gap-1.5 font-mono text-xs text-slate-300">
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">High-Level Design (HLD)</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Low-Level Design (LLD)</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Data Structures & Algorithms</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Clean Architecture</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">SOLID Principles</span>
        </div>
      </div>

      <div className="glass-card rounded-xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase">
          <i className="fa-solid fa-database"></i> Database Technologies
        </div>
        <div className="flex flex-wrap gap-1.5 font-mono text-xs text-slate-300">
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">SQL Server</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Oracle SQL</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Stored Procedures</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Query Optimization & Indexing</span>
        </div>
      </div>

      <div className="glass-card rounded-xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold uppercase">
          <i className="fa-solid fa-cloud"></i> Cloud & DevOps
        </div>
        <div className="flex flex-wrap gap-1.5 font-mono text-xs text-slate-300">
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Microsoft Azure</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Docker</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">CI/CD Pipelines</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Azure DevOps</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Git</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">IIS Deployments</span>
        </div>
      </div>

      <div className="glass-card rounded-xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase">
          <i className="fa-brands fa-react"></i> Frontend
        </div>
        <div className="flex flex-wrap gap-1.5 font-mono text-xs text-slate-300">
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">React</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Kendo UI</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">JavaScript (ES6+)</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">jQuery</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">HTML5 / CSS3</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Bootstrap</span>
        </div>
      </div>

      <div className="glass-card rounded-xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold uppercase">
          <i className="fa-solid fa-brain"></i> AI & Future Tech
        </div>
        <div className="flex flex-wrap gap-1.5 font-mono text-xs text-slate-300">
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Generative AI</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Large Language Models (LLMs)</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Machine Learning</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Deep Learning</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Model Context Protocol (MCP)</span>
        </div>
      </div>

    </div>
  </section>
);

// Publications Component with Images
const Publications = () => (
  <section id="publications" className="space-y-8 py-12">
    <div className="pb-2">
      <h2 className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-1">Academic Research</h2>
      <h3 className="text-2xl font-bold text-white tracking-tight">Research & Publications</h3>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Conference Carousel Card */}
      <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all">
        <ImageCarousel images={[
          "Images/Thammasat University, Thailand-0.jfif",
          "Images/Thammasat University, Thailand-1.jfif",
          "Images/Thammasat University, Thailand-2.jfif",
          "Images/Thammasat University, Thailand-3.jfif",
          "Images/Thammasat University, Thailand-4.jfif",
          "Images/Thammasat University, Thailand-5.jfif"
        ]} />
        <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white">Thammasat University, Thailand</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Honored to have our research paper presented at Thammasat University, Thailand on brain tumor segmentation alongside co-authors Prathik K and Dr. Tejashwini P S.
            </p>
          </div>
          <div className="flex flex-wrap gap-1 pt-2 font-mono text-[10px] text-brand-400">
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Thailand Presentation</span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Research</span>
          </div>
        </div>
      </div>

      {/* IEEE Publication Card */}
      <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all">
        <div className="h-52 overflow-hidden bg-slate-900">
          <img 
            src="Images/Pancreatic.PNG" 
            onError={(e) => { e.target.onerror = null; e.target.src = 'Images/Pancreatic.png'; }} 
            alt="Pancreatic Cancer Research" 
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white">Explainable AI for Pancreatic Cancer</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Published at IEEE ICIT 2023 (Jordan). Developed an Explainable AI (XAI) deep learning model achieving ~95% classification accuracy using SHAP & LIME interpretability frameworks.
            </p>
          </div>
          <a href="https://ieeexplore.ieee.org/document/10225991" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-mono text-xs px-4 py-2.5 rounded-xl transition-all shadow-md">
            <span>View IEEE Publication</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        </div>
      </div>

      {/* Covid Research Paper Card */}
      <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all">
        <div className="h-52 overflow-hidden bg-slate-900">
          <img 
            src="Images/Covid.JPG" 
            onError={(e) => { e.target.onerror = null; e.target.src = 'Images/Covid.jpg'; }} 
            alt="Covid Research Paper" 
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white">Covid-19 & Pneumonia Predictive Modeling</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Published in IJCSC. Authored a comprehensive technical survey paper evaluating predictive modeling, machine learning, and deep learning chest X-ray detection techniques.
            </p>
          </div>
          <a href="http://www.csjournals.com/IJEE/TUMKUR/20.%20Sri.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-mono text-xs px-4 py-2.5 rounded-xl transition-all shadow-md">
            <span>Read PDF Document</span>
            <i className="fa-solid fa-file-pdf text-[10px]"></i>
          </a>
        </div>
      </div>

    </div>
  </section>
);

// Academic Engagements Component
const AcademicEngagements = () => (
  <section id="engagement" className="space-y-8 py-12">
    <div className="pb-2">
      <h2 className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-1">Distinctions</h2>
      <h3 className="text-2xl font-bold text-white tracking-tight">Academic Engagements & Honors</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all">
        <ImageCarousel images={[
          "Images/BIT on Tableau and Power BI-1.jfif",
          "Images/BIT on Tableau and Power BI-2.jfif"
        ]} />
        <div className="p-6 space-y-2 flex-1">
          <h4 className="text-base font-bold text-white">Judge: Tableau & Power BI Project Evaluation</h4>
          <p className="text-slate-400 text-xs leading-relaxed">
            Served as Judge for 5th Sem Department of CSE(Data Science), BIT on Tableau and Power BI, evaluating student analytics projects.
          </p>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all">
        <div className="h-52 overflow-hidden bg-slate-900">
          <img src="Images/Project Exhibition.jfif" alt="7th Sem Project Exhibition Judging" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6 space-y-2 flex-1">
          <h4 className="text-base font-bold text-white">Judge: 7th Sem Main Project Exhibition</h4>
          <p className="text-slate-400 text-xs leading-relaxed">
            Invited by the Department of CSE(Data Science), BIT as an industry judge for capstone engineering project evaluations.
          </p>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all">
        <div className="h-52 overflow-hidden bg-slate-900">
          <img src="Images/Mtech Rank.jfif" alt="MTech 2nd Rank Holder" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6 space-y-2 flex-1">
          <h4 className="text-base font-bold text-white">2nd Rank Holder – M.Tech (CSE)</h4>
          <p className="text-slate-400 text-xs leading-relaxed">
            Secured 2nd rank distinction in M.Tech (Computer Science & Engineering) at Bangalore Institute of Technology.
          </p>
        </div>
      </div>

    </div>
  </section>
);

// Certifications Component
const Certifications = () => (
  <section id="certifications" className="space-y-8 py-12">
    <div className="pb-2">
      <h2 className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-1">Credentials</h2>
      <h3 className="text-2xl font-bold text-white tracking-tight">Licenses & Certifications</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all">
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-white">Low Level System Design, Design Patterns & SOLID</h4>
          <p className="text-slate-400 text-xs leading-relaxed">Issued by Udemy. Mastery in LLD, object-oriented design patterns, and SOLID principles for backend systems.</p>
        </div>
        <a 
          href="https://www.udemy.com/certificate/UC-01053d6e-7913-46ed-a1a6-a1ac747fdca4/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-mono text-xs px-4 py-2.5 rounded-xl transition-all shadow-md"
        >
          <span>Verify Credential</span>
          <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      </div>

      <div className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all">
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-white">The Complete JavaScript Course: Zero to Expert</h4>
          <p className="text-slate-400 text-xs leading-relaxed">Issued by Udemy. Advanced ES6+, asynchronous promises, event loops, and Web API integration.</p>
        </div>
        <a 
          href="https://www.udemy.com/certificate/UC-c0849c32-5990-4be2-b939-372e133eb18f/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-mono text-xs px-4 py-2.5 rounded-xl transition-all shadow-md"
        >
          <span>Verify Credential</span>
          <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      </div>

      <div className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all">
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-white">Advanced Algorithms and Complexity</h4>
          <p className="text-slate-400 text-xs leading-relaxed">Issued by Coursera / UC San Diego. Advanced data structures, algorithmic complexity analysis, and network flows.</p>
        </div>
        <a 
          href="https://www.coursera.org/account/accomplishments/verify/ACTUA3PD3LMZ" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-mono text-xs px-4 py-2.5 rounded-xl transition-all shadow-md"
        >
          <span>Verify Credential</span>
          <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      </div>

    </div>
  </section>
);

// Contact Component with Functionality
const Contact = ({ formData, handleInputChange, sendEmail }) => (
  <section id="contact" className="py-12 space-y-8">
    <div className="pb-2">
      <h2 className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-1">Connect</h2>
      <h3 className="text-2xl font-bold text-white tracking-tight">Get In Touch</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="glass-card rounded-2xl p-8 space-y-6 flex flex-col justify-between">
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white">Let's build something together</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Open to discussions regarding full-stack engineering, API design, system architecture, or tech collaborations.
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3 text-slate-300">
            <i className="fa-solid fa-location-dot text-brand-400 w-5"></i>
            <span>Bengaluru / Tumakuru, Karnataka, India</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <i className="fa-solid fa-envelope text-brand-400 w-5"></i>
            <span>srinidhib18@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <i className="fa-solid fa-phone text-brand-400 w-5"></i>
            <span>+91 8747930438</span>
          </div>
        </div>
      </div>

      <form className="glass-card rounded-2xl p-8 space-y-4" onSubmit={sendEmail}>
        <div>
          <input 
            type="text" 
            id="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
          />
        </div>
        <div>
          <input 
            type="text" 
            id="subject" 
            placeholder="Subject / Job Opportunity" 
            value={formData.subject} 
            onChange={handleInputChange} 
            required 
            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
          />
        </div>
        <div>
          <textarea 
            id="message" 
            rows="4" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleInputChange} 
            required 
            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-mono text-xs font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2">
          <i className="fa-solid fa-paper-plane"></i>
          Send via Gmail
        </button>
      </form>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="py-8 text-center text-xs font-mono text-slate-500">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>© {new Date().getFullYear()} Srinidhi B. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="mailto:srinidhib18@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><i className="fa-solid fa-envelope text-base"></i></a>
        <a href="https://www.linkedin.com/in/srinidhi-b-545071199/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><i className="fa-brands fa-linkedin text-base"></i></a>
        <a href="https://github.com/srinidhi8747" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><i className="fa-brands fa-github text-base"></i></a>
        <a href="https://www.instagram.com/srinidhi_vasishta_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><i className="fa-brands fa-instagram text-base"></i></a>
      </div>
    </div>
  </footer>
);

// Main App Component
function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  const sendEmail = (e) => {
    e.preventDefault();
    const name = encodeURIComponent(formData.name);
    const subject = encodeURIComponent(formData.subject);
    const message = encodeURIComponent(formData.message);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=srinidhib18@gmail.com&su=${subject}&body=Name:%20${name}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="bg-[#0b0f19] text-slate-200 antialiased selection:bg-brand-500 selection:text-white">
      <Navbar menuActive={menuActive} toggleMenu={toggleMenu} closeMenu={closeMenu} />

      {/* Floating Scroll Navigation Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <button onClick={scrollToTop} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brand-400 hover:bg-brand-600 hover:text-white transition-all shadow-lg" title="Scroll to Top">
          <i className="fa-solid fa-chevron-up text-sm"></i>
        </button>
        <button onClick={scrollToBottom} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brand-400 hover:bg-brand-600 hover:text-white transition-all shadow-lg" title="Scroll to Bottom">
          <i className="fa-solid fa-chevron-down text-sm"></i>
        </button>
      </div>

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <AcademicEngagements />
        <Certifications />
        <Contact formData={formData} handleInputChange={handleInputChange} sendEmail={sendEmail} />
      </main>

      <Footer />
    </div>
  );
}