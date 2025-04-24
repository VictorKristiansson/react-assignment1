function ProjectCard(props){
    return(
        <div className="project-card">
            <h3>{props.name}</h3>
            <p>{props.tech}</p>
            <p>{props.description}</p>
            <img src={props.screenshoot} alt={`${props.name} screenshoot`} />
            <a href={props.github} target="_blank" >View On GitHub!</a>
        </div>
    )
}

export default ProjectCard