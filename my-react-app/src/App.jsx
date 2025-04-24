import Header from "./components/header"
import ProjectCard from "./components/project-card" 

function App() {
  
  return(
    <>
      <Header />
        <ProjectCard 
          name = "Projekt 1" 
          tech = "Språk" 
          description = "Beskrivning"
          screenshot = "bildlänken"
          github = "githublänken" />
      
    </>
  )
    
    
}

export default App
