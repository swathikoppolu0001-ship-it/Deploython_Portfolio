function Projects() {
  const projects = [
    {
      title: "StudentHub",
      description:
        "A student utility website with tools for tasks, expenses, CGPA and study time.",
      tech: "HTML • CSS • JavaScript",
    },
    {
      title: "Travel Budget Planner",
      description:
        "A web application that helps users plan travel expenses and understand their overall trip budget.",
      tech: "React • JavaScript • CSS",
    },
    {
      title: "Concert Finder",
      description:
        "A frontend platform for discovering concerts and events based on artists, cities and preferences.",
      tech: "React • JavaScript • CSS",
    },
    {
      title: "Online Shopping Behavior Analysis",
      description:
        "A data analysis project exploring online shopping behavior and purchase intention.",
      tech: "Python • Machine Learning",
    },
  ];

  return (
    <section className="page">
      <p className="tag">03 — PROJECTS</p>

      <h1 className="page-title">My Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <span className="project-number">0{index + 1}</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technologies">{project.tech}</div>

            <a href="#contact">Project Details →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;