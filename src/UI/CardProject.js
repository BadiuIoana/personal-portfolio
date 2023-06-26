import "./_card-project.scss";
import Button from "./Button";
const CardProject = (props) => {
    return (
        <div className='card-prj'>
            <div>
                <img src={props.project.image} alt='' />
                <h3>{props.project.title}</h3>
                <ul className='categories'>
                    {props.project.categories.map((categ) => (
                        <li key={categ}>{categ}</li>
                    ))}
                </ul>

                <p className='projectDescription'>
                    {props.project.description}
                </p>
            </div>
            <div className='button-wrapper'>
                <Button title='Preview' link={props.project.liveUrl} />
                <Button title='Github' link={props.project.githubLink} />
            </div>
        </div>
    );
};

export default CardProject;
