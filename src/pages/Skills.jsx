function Skills() {
  const skills = [
    "Programming",
    "Java",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git & GitHub",
  ];

  return (
    <section className="page">
      <p className="tag">02 — SKILLS</p>

      <h1 className="page-title">Programming & Technical Skills</h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill" key={skill}>
            <span>0{index + 1}</span>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;