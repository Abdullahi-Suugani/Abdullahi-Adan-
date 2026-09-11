import { featuredProject, otherProjects } from '../data'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <h2>Projects</h2>
          <span className="section-num mono">03 — Projects</span>
        </div>

        <div className="project-feature">
          <span className="tag mono">{featuredProject.tag}</span>
          <h3>{featuredProject.name}</h3>
          <p>{featuredProject.description}</p>
          {featuredProject.url && (
            <a href={featuredProject.url} target="_blank" rel="noopener noreferrer">
              View project
            </a>
          )}
        </div>

        <div className="project-row">
          {otherProjects.map((project, i) => (
            <div className="project-card" key={i}>
              <span className="tag mono">{project.tag}</span>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
