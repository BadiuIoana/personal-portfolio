import "./_card-project.scss";
import Button from "./Button";
const CardProject = (props) => {
    return (
        <div className='card-prj'>
            <div>
                <img src={props.project.image} alt='' />
                <h5>{props.project.title}</h5>
                <ul className='categories'>
                    {props.project.categories.map((categ) => (
                        <li key={categ}>{categ}</li>
                    ))}
                </ul>

                <p className='project-description'>
                    {props.project.description}
                </p>
            </div>
            <div className='button-wrapper'>
                <Button
                    title='Demo'
                    link={props.project.liveUrl}
                    target='_blank'
                />
                <Button
                    title='Github'
                    link={props.project.githubLink}
                    target='_blank'
                />
            </div>
        </div>
    );
};

export default CardProject;
