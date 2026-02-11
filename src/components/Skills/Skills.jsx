import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "TypeScript", icon: "ts" },
        { name: "JavaScript", icon: "js" },
        { name: "GSAP", icon: "gsap" },
        { name: "JSX", icon: "react" }
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
      title: "DevOps & Virtualization",
      skills: [
        { name: "VirtualBox", icon: "ae" }, // Placeholder icon if exact not found, but I'll use a string for skillicons
        { name: "Dual Boot", icon: "linux" }
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
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="skill-icon-img"
                    />
                    <span className="skill-name-text">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="exploring-section">
          <h3>🚀 Currently exploring:</h3>
          <div className="exploring-icons">
            <img src="https://skillicons.dev/icons?i=nextjs,docker,automation" alt="exploring" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;