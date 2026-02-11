import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "TypeScript", "JavaScript", "GSAP", "JSX"],
      icon: "💻"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"],
      icon: "⚙️"
    },
    {
      title: "Database",
      skills: ["MongoDB"],
      icon: "🗄️"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
      icon: "🛠️"
    },
    {
      title: "DevOps & Virtualization",
      skills: ["VirtualBox", "Vectrus VM", "Dual Boot Configurations"],
      icon: "🚀"
    },
    {
      title: "OS Knowledge",
      skills: ["Windows 10/11", "Ubuntu 24.04 LTS", "Chrome OS Flex", "Manjaro", "Linux Mint"],
      icon: "🖥️"
    },
    {
      title: "Others",
      skills: ["Python (beginner)", "C", "Bash scripting (basic)", "UI/UX awareness"],
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
                  <div key={i} className="skill-badge-item">
                    <span className="badge-swag">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="exploring-section">
          <h3>🚀 Currently exploring:</h3>
          <div className="exploring-badges">
            <span className="badge-swag exploring">Next.js</span>
            <span className="badge-swag exploring">Docker basics</span>
            <span className="badge-swag exploring">Full system automation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;