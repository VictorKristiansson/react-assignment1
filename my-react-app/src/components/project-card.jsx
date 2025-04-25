import "../components/project-card.css"

function ProjectCard(props){
    return(
        <div className="project-card">
            <h3>{props.name}</h3>
            <p>{props.tech}</p>
            <p>{props.description}</p>
            <img src={props.screenshot} alt={`${props.name} screenshot`} />
            <a href={props.github} target="_blank" >View On GitHub!</a>
        </div>
        
    )
}

export default ProjectCard