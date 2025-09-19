// src/app/page.tsx
'use client';
import { useEffect, useState } from 'react';
import Navbar from './component/navbar';
import styles from '../app/css/home.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import nitin from '../../public/nitin.jpg';
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(`.${styles.fadeIn}, .${styles.slideUp}, .${styles.slideLeft}, .${styles.slideRight}`);
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Resume download function
  const handleResumeDownload = () => {
    // Replace 'nitin-kumar-resume.pdf' with your actual resume file path
    const resumeUrl = '/resume/nitin-kumar-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = '/resume/nitin-kumar-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Resume view function (opens in new tab)
  const handleResumeView = () => {
    const resumeUrl = '/resume/nitin-kumar-resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.loadingOverlay} ${isLoaded ? styles.loaded : ''}`}>
        <div className={styles.loader}>
          <div className={styles.loaderRing}></div>
          <div className={styles.loaderText}>Loading...</div>
        </div>
      </div>

      <Navbar />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={`${styles.hero} ${styles.fadeIn}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Hi, I'm a <span className={styles.highlight}>MERN Stack</span> Developer
            </h1>
            <p className={styles.heroDescription}>
              Full Stack JavaScript Developer specializing in MongoDB, Express.js, React.js, and Node.js
            </p>
            <div className={styles.heroButtons}>
              <a href="#projects" className={styles.btnPrimary}>View Projects</a>
              <button onClick={handleResumeDownload} className={styles.btnResume}>
                <span className={styles.resumeIcon}>📄</span>
                Download Resume
              </button>
              <a href="#contact" className={styles.btnSecondary}>Contact Me</a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.profileImageContainer}>
              <Image src={nitin} alt="Nitin Kumar" className={styles.profileImage} width={400} height={400}/>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`${styles.about} ${styles.slideUp}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <p>
                  I'm a passionate MERN Stack Developer with expertise in building modern web applications. 
                  I love creating user-friendly interfaces and robust backend systems that solve real-world problems.
                </p>
                <p>
                  With strong experience in JavaScript ecosystem, I specialize in React.js for frontend development, 
                  Node.js and Express.js for backend services, and MongoDB for database management.
                </p>
                
                {/* Resume Download Section in About */}
                <div className={styles.resumeSection}>
                  <h3>Want to know more about my experience?</h3>
                  <div className={styles.resumeButtons}>
                    <button onClick={handleResumeView} className={styles.btnResumeView}>
                     <span className={styles.resumeIcon}>👀</span>
                      View Resume
                    
                    </button>
                    <button onClick={handleResumeDownload} className={styles.btnResumeDownload}>
                      <span className={styles.resumeIcon}>⬇️</span>
                      Download Resume
                    </button>
                  </div>
                </div>

                <div className={styles.stats}>
                  <div className={`${styles.stat} ${styles.slideLeft}`}>
                    <h3>1+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className={`${styles.stat} ${styles.slideUp}`}>
                    <h3>3+</h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className={`${styles.stat} ${styles.slideRight}`}>
                    <h3>5+</h3>
                    <p>Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`${styles.skills} ${styles.fadeIn}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
            <div className={styles.skillsGrid}>
              <div className={`${styles.skillCard} ${styles.slideLeft}`}>
                <div className={styles.skillIcon}>🎯</div>
                <h3>Frontend</h3>
                <p>React.js, Next.js, HTML5, CSS3, JavaScript ES6+, Redux, Tailwind CSS</p>
              </div>
              <div className={`${styles.skillCard} ${styles.slideUp}`}>
                <div className={styles.skillIcon}>⚙️</div>
                <h3>Backend</h3>
                <p>Node.js, Express.js, RESTful APIs, GraphQL, JWT Authentication</p>
              </div>
              <div className={`${styles.skillCard} ${styles.slideUp}`}>
                <div className={styles.skillIcon}>💾</div>
                <h3>Database</h3>
                <p>MongoDB, Mongoose, MySQL, PostgreSQL, Redis</p>
              </div>
              <div className={`${styles.skillCard} ${styles.slideRight}`}>
                <div className={styles.skillIcon}>🛠️</div>
                <h3>Tools & Others</h3>
                <p>Git, GitHub, Docker, AWS, Postman, VS Code, Figma</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`${styles.projects} ${styles.fadeIn}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <div className={styles.projectsGrid}>

              <div className={`${styles.projectCard} ${styles.slideUp}`}>
                <div className={styles.projectImage}>
                  <div className={styles.projectPlaceholder}><span>TheUSsoftware.com</span></div>
                </div>
                <div className={styles.projectInfo}>
                  <h3>TheUSsoftware.com</h3>
                  <p>Professional software development company website with modern design, service showcases, and client portfolio management system.</p>
                  <div className={styles.projectTech}>
                    <span>React</span>
                    <span>Next.js</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                  <div className={styles.projectLinks}>
                    <a href="https://theussoftware.com" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Live Demo</a>
                    <a href="https://github.com/Nitinnn09" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>GitHub</a>
                  </div>
                </div>
              </div>

              <div className={`${styles.projectCard} ${styles.slideUp}`}>
                <div className={styles.projectImage}>
                  <div className={styles.projectPlaceholder}><span>Lion Tech</span></div>
                </div>
                <div className={styles.projectInfo}>
                  <h3>Lion Tech</h3>
                  <p>Technology solutions platform providing innovative digital services, web development, and IT consulting with responsive design and interactive features.</p>
                  <div className={styles.projectTech}>
                    <span>React</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                  </div>
                  <div className={styles.projectLinks}>
                    <a href="https://www.lionglobal.in" className={styles.projectLink}>Live Demo</a>
                    <a href="https://github.com/Nitinnn09" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>GitHub</a>
                  </div>
                </div>
              </div>

              <div className={`${styles.projectCard} ${styles.slideUp}`}>
                <div className={styles.projectImage}>
                  <div className={styles.projectPlaceholder}></div>
                </div>
                <div className={styles.projectInfo}>
                  <h3>E-Commerce App</h3>
                  <p>Full-stack e-commerce application with React frontend, Node.js backend, and MongoDB database.</p>
                  <div className={styles.projectTech}>
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                  <div className={styles.projectLinks}>
                    <a href="#" className={styles.projectLink}>Live Demo</a>
                    <a href="#" className={styles.projectLink}>GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with Resume Option */}
        <section id="contact" className={`${styles.contact} ${styles.slideUp}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <div className={styles.contactContent}>
              
              {/* Resume Download Card */}
              <div className={`${styles.resumeCard} ${styles.fadeIn}`}>
                <h3>💼 Professional Resume</h3>
                <p>Download my complete resume with detailed work experience, education, and technical skills.</p>
                <div className={styles.resumeCardButtons}>
                  <button onClick={handleResumeView} className={styles.btnResumeCardView}>
                    View Online
                  </button>
                  <button onClick={handleResumeDownload} className={styles.btnResumeCardDownload}>
                    Download PDF
                  </button>
                </div>
              </div>

              <div className={styles.contactInfo}>
                <div className={`${styles.contactItem} ${styles.slideLeft}`}>
                  <span className={styles.contactIcon}>📧</span>
                  <p>kumarnitin84044@gmail.com</p>
                </div>
                <div className={`${styles.contactItem} ${styles.slideUp}`}>
                  <span className={styles.contactIcon}>📱</span>
                  <p>+91 7217463734</p>
                </div>
                <div className={`${styles.contactItem} ${styles.slideRight}`}>
                  <span className={styles.contactIcon}>📍</span>
                  <p>village: Samathal,post Pakbara,Dist Moradabad-244102,Utter Pradesh</p>
                </div>
                <div className={styles.socialLinks}>
                  <a href="https://github.com/Nitinnn09" className={`${styles.socialLink} ${styles.slideUp}`}>GitHub</a>
                  <a href="https://www.linkedin.com/in/nitin-kumar-87a0202b7" className={`${styles.socialLink} ${styles.slideUp}`}>LinkedIn</a>
                  <a href="https://www.instagram.com/nitinnn_arya09" className={`${styles.socialLink} ${styles.slideUp}`}>Instagram</a>
                  <a href="https://www.facebook.com/nitin.kumar.976991" className={`${styles.socialLink} ${styles.slideUp}`}>Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 MERN Developer. All rights reserved.</p>
      </footer>
    </div>
  );
}