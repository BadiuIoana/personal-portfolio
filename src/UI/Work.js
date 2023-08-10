import "./_work.scss";
import projects from "../data/projects-info";
import CardProject from "./CardProject";

const Work = (props) => {
    return (
        <div className='work-section' id='work' ref={props.locationInPage}>
            <h2>Work</h2>
            <p className='description'>Check out my portfolio examples!</p>
            <div className='cards-wrapper'>
                {projects.map((project) => (
                    <CardProject project={project} key={project.id} />
                ))}
            </div>
        </div>
    );
};

export default Work;
