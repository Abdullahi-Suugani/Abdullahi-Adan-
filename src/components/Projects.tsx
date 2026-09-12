import { featuredProject } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <h2>Projects</h2>
        </div>

        <div className="project-feature">
          <span className="tag mono">{featuredProject.tag}</span>
          <h3>{featuredProject.name}</h3>
          {featuredProject.description.split("\\n\\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {featuredProject.techStack && (
            <p>
              <strong>Tech Stack:</strong> {featuredProject.techStack}
            </p>
          )}
          {featuredProject.aiFeatures && (
            <p>
              <strong>AI Features:</strong> {featuredProject.aiFeatures}
            </p>
          )}
          {featuredProject.githubUrl && (
            <a
              className="project-github-button"
              href={featuredProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Project
            </a>
          )}
        </div>

        <div className="project-row">
          {/* {otherProjects.map((project, i) => (
            <div className="project-card" key={i}>
              <span className="tag mono">{project.tag}</span>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}
