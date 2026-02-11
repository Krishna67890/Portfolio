import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: "react" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "js" },
        { name: "GSAP", icon: "framer" }, // Framer as a close match for animation
        { name: "Next.js", icon: "nextjs" }
      ],
      icon: "💻"
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "REST APIs", icon: "postman" }
      ],
      icon: "⚙️"
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "mongodb" }
      ],
      icon: "🗄️"
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "VS Code", icon: "vscode" },
        { name: "Postman", icon: "postman" }
      ],
      icon: "🛠️"
    },
    {
      title: "Virtualization",
      skills: [
        { name: "VirtualBox", icon: "vbox" },
        { name: "Docker", icon: "docker" }
      ],
      icon: "🚀"
    },
    {
      title: "OS Knowledge",
      skills: [
        { name: "Windows", icon: "windows" },
        { name: "Ubuntu", icon: "ubuntu" },
        { name: "Linux", icon: "linux" }
      ],
      icon: "🖥️"
    },
    {
      title: "Others",
      skills: [
        { name: "Python", icon: "python" },
        { name: "C", icon: "c" },
        { name: "C++", icon: "cpp" },
        { name: "Bash", icon: "bash" }
      ],
      icon: "🌟"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">🧠 Tech Stack & Skills</h2>
        <div className="skills-container">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-swag-card rgb-card">
              <div className="category-header">
                <span className="category-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-badges">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="skill-badge-item" title={skill.name}>
                    <div className="icon-wrapper">
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        className="skill-icon-img"
                        onError={(e) => {
                          e.target.src = "https://skillicons.dev/icons?i=js"; // Fallback
                        }}
                      />
                    </div>
                    <span className="skill-name-text">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="exploring-section">
          <h3>🚀 Currently Learning & Exploring:</h3>
          <div className="exploring-icons">
            <div className="exploring-item">
              <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" />
              <span>Next.js</span>
            </div>
            <div className="exploring-item">
              <img src="https://skillicons.dev/icons?i=docker" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="exploring-item">
              <img src="https://skillicons.dev/icons?i=githubactions" alt="Automation" />
              <span>Automation</span>
            </div>
            <div className="exploring-item">
              <img src="https://skillicons.dev/icons?i=aws" alt="Cloud" />
              <span>Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;