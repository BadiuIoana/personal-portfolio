import "./_work.scss";
import projects from "../data/projects-info";
import CardProject from "./CardProject";

const Work = () => {
    return (
        <div className='work-section' id='work'>
            <div className='wrapper'>
                <h2>Projects</h2>
                <p className='description'></p>
                <div className='cards-wrapper'>
                    {projects.map((project) => (
                        <CardProject project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
