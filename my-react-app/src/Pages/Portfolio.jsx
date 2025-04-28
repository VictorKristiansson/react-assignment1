import { useState } from "react";
import ProjectCard from "../components/project-card";
import Header from "../components/header";
import '../components/button.css'; 

const Portfolio = () => {
  
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
      <Header />
      
      <div className="button-container">
        <button className="button" onClick={() => setShowProjects(!showProjects)}>
          {showProjects ? "Hide Projects" : "Show Projects"}
        </button>
      </div>
     
      
      
      {showProjects && (
        
        <div className="project-container">
          
          <ProjectCard 
            name="Productly" 
            tech="HTML + CSS" 
            description="Recreated a Figma design using HTML and CSS." 
            screenshot="./screenshots/lesson-6-screenshot.png" 
            github="https://github.com/VictorKristiansson/productly-lesson.6" 
          />
          <ProjectCard 
            name="Animation" 
            tech="HTML + CSS" 
            description="Created a Happy Birthday card with animations." 
            screenshot="./screenshots/lesson-9-screenshot.png" 
            github="https://github.com/VictorKristiansson/lesson-9-animation" 
          />
          <ProjectCard 
            name="Color Palette" 
            tech="HTML + CSS" 
            description="Recreated a color palette design using CSS Grid." 
            screenshot="./screenshots/lesson-10-screenshot.png" 
            github="https://github.com/VictorKristiansson/lesson-10-css-grid" 
          />
        </div>
      )}
    </>
  );
};

export default Portfolio;
