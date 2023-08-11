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
                            width='300'
                            height='300'
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
                    For almost <b>4 years</b> I've been working as a web
                    developer. Starting by taking part in a PHP internship in
                    Laravel, I am working diligently every day to enrich my
                    knowledge regarding frontend technologies. I've been working
                    with projects in{" "}
                    <b>
                        different industries, such as real estate, law and
                        marketing
                    </b>
                    .
                </p>
                <p>
                    I work especially as a frontend developer, but I understand
                    and practice the backend when needed.
                </p>
                <p>
                    From my working experience, I'm proficient in using
                    different programming languages and tools:{" "}
                    <b>
                        HTML, CSS (Bootstrap), SCSS, JS(JQuery, Vue.js), PHP
                        (Laravel, Lumen), MySQL
                    </b>
                    .
                </p>
                <p>
                    <b>
                        I've learned React using courses and practical
                        challenges for developing client-side apps. I'm really
                        interested to work in the future with React or any other
                        JavaScript framework.
                    </b>
                </p>
                <p>
                    My main goal is to become a better frontend developer, by
                    learning, practicing and bringing my contribution within a
                    team for future projects.
                </p>
                <p>My goal sounds familiar? Let's have a chat!</p>
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
