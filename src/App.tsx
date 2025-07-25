import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Database, 
  Server, 
  Cpu, 
  Palette,
  Award,
  Calendar,
  Download,
  ChevronRight,
  Menu,
  X,
  Mountain
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const roles = [
    'Full Stack Developer',
    'DevOps Enthusiast',
    'UI/UX Designer',
    'AI/LLM Explorer'
  ];

  // Mouse trail effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[typewriterIndex % roles.length];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setTypewriterText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTypewriterIndex(prev => prev + 1);
          setTypewriterText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [typewriterIndex]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    Languages: [
      { name: 'Python', icon: Code },
      { name: 'C++', icon: Code },
      { name: 'Java', icon: Code },
      { name: 'C', icon: Code }
    ],
    Web: [
      { name: 'HTML/CSS', icon: Code },
      { name: 'JavaScript', icon: Code },
      { name: 'Node.js', icon: Server },
      { name: 'React', icon: Code }
    ],
    DevOps: [
      { name: 'Docker', icon: Server },
      { name: 'Jenkins', icon: Server },
      { name: 'Kubernetes', icon: Server },
      { name: 'Linux', icon: Server }
    ],
    'AI/LLM': [
      { name: 'Langchain', icon: Cpu },
      { name: 'Chatbots', icon: Cpu },
      { name: 'Gradio', icon: Cpu },
      { name: 'Streamlit', icon: Cpu }
    ],
    Tools: [
      { name: 'VS Code', icon: Code },
      { name: 'PyCharm', icon: Code },
      { name: 'NetBeans', icon: Code },
      { name: 'Git', icon: Code }
    ],
    Design: [
      { name: 'Figma', icon: Palette },
      { name: 'UI/UX', icon: Palette }
    ]
  };

  const projects = [
    {
      title: 'Emotion-Based Music Player',
      description: 'Python-based music player that analyzes emotions through speech recognition to recommend songs',
      tech: ['Python', 'Speech Libraries', 'ML'],
      category: 'AI/ML',
      highlight: true
    },
    {
      title: 'Parking Management System',
      description: 'Complete parking management solution with booking, tracking, and payment integration',
      tech: ['Java', 'NetBeans', 'Database'],
      category: 'Full Stack',
      highlight: true
    },
    {
      title: 'Linux & Docker Remote CLI',
      description: 'Streamlit-based web interface for remote Linux and Docker command execution',
      tech: ['Python', 'Streamlit', 'Docker', 'Linux'],
      category: 'DevOps',
      highlight: true
    },
    {
      title: 'CareerMate Auth App',
      description: 'Authentication system for career guidance platform with secure user management',
      tech: ['Node.js', 'Authentication', 'Database'],
      category: 'Backend'
    },
    {
      title: 'ASCII to Binary Converter',
      description: 'Efficient tool for converting ASCII characters to binary representation',
      tech: ['Python', 'Algorithms'],
      category: 'Utility'
    },
    {
      title: 'AI Chatbot with API Integration',
      description: 'Intelligent chatbot with API integration and Gradio interface',
      tech: ['Python', 'Gradio', 'API', 'AI'],
      category: 'AI/ML',
      highlight: true
    }
  ];

  const experiences = [
    {
      title: 'College Hackathon - UI/UX Design',
      organization: 'Government Engineering College, Ajmer',
      period: '2024',
      description: 'Designed comprehensive UI/UX for emotion-based music player application',
      type: 'hackathon',
      highlight: true
    },
    {
      title: 'Wireshark Network Analysis Project',
      organization: 'IIT Jammu (ISEA)',
      period: '2024',
      description: 'Completed comprehensive network analysis and security assessment project',
      type: 'project'
    },
    {
      title: 'Code Wars Coding Competition',
      organization: 'Various Platforms',
      period: '2023-2024',
      description: 'Participated in multiple coding competitions and problem-solving challenges',
      type: 'competition'
    },
    {
      title: 'Kalp Studio Blockchain Hackathon',
      organization: 'Kalp Studio',
      period: '2024',
      description: 'Developed blockchain-based solutions and smart contracts',
      type: 'hackathon',
      highlight: true
    },
    {
      title: 'Hack-2-Innovation',
      organization: 'College Hackathon',
      period: '2024',
      description: 'Created innovative solutions for real-world problems',
      type: 'hackathon',
      highlight: true
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-x-hidden">
      {/* Enhanced Mouse Trail Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-40 blur-sm animate-pulse"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transition: 'all 0.1s ease-out'
        }}
      />
      
      {/* Mountain Moonlight Background */}
      <div className="fixed inset-0 z-0">
        {/* Base mountain silhouette layers */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        
        {/* Moonlight effect */}
        <div 
          className="absolute top-10 right-20 w-32 h-32 bg-gradient-radial from-blue-200/30 via-blue-300/20 to-transparent rounded-full blur-sm"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            boxShadow: '0 0 100px rgba(147, 197, 253, 0.3)'
          }}
        />
        
        {/* Mountain layers with parallax */}
        <div 
          className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-slate-800 via-slate-700 to-transparent opacity-80"
          style={{
            clipPath: 'polygon(0 100%, 20% 60%, 40% 80%, 60% 40%, 80% 70%, 100% 50%, 100% 100%)',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        <div 
          className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-blue-800/60 via-blue-700/40 to-transparent"
          style={{
            clipPath: 'polygon(0 100%, 15% 70%, 35% 85%, 55% 50%, 75% 75%, 90% 45%, 100% 100%)',
            transform: `translateY(${scrollY * 0.4}px)`
          }}
        />
        
        <div 
          className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-700/80 via-slate-600/60 to-transparent"
          style={{
            clipPath: 'polygon(0 100%, 25% 75%, 45% 90%, 65% 55%, 85% 80%, 100% 60%, 100% 100%)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Foggy mist effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-900/10 to-blue-800/20 animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`
          }}
        />
        
        {/* Climbing path indicator */}
        <div 
          className="absolute bottom-20 left-1/4 w-2 h-40 bg-gradient-to-t from-blue-400/30 to-transparent blur-sm"
          style={{
            transform: `translateY(${scrollY * 0.2}px) rotate(15deg)`,
            boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)'
          }}
        />
        
        {/* Goal indicator at peak */}
        <div 
          className="absolute top-32 right-32 flex items-center gap-2 text-blue-300/60 animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.3}px)`
          }}
        >
          <Mountain size={24} />
          <span className="text-sm font-light">Reaching New Heights</span>
        </div>
        
        {/* Additional atmospheric effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-800/5 to-cyan-900/10" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 z-40 p-6">
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 bg-slate-800/90 backdrop-blur-md rounded-lg border border-slate-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition-all"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
          <div className="flex flex-col space-y-2 bg-slate-800/90 backdrop-blur-md rounded-lg border border-slate-700 p-4 shadow-xl">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-lg text-left transition-all transform hover:scale-105 ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 shadow-lg'
                    : 'hover:bg-slate-700 hover:text-blue-400 hover:shadow-md hover:shadow-blue-400/20'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Krrish Sharma
            </h1>
            <div className="h-16 mb-8">
              <p className="text-xl lg:text-2xl text-blue-300 font-mono">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Computer Science Engineering student passionate about Full Stack Development, 
              DevOps, and AI/ML technologies. Climbing towards excellence in technology and innovation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 font-semibold shadow-lg hover:shadow-blue-400/30"
              >
                View Projects
              </button>
              <button className="px-8 py-3 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-slate-900 transition-all transform hover:scale-105 font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-400/30">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            {/* Profile Image with Enhanced Animations */}
            <div className="relative group">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-cyan-500 shadow-2xl shadow-blue-400/30 transform transition-all duration-500 group-hover:scale-105">
                <img 
                  src="/lw for.jpeg" 
                  alt="Krrish Sharma"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-90"
                />
                {/* Translucent overlay animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Moving glide effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
              {/* Glowing ring animation */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-ping" />
            </div>
            
            <div className="w-full max-w-md">
              <div className="bg-slate-800/90 backdrop-blur-md rounded-lg p-4 border border-slate-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-400/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-400">Resume Video</span>
                  <ExternalLink size={16} className="text-blue-400" />
                </div>
                <div className="bg-slate-700 rounded-lg h-32 flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <span className="text-slate-400">Video Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate Computer Science Engineering student with a deep interest in exploring 
                cutting-edge technologies and pushing the boundaries of what's possible.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My journey in technology spans across multiple domains - from full-stack web development 
                to DevOps automation, AI/ML implementations, and UI/UX design. I'm particularly enthusiastic 
                about exploring new technologies and contributing to open-source projects.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me participating in hackathons, solving competitive 
                programming challenges, or sketching new ideas. I believe in continuous learning and 
                staying updated with the latest industry trends.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-800/90 backdrop-blur-md rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Academic Info</h3>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Degree:</span>
                    <span>BTech CSE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">University:</span>
                    <span>BTU, Bikaner</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/90 backdrop-blur-md rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Open Source', 'Hackathons', 'Competitive Programming', 'DevOps', 'AI/ML', 'Web Development'].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-all">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="group bg-slate-800/90 backdrop-blur-md rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-400/30">
                <h3 className="text-xl font-semibold mb-4 text-blue-400 group-hover:text-cyan-400 transition-colors">{category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 p-2 bg-slate-700/50 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-cyan-500/30 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20">
                      <skill.icon size={16} className="text-cyan-400 group-hover:text-blue-400 transition-colors" />
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className={`group bg-slate-800/90 backdrop-blur-md rounded-lg p-6 border transition-all transform hover:scale-105 ${
                project.highlight 
                  ? 'border-blue-400 shadow-lg shadow-blue-400/30 hover:shadow-xl hover:shadow-blue-400/50 animate-pulse' 
                  : 'border-slate-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs border ${
                    project.highlight
                      ? 'bg-blue-500/30 text-blue-200 border-blue-400/50 shadow-lg shadow-blue-400/30'
                      : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                  }`}>
                    {project.category}
                  </span>
                  <ExternalLink size={16} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed group-hover:text-white transition-colors">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs hover:bg-slate-600 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full transition-all ${
                    exp.highlight 
                      ? 'bg-blue-400 shadow-lg shadow-blue-400/50 animate-pulse' 
                      : 'bg-blue-400 group-hover:bg-cyan-400'
                  }`} />
                  {index < experiences.length - 1 && <div className="w-0.5 h-20 bg-slate-700 mt-2" />}
                </div>
                <div className={`flex-1 bg-slate-800/90 backdrop-blur-md rounded-lg p-6 border transition-all transform hover:scale-105 ${
                  exp.highlight
                    ? 'border-blue-400 shadow-lg shadow-blue-400/30 hover:shadow-xl hover:shadow-blue-400/50'
                    : 'border-slate-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-blue-400 group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      exp.type === 'hackathon' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                      exp.type === 'project' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      'bg-green-500/20 text-green-300 border border-green-500/30'
                    } ${exp.highlight ? 'animate-pulse shadow-lg' : ''}`}>
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-slate-400">
                    <span className="font-medium">{exp.organization}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-slate-300 group-hover:text-white transition-colors">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-slate-800/90 backdrop-blur-md rounded-lg p-6 border border-slate-700 inline-block hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-400/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
                <Award size={20} />
                Certificates
              </h3>
              <p className="text-slate-300 mb-4">View all my certifications and achievements</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 font-semibold shadow-lg hover:shadow-blue-400/30"
              >
                <ExternalLink size={20} />
                Google Drive Certificates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Let's Connect</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just chat about technology. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 hover:text-blue-400 transition-colors">
                  <Mail className="text-blue-400" size={20} />
                  <span className="text-slate-300">krrishsharmaindia@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 hover:text-blue-400 transition-colors">
                  <Phone className="text-blue-400" size={20} />
                  <span className="text-slate-300">+91 8619128144</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Hobbies & Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {['Reading', 'Sketching', 'Badminton', 'Music'].map((hobby) => (
                    <span key={hobby} className="px-3 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 transition-all">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/90 backdrop-blur-md rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-400/20">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors hover:border-slate-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors hover:border-slate-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors resize-none hover:border-slate-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 font-semibold shadow-lg hover:shadow-blue-400/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-6 mb-6">
            <a
              href="https://github.com/krishindia1952"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-400/30"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/krrish-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-400/30"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-400/30"
            >
              <ExternalLink size={24} />
            </a>
          </div>
          <p className="text-slate-400 mb-2">
            © 2024 Krrish Sharma. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
