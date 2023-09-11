import "./_about-us.scss";
import profilePicture from "../assets/picture-profile.png";
import profilePictureWebp from "../assets/profile-color.jpg";
import Button from "./Button";
const AboutMe = (props) => {
    return (
        <section
            className='about-us-section'
            id='about-me'
            ref={props.locationInPage}
        >
            <div className='profile-picture-section'>
                <div className='image-wrapper'>
                    <span className='parallelogram top'></span>
                    <span className='dots top'></span>
                    <picture>
                        <source srcSet={profilePictureWebp} type='image/webp' />
                        <source srcSet={profilePicture} type='image/jpg' />
                        <img
                            src={profilePicture}
                            alt='profile-img'
                            width='280'
                            height='280'
                            loading='lazy'
                        />
                    </picture>
                    {/* <img src={profilePicture} alt='profile-picture' /> */}
                    <span className='parallelogram bottom'></span>
                    <span className='dots bottom'></span>
                </div>
            </div>
            <div className='content-wrapper'>
                <h1>
                    Hello! My name is Ioana Badiu and I am a<br />
                    <span className='highlighted'>Frontend Developer</span>.
                </h1>
                <p>
                    I've been working as a web developer for nearly{" "}
                    <b>four years</b>. My journey began with a PHP internship
                    focused on Laravel, and I've been dedicated to expanding my
                    knowledge in frontend technologies ever since. I've had the
                    opportunity to work on projects in various industries,
                    including{" "}
                    <b>
                        <span className='highlighted'>
                            real estate, law and marketing
                        </span>
                    </b>
                    .
                </p>
                <p>
                    Primarily, I specialize in frontend development, but I'm
                    also proficient in backend development when the need arises.
                </p>

                <p>
                    <b>
                        I've learned React through courses and practical
                        challenges for developing client-side apps.{" "}
                        <span className='highlighted'>
                            {" "}
                            I'm really interested to work with React or any
                            other JavaScript framework in the future.
                        </span>
                    </b>
                </p>
                <p>
                    My primary goal is to enhance my skills as a frontend
                    developer by continually learning, practicing, and
                    collaborating effectively within a team on upcoming
                    projects.
                </p>
                <p>
                    "Do my goals resonate with yours? Let's connect and have a
                    conversation!"
                </p>
                <div className='button-wrapper'>
                    <Button
                        title='Contact'
                        onClick={() => {
                            props.scrollTo("contact");
                        }}
                    />
                    <Button
                        title='Check my work'
                        onClick={() => {
                            props.scrollTo("work");
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
