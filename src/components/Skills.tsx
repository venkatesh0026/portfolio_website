
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Design');
  
  const categories = ['Design', 'Development', 'Tools'];
  
  const skills = {
    Design: [
      { name: 'UI/UX Design', proficiency: 90 },
      { name: 'Visual Design', proficiency: 85 },
      { name: 'Interaction Design', proficiency: 80 },
      { name: 'Typography', proficiency: 85 },
      { name: 'Color Theory', proficiency: 90 },
    ],
    Development: [
      { name: 'React', proficiency: 85 },
      { name: 'JavaScript', proficiency: 90 },
      { name: 'HTML/CSS', proficiency: 95 },
      { name: 'TypeScript', proficiency: 80 },
      { name: 'Tailwind CSS', proficiency: 85 },
    ],
    Tools: [
      { name: 'Figma', proficiency: 90 },
      { name: 'Adobe XD', proficiency: 85 },
      { name: 'Photoshop', proficiency: 75 },
      { name: 'VS Code', proficiency: 90 },
      { name: 'Git', proficiency: 85 },
    ]
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/50">
      <div className="container-tight">
        <span className="inline-block glass-dark px-3 py-1 rounded-full text-sm mb-6 fade-up">
          My Expertise
        </span>
        <h2 className="section-title fade-up delay-100">Skills &amp; Capabilities</h2>
        <p className="text-muted-foreground max-w-2xl mb-12 fade-up delay-200">
          My diverse skill set spans design, development, and various creative tools.
          I'm constantly learning and expanding my capabilities.
        </p>
        
        <div className="flex flex-wrap gap-3 mb-8 justify-center fade-up delay-300">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'glass-dark hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto">
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <div 
              key={skill.name} 
              className={`mb-6 fade-up delay-${(index + 4) * 100}`}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span>{skill.proficiency}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
