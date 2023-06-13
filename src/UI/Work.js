import "./_work.scss";
import projects from "../data/projects-info";
import Button from "./Button";
const Work = () => {
    return (
        <div className='work-section'>
            <h2>Work</h2>
            <p className='description'>Check out my portfolio exemples!</p>
            {/* <div className="filters"></div> */}
            <div className='cards-wrapper'>
                {projects.map((project) => {
                    return (
                        <div className='card-prj' key={project.id}>
                            <div>
                                <img src={project.image} alt='' />
                                <h3>{project.title}</h3>
                                <ul className='categories'>
                                    {project.categories.map((categ) => {
                                        return <li>{categ}</li>;
                                    })}
                                </ul>

                                <p className='projectDescription'>
                                    {project.description}
                                </p>
                            </div>
                            <div className='button-wrapper'>
                                <Button
                                    title='Preview'
                                    link={project.liveUrl}
                                />
                                <Button
                                    title='Github'
                                    link={project.githubLink}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Work;
