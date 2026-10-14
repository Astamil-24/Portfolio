import { useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

function App() {
  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const skills = [
    {
      title: "Frontend Development",
      description: "Building responsive and user-friendly interfaces.",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend Development",
      description: "Developing application logic and web functionality.",
      items: ["Python", "Django", "REST API"],
    },
    {
      title: "Database",
      description: "Managing and organizing application data.",
      items: ["MySQL", "SQLite", "SQL"],
    },
    {
      title: "Tools & Technologies",
      description: "Tools used for development and version control.",
      items: ["Git", "GitHub", "VS Code", "Vite"],
    },
  ];

  const projects = [
    {
      title: "Fish Feed Recommendation System",
      category: "Full Stack & Machine Learning",
      description:
        "A recommendation system that suggests suitable vegetable and fruit food options for different fish based on their feeding habits and water types.",
      technologies: ["Python", "Django", "React", "Machine Learning"],
      icon: "🐟",
      link: "https://github.com/Astamil-24/Fish-Feed-Recommendation-System",
    },
    {
      title: "Grocery Shop Management System",
      category: "Web Development",
      description:
        "A grocery shop application designed to display grocery products and provide an interactive shopping interface using frontend web technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: "🛒",
      link: "https://github.com/Astamil-24/Grocery_Web",
    },
    {
      title: "Student Management System",
      category: "Python Application",
      description:
        "A student record management application that stores student details and supports basic record operations using Python file handling.",
      technologies: ["Python", "File Handling"],
      icon: "🎓",
      link: "https://github.com/Astamil-24/Students-Record-system",
    },
    {
      title: "Weather Forecast App",
      category: "Frontend Development",
      description:
        "A weather application built with React that retrieves weather information from an API and displays current conditions for the selected location.",
      technologies: ["React", "JavaScript", "CSS", "API"],
      icon: "🌤️",
      link: "https://github.com/Astamil-24/Weather-app-react",
    },
  ];

  const contactItems = [
    {
      icon: "✉",
      title: "Email",
      value: "shankarnarayanan000@gmail.com",
      href: "mailto:shankarnarayanan000@gmail.com",
    },
    {
      icon: "⌘",
      title: "GitHub",
      value: "github.com/Astamil-24",
      href: "https://github.com/Astamil-24",
    },
    {
      icon: "in",
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/shankara-narayanan-292409380/",
    },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    setIsSending(true);
    setFormStatus("");

    try {
      await emailjs.sendForm(
        "service_dgt8ky7",
        "template_f4vnbcq",
        form,
        "qqGKc3TdZ-TsRhLxI"
      );

      setFormStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo" aria-label="Go to homepage">
          SN
        </a>

        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="hero-label">Available for opportunities</div>

            <h1>
              Hi, I'm <span>Shankara Narayanan</span>
            </h1>

            <h2>Full Stack Developer</h2>

            <p className="hero-description">
              I'm a passionate developer who enjoys building practical web
              applications and learning new technologies. I focus on creating
              clean, responsive, and user-friendly digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View Projects
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>

              <a
                href="/Shankara_Narayanan_Resume.pdf"
                className="secondary-button"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-highlights">
            <div className="highlight-item">
              <h3>Frontend</h3>
              <p>Responsive Interfaces</p>
            </div>

            <div className="highlight-item">
              <h3>Backend</h3>
              <p>Application Development</p>
            </div>

            <div className="highlight-item">
              <h3>Database</h3>
              <p>Data Management</p>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-heading">
            <h2>
              About <span>Me</span>
            </h2>
            <p>A little about my background, interests, and goals.</p>
          </div>

          <div className="about-container">
            <div className="about-content">
              <h3>Building ideas into useful applications</h3>

              <p>
                I'm a Computer Science and Engineering graduate with an
                interest in web development and software engineering. I enjoy
                turning ideas into functional applications and improving my
                skills through hands-on projects.
              </p>

              <p>
                I have worked with frontend technologies, Python, Django, and
                databases to develop projects that solve practical problems.
                I'm eager to learn, collaborate with a team, and contribute to
                real-world applications.
              </p>

              <div className="about-details">
                <div className="about-detail">
                  <span>Education</span>
                  <strong>B.E. Computer Science</strong>
                </div>

                <div className="about-detail">
                  <span>Experience</span>
                  <strong>Fresher</strong>
                </div>

                <div className="about-detail">
                  <span>Focus</span>
                  <strong>Full Stack Developer</strong>
                </div>

                <div className="about-detail">
                  <span>Availability</span>
                  <strong>Full Time</strong>
                </div>
              </div>
            </div>

            <div className="about-card">
              <h3>What I Bring</h3>

              <div className="about-card-item">
                <div className="about-card-icon">01</div>
                <div>
                  <h4>Quick Learner</h4>
                  <p>
                    Comfortable learning new tools and adapting to changing
                    requirements.
                  </p>
                </div>
              </div>

              <div className="about-card-item">
                <div className="about-card-icon">02</div>
                <div>
                  <h4>Problem Solving</h4>
                  <p>
                    Interested in understanding problems and developing
                    practical solutions.
                  </p>
                </div>
              </div>

              <div className="about-card-item">
                <div className="about-card-icon">03</div>
                <div>
                  <h4>Continuous Learning</h4>
                  <p>
                    Improving my development skills through projects and
                    consistent learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-heading">
            <h2>
              My <span>Skills</span>
            </h2>
            <p>
              Technologies and tools I use to develop applications and solve
              problems.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>

                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <h2>
              Featured <span>Projects</span>
            </h2>
            <p>
              A selection of applications I've developed while learning and
              applying my technical skills.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <div className="project-icon" aria-hidden="true">
                    {project.icon}
                  </div>
                </div>

                <div className="project-content">
                  <p className="project-category">{project.category}</p>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-heading">
            <h2>
              Get In <span>Touch</span>
            </h2>
            <p>
              Have an opportunity or project in mind? Feel free to reach out.
            </p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Let's connect</h3>

              <p>
                I'm interested in entry-level opportunities where I can
                contribute, collaborate, and continue growing as a developer.
              </p>

              {contactItems.map((item) => (
                <div className="contact-item" key={item.title}>
                  <div className="contact-icon" aria-hidden="true">
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <a
                      href={item.href}
                      target={item.title === "Email" ? undefined : "_blank"}
                      rel={item.title === "Email" ? undefined : "noreferrer"}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={sendEmail}>
              <h3>Send a Message</h3>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  disabled={isSending}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  disabled={isSending}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows="5"
                  required
                  disabled={isSending}
                />
              </div>

              <div className="contact-submit-row">
                <button
                  type="submit"
                  className="primary-button"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>

                {formStatus === "success" && (
                  <span
                    className="form-status success"
                    role="status"
                    aria-live="polite"
                  >
                    Message sent successfully!
                  </span>
                )}

                {formStatus === "error" && (
                  <span
                    className="form-status error"
                    role="alert"
                    aria-live="polite"
                  >
                    Failed to send. Please try again.
                  </span>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Shankara Narayanan. All rights reserved.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/Astamil-24"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="#home">Back to Top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;