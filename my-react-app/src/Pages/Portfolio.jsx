import { useState } from "react";
import ProjectCard from "../components/project-card";
import Header from "../components/header";
import "../components/button.css";
import PopupWindow from "../components/popup.jsx";
import SearchBox from "../components/searchbox.jsx";

const Portfolio = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(false);
  const [search, setSearch] = useState("");

  const projects = [
    {
      name: "Productly",
      tech: "HTML + CSS",
      description: "Recreated the Productly design from Figma using HTML and CSS.",
      screenshot: "./screenshots/lesson-6-screenshot.png",
      github: "https://github.com/VictorKristiansson/productly-lesson.6"
    },
    {
      name: "Animation",
      tech: "HTML + CSS",
      description: "Created a Happy Birthday card with animations.",
      screenshot: "./screenshots/lesson-9-screenshot.png",
      github: "https://github.com/VictorKristiansson/lesson-9-animation"
    },
    {
      name: "Color Palette",
      tech: "HTML + CSS",
      description: "Recreated a color palette design using CSS Grid.",
      screenshot: "./screenshots/lesson-10-screenshot.png",
      github: "https://github.com/VictorKristiansson/lesson-10-css-grid"
    }
  ];

  const filteredProjects = projects.filter((project) =>
    project.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="button-container">
        <button className="button" onClick={() => setShowProjects(!showProjects)}>
          {showProjects ? "Hide Projects" : "Show Projects"}
        </button>
      </div>

      {showProjects && (
        <>
          <SearchBox onSearch={setSearch} />

          <div className="project-container">
            {filteredProjects.map((project, index) => (
              <div key={index} onClick={() => setSelectedProject(project)}>
                <ProjectCard
                  name={project.name}
                  tech={project.tech}
                  description={project.description}
                  screenshot={project.screenshot}
                  github={project.github}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {selectedProject && (
        <PopupWindow
          title={selectedProject.name}
          tech={selectedProject.tech}
          description={selectedProject.description}
          screenshot={selectedProject.screenshot}
          github={selectedProject.github}
          onClick={() => setSelectedProject(false)}
        />
      )}
    </>
  );
};

export default Portfolio;
