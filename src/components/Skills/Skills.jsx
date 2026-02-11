import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: "react" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "TypeScript", icon: "ts" },
        { name: "JavaScript", icon: "js" },
        { name: "GSAP", icon: "greensock" },
        { name: "Next.js", icon: "next" }
      ],
      icon: "💻"
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "REST APIs", icon: "postman" },
        { name: "Rust", icon: "rust" }
      ],
      icon: "⚙️"
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "MySQL", icon: "mysql" },
        { name: "Firebase", icon: "firebase" }
      ],
      icon: "🗄️"
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "VS Code", icon: "vscode" },
        { name: "Postman", icon: "postman" },
        { name: "Unity", icon: "unity" }
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
      title: "Gaming & Logic",
      skills: [
        { name: "Unity", icon: "unity" },
        { name: "Godot", icon: "godot" },
        { name: "Python", icon: "python" },
        { name: "C++", icon: "cpp" }
      ],
      icon: "🎮"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">🧠 Tech Stack & Skills</h2>
        <div className="skills-container">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-swag-card rgb-card reveal-card">
              <div className="category-header">
                <span className="category-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-badges">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="skill-badge-item jump-hover" title={skill.name}>
                    <div className="icon-wrapper">
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        className="skill-icon-img"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${skill.name}&background=3b82f6&color=fff`;
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

        <div className="exploring-section rgb-card">
          <h3 className="reflect-text">🚀 Future Horizons (Coming Soon)</h3>
          <div className="exploring-icons">
            {[
              { name: "AWS", icon: "aws" },
              { name: "Kubernetes", icon: "kubernetes" },
              { name: "Terraform", icon: "terraform" },
              { name: "Go", icon: "go" },
              { name: "Three.js", icon: "threejs" }
            ].map((future, idx) => (
              <div key={idx} className="exploring-item jump-hover">
                <img src={`https://skillicons.dev/icons?i=${future.icon}`} alt={future.name} />
                <span>{future.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;