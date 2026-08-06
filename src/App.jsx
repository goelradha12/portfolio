import React, { useEffect, useRef } from "react";
import "./App.css";

/* ── Skill → category color mapping (§4) ─────────────────────── */
const skillColorMap = {
  // Languages → violet
  "JavaScript": "violet", "C++": "violet", "HTML": "violet", "CSS": "violet",
  // Frontend → pink
  "React": "pink", "Tailwind CSS": "pink",
  // Backend → green
  "Node.js": "green", "Express.js": "green", "MongoDB": "green",
  "PostgreSQL": "green", "Prisma": "green",
  // Platforms / CMS → lime
  "WordPress": "lime", "Wix": "lime", "EDS": "lime",
  // Tools → teal
  "Git": "teal", "GitHub": "teal",
};

/* ── Card-head color rotation (violet → lime → pink) ─────────── */
const headColors = ["violet", "lime", "pink"];

/* ── Timeline dot color rotation ─────────────────────────────── */
const dotColors = ["violet", "pink", "lime", "teal"];

const App = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 340; // card width + gap
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  // ── Data ─────────────────────────────────────────────────────

  const experienceData = [
    {
      dateRange: "May – Jul 2026",
      duration: "2.5 months",
      company: "Adobe",
      title: "Technical Consultant Intern",
      description:
        "Worked with Adobe's Edge Delivery Services team. Built performant web experiences on-site in Bengaluru, India.",
    },
    {
      dateRange: "May 2023 – Feb 2026",
      duration: "2 yrs 10 months",
      company: "HedgeHomes",
      title: "WordPress Developer Intern",
      description:
        "Managed the company's official website and built over 25+ landing pages with WordPress. Remote role based in Noida, India.",
    },
    {
      dateRange: "Feb 2022",
      duration: "1 month",
      company: "Umeed A Drop Of Hope",
      title: "Winter Intern",
      description:
        "Completed 4 tasks during the internship period and delivered a presentation as the final report.",
    },
  ];

  const educationData = [
    { degree: "MCA", year: "2024 – 27", detail: "9.45 CGPA", institute: "MANIT (NIT Bhopal)" },
    { degree: "BCA", year: "2020 – 23", detail: "83.9%", institute: "MDU, Rohtak" },
    { degree: "12th", year: "2017 – 18", detail: "93.2%", institute: "Agrasen Public School, Hodal" },
    { degree: "10th", year: "2015 – 16", detail: "94.2%", institute: "Happy Modern School, Punhana" },
  ];

  const projects = [
    {
      name: "Craftora",
      category: "Edge Delivery Services",
      summary: "E-commerce platform for designing and purchasing customized merchandise.",
      tech: ["EDS", "HTML", "CSS", "JavaScript"],
      description:
        "Craftora enables users to transform everyday products into unique, personalized items by adding their own text, images, and creative designs.",
      links: [
        { text: "Live Demo", url: "https://main--craftora-eds--goelradha12.aem.page/" },
        { text: "GitHub", url: "https://github.com/goelradha12/craftora-eds" },
      ],
    },
    {
      name: "CookTheCode",
      category: "Full-Stack Application",
      summary: "Full-stack LeetCode-style problem-solving platform.",
      tech: ["React", "Express.js", "PostgreSQL"],
      description:
        "Built with secure authentication, role-based access for managing problems, user profiles, submission tracking, and detailed editorial solutions.",
      links: [
        { text: "GitHub", url: "https://github.com/goelradha12/cohort/tree/main/MyLeetlab" },
      ],
    },
    {
      name: "Kanban Board",
      category: "Frontend Project",
      summary: "Drag-and-drop task management board.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      description:
        "A Kanban board that allows users to create, update, and delete tasks with drag and drop functionality between columns.",
      links: [
        { text: "Live Demo", url: "https://kanbans.netlify.app/" },
        { text: "GitHub", url: "https://github.com/goelradha12/cohort/blob/main/kanban%20dashboard/kanban.md" },
      ],
    },
  ];

  const wordpressVideos = [
    { file: "04.11.2024_21.52.46_REC.mp4", title: "Real Estate Project Portfolio" },
    { file: "bpwastemgt.mp4", title: "BP Waste Management" },
    { file: "mahagun-my-laagoon.mp4", title: "Mahagun My Laagoon" },
    { file: "noida-project.mp4", title: "Noida Project" },
    { file: "verifydoors.mp4", title: "Verify Doors" },
    { file: "soc.mp4", title: "SenseOverCents" },
  ];

  const skillGroups = [
    { label: "Languages", items: ["HTML", "CSS", "JavaScript", "C++"] },
    { label: "Frontend", items: ["React", "Tailwind CSS"] },
    { label: "Backend", items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma"] },
    { label: "Platforms", items: ["WordPress", "Wix", "EDS"] },
    { label: "Tools", items: ["Git", "GitHub"] },
  ];

  const recommendations = [
    {
      name: "Jeeva (V Naveen Reddy)",
      designation: "Founder @ SenseOverCents",
      intro: "Client · Dec 2024",
      feedback: `She has helped us build our company website recently on WordPress, throughout the process she has been very understanding in nature, and built us a good website. Finding people with talent and skills is hard, you know what's much harder? To find the ones with character and humility, she has them both.`,
      profile: "https://www.linkedin.com/in/jeeva-v-naveen-reddy-333924188",
    },
    {
      name: "Abhijit Dharmadhikari",
      designation: "Blogger | Analytics",
      intro: "Client · Aug 2023",
      feedback: `Choosing the WordPress Website Design service was the best decision I made for my business. Radha Goyal was professional, efficient, and delivered a stunning website that perfectly captured my brand. The SEO optimization has significantly improved my website's visibility online. Highly recommend!`,
      profile: "https://www.linkedin.com/in/abhijit-dharmadhikari",
    },
    {
      name: "Collins Enosh",
      designation: "Writer | 1 Crore Views",
      intro: "Client · May 2023",
      feedback: `Radha is a natural talent. She is so curious, and imaginative. This is the kind of writer, no AI can replace. If Radha writes for your brand, it will definitely be unique, quirky, eye-catching, and deep.`,
      profile: "https://www.linkedin.com/in/collinsenosh",
    },
    {
      name: "Alok Mishra",
      designation: "Social Media Manager",
      intro: "Client · Apr 2023",
      feedback: `I needed help with my portfolio site — she took it on immediately. She gave life to my content, making it client-ready. If you're looking for a website creator, she's top-notch.`,
      profile: "https://www.linkedin.com/in/alok-mishra-11ba84212",
    },
    {
      name: "Ashwin M",
      designation: "Personal Branding Specialist",
      intro: "Client · Apr 2023",
      feedback: `Radha is very passionate about web designing and content writing. She is very kind and understands the requirements quickly. Her work is amazing and she helped me develop a website for my mental health space.`,
      profile: "https://www.linkedin.com/in/ashwin-murugesan",
    },
    {
      name: "Milan P Sony",
      designation: "Growth Marketer",
      intro: "Client · Nov 2022",
      feedback: `She was self-driven and creative with content writing. Highly recommend her. Thank you, Radha!`,
      profile: "https://www.linkedin.com/in/milanpsony",
    },
  ];

  const practiceLinks = [
    {
      category: "HTML & CSS",
      items: [
        { name: "CodePen", links: [{ text: "Visit", url: "https://codepen.io/goelradha12" }] },
        {
          name: "Space Travel Website",
          links: [
            { text: "Live", url: "https://travel-in-a-website.netlify.app/" },
            { text: "Repo", url: "https://github.com/goelradha12/Space-Website" },
          ],
        },
      ],
    },
    {
      category: "React",
      items: [
        {
          name: "E-commerce Product Page",
          links: [
            { text: "Live", url: "https://single-product-page-for-e-commerce.netlify.app/" },
            { text: "Repo", url: "https://github.com/goelradha12/e-commerce-page" },
          ],
        },
        {
          name: "Tenzies Game",
          links: [
            { text: "Live", url: "https://64c654c961f7c9788630c9fa--incandescent-flan-f2db95.netlify.app/" },
            { text: "Repo", url: "https://github.com/goelradha12/tenzies-game" },
          ],
        },
      ],
    },
    {
      category: "JavaScript",
      items: [
        { name: "30 Days of Code", links: [{ text: "Repo", url: "https://github.com/goelradha12/js-intermediate" }] },
        {
          name: "Currency Converter",
          links: [
            { text: "Live", url: "https://coruscating-stroopwafel-d8f303.netlify.app/" },
            { text: "Repo", url: "https://github.com/goelradha12/currency-convertor" },
          ],
        },
        {
          name: "Tic-Tac-Toe",
          links: [
            { text: "Live", url: "https://radha-tic-tac-toe.netlify.app/" },
            { text: "Repo", url: "https://github.com/goelradha12/tic-tac-toe" },
          ],
        },
        {
          name: "Simon Game",
          links: [
            { text: "Live", url: "https://simonegames.netlify.app/" },
            { text: "Repo", url: "https://github.com/goelradha12/simonGame" },
          ],
        },
      ],
    },
    {
      category: "Java",
      items: [
        { name: "GitHub Repo", links: [{ text: "Visit", url: "https://github.com/goelradha12/Java" }] },
      ],
    },
    {
      category: "C++",
      items: [
        { name: "Competitive Programming", links: [{ text: "CodeChef", url: "https://www.codechef.com/users/radhagoel123" }] },
        { name: "DSA", links: [{ text: "GeeksForGeeks", url: "https://auth.geeksforgeeks.org/user/goelradha12" }] },
      ],
    },
    {
      category: "C",
      items: [
        { name: "30 Days of Code", links: [{ text: "HackerRank", url: "https://www.hackerrank.com/goyalradha2001?hr_r=1" }] },
      ],
    },
  ];

  useEffect(() => {
    document.title = "Radha Goyal — Developer";
  }, []);

  // ── Render ───────────────────────────────────────────────────

  return (
    <div className="page">

      {/* ═══════ HERO (§5.1) ═══════ */}
      <section className="hero">
        <div className="hero-circle" />

        <div>
          <p className="hero-eyebrow">// whoami</p>
          <h1>Radha Goyal</h1>
          <p className="hero-role">
            Full-stack developer · WordPress specialist · MCA at NIT Bhopal
          </p>
          <p className="hero-summary">
            I build web applications that are functional, fast, and carefully designed. Currently focused on React, Node.js, and Adobe Edge Delivery Services.
          </p>

          <div className="hero-pills">
            <span className="pill-tag">React</span>
            <span className="pill-tag">Node.js</span>
            <span className="pill-tag">WordPress</span>
            <span className="pill-tag">EDS</span>
          </div>

          <div className="hero-links">
            <a href="https://github.com/goelradha12" target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/goyalradha123/" target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138-.92-2.063 2.063-2.063 1.14 0 2.064-.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
            <a href="mailto:goyalradha2001@gmail.com">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.236l-8 4.882-8-4.882V6l8 4.882L20 6v2.236z" /></svg>
              Email
            </a>
          </div>
        </div>

        {/* Photo with handwritten accent */}
        <div className="hero-photo-wrapper">
          <span className="hand-note">that's<br />me!</span>
          <svg className="hand-arrow" viewBox="0 0 70 40">
            <path d="M4 4C20 4 34 14 40 30" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M30 26L40 32L37 20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <div className="photo-frame">
            <img src="/me.png" alt="Radha Goyal" />
          </div>
        </div>
      </section>

      {/* ═══════ PROJECTS (§5.2) ═══════ */}
      <section id="projects" className="section">
        <div className="section-head">
          <p className="eyebrow">// projects</p>
          <h2 className="section-title">Selected Work</h2>
        </div>

        <div className="case-grid">
          {projects.map((project, idx) => {
            const color = headColors[idx % headColors.length];
            const isLime = color === "lime";
            return (
              <div key={idx} className="case-card">
                <div className={`case-head case-head--${color}`}>
                  <div className="case-head-circle" />
                  <div className="case-head-top">
                    <span className={`case-badge ${isLime ? "case-badge--dark" : "case-badge--light"}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={`case-label ${isLime ? "case-label--dark" : "case-label--light"}`}>
                      Case study ↗
                    </span>
                  </div>
                </div>
                <div className="case-body">
                  <p className={`case-eyebrow case-eyebrow--${color}`}>{project.category}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="case-tech">
                    {project.tech.map((t, i) => (
                      <span key={i} className="case-tech-chip">{t}</span>
                    ))}
                  </div>
                  <div className="case-links">
                    {project.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="case-link">
                        {link.text} →
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════ WORDPRESS PROJECTS ═══════ */}
      <section className="section">
        <div className="section-head">
          <p className="eyebrow">// wordpress</p>
          <h2 className="section-title">Client Projects</h2>
          <p className="section-subtitle">
            Landing pages and websites built for real clients using WordPress.
          </p>
        </div>

        <div className="video-grid">
          {wordpressVideos.map((video, idx) => (
            <div key={idx} className="video-card">
              <video
                src={`/project_videos/${video.file}`}
                controls
                muted
                loop
                playsInline
                preload="metadata"
              />
              <p className="video-card-title">{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ EXPERIENCE (§5.3) ═══════ */}
      <section className="section">
        <div className="section-head">
          <p className="eyebrow">// experience</p>
          <h2 className="section-title">Where I've Worked</h2>
        </div>

        <div className="timeline-stack">
          {experienceData.map((exp, idx) => {
            const dotColor = dotColors[idx % dotColors.length];
            return (
              <div key={idx} className="timeline-row">
                <div className={`timeline-dot timeline-dot--${dotColor}`} />
                <div>
                  <p className="timeline-date">{exp.dateRange} · {exp.duration}</p>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════ EDUCATION (§5.4 -> Timeline) ═══════ */}
      <section className="section">
        <div className="section-head">
          <p className="eyebrow">// education</p>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="timeline-stack">
          {educationData.map((item, idx) => {
            const dotColor = dotColors[idx % dotColors.length];
            return (
              <div key={idx} className="timeline-row">
                <div className={`timeline-dot timeline-dot--${dotColor}`} />
                <div>
                  <p className="timeline-date">{item.year} · {item.detail}</p>
                  <h3 className="timeline-title">{item.institute}</h3>
                  <p className="timeline-company">{item.degree}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════ SKILLS (§5.5) ═══════ */}
      <section className="section">
        <div className="section-head">
          <p className="eyebrow">// skills</p>
          <h2 className="section-title">Technologies I Use</h2>
        </div>

        <div className="skills-section">
          {skillGroups.map((group, idx) => (
            <div key={idx}>
              <p className="skill-group-label">{group.label}</p>
              <div className="skill-group-pills">
                {group.items.map((skill) => (
                  <span key={skill} className={`skill-pill skill-pill--${skillColorMap[skill] || "violet"}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ PRACTICE PLATFORMS (§5.6) ═══════ */}
      <section className="section">
        <div className="section-head">
          <p className="eyebrow">// practice</p>
          <h2 className="section-title">Coding Platforms</h2>
        </div>

        <div className="list-grid">
          {practiceLinks.map((group, idx) => (
            <div key={idx} className="list-card">
              <p className="list-card-header">{group.category}</p>
              {group.items.map((item, i) => (
                <div key={i} className="list-row">
                  <div className="list-row-dot" style={{ background: `var(--${dotColors[idx % dotColors.length]})` }} />
                  <span className="list-row-name">{item.name}</span>
                  <span className="list-row-links">
                    {item.links.map((link, j) => (
                      <a key={j} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.text}
                      </a>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ RECOMMENDATIONS (§5.7) ═══════ */}
      <section className="section">
        <div className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <p className="eyebrow">// testimonials</p>
            <h2 className="section-title">Recommendations</h2>
            <p className="section-subtitle">
              Words from people I've worked with.
            </p>
          </div>
          <div className="carousel-nav">
            <button onClick={() => scrollCarousel('left')} className="carousel-btn" aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button onClick={() => scrollCarousel('right')} className="carousel-btn" aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        <div className="rec-scroll" ref={carouselRef}>
          {recommendations.map((rec, idx) => (
            <div key={idx} className="rec-card">
              <a href={rec.profile} target="_blank" rel="noopener noreferrer" className="rec-name">
                {rec.name}
              </a>
              <p className="rec-designation">{rec.designation}</p>
              <p className="rec-intro">{rec.intro}</p>
              <p className="rec-quote">"{rec.feedback}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ FOOTER (§5.9) ═══════ */}
      <footer className="footer">
        <p className="footer-copy">© 2026 Radha Goyal</p>
        <div className="footer-links">
          <a href="https://github.com/goelradha12" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/goyalradha123/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:goyalradha2001@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default App;