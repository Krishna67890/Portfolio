import React from 'react';
import './Skills.css';

const Skills = () => {
  const allSkills = [
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "ts" },
    { name: "JavaScript", icon: "js" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "Firebase", icon: "firebase" },
    { name: "Postman", icon: "postman" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "Docker", icon: "docker" },
    { name: "Ubuntu", icon: "ubuntu" },
    { name: "Linux", icon: "linux" },
    { name: "Windows", icon: "windows" },
    { name: "Python", icon: "python" },
    { name: "Java", icon: "java" },
    { name: "C++", icon: "cpp" },
    { name: "C#", icon: "cs" },
    { name: "Unity", icon: "unity" },
    { name: "Godot", icon: "godot" },
    { name: "Rust", icon: "rust" },
    { name: "Kotlin", icon: "kotlin" },
    { name: "Dart", icon: "dart" },
    { name: "Three.js", icon: "threejs" }
  ];

  const futureSkills = [
    { name: "AWS", icon: "aws" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Terraform", icon: "terraform" },
    { name: "Go", icon: "go" },
    { name: "Swift", icon: "swift" },
    { name: "Ruby", icon: "ruby" },
    { name: "PHP", icon: "php" },
    { name: "Elixir", icon: "elixir" },
    { name: "Svelte", icon: "svelte" },
    { name: "Zig", icon: "zig" },
    { name: "Haskell", icon: "haskell" },
    { name: "Scala", icon: "scala" },
    { name: "Julia", icon: "julia" },
    { name: "Lua", icon: "lua" }
  ];

  return (
    <section id="skills" className="skills-section-cinematic">
      <div className="container">
        <h2 className="section-title reveal-text">🚀 Technical Arsenal</h2>

        <div className="skills-immersive-wall">
          {allSkills.map((skill, index) => (
            <div key={index} className="skill-item-advanced bounce-hover">
              <div className="icon-container-floating">
                <img
                  src={`https://skillicons.dev/icons?i=${skill.icon}`}
                  alt={skill.name}
                  className="skill-main-logo"
                  loading="lazy"
                />
                <div className="skill-reflection">
                  <img src={`https://skillicons.dev/icons?i=${skill.icon}`} alt="" />
                </div>
                <div className="skill-glow"></div>
              </div>
              <span className="skill-text-label">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="future-tech-zone">
          <h3 className="zone-title">Polyglot Ambitions</h3>
          <p className="zone-subtitle">Expanding my horizons across diverse programming paradigms and cloud architectures</p>
          <div className="skills-immersive-wall mini">
            {futureSkills.map((skill, index) => (
              <div key={index} className="skill-item-advanced bounce-hover">
                <div className="icon-container-floating future">
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    className="skill-main-logo"
                  />
                  <div className="skill-reflection">
                    <img src={`https://skillicons.dev/icons?i=${skill.icon}`} alt="" />
                  </div>
                </div>
                <span className="skill-text-label">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;