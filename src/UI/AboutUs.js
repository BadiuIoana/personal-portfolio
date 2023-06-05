import "./_about-us.scss";
import profilePicture from "../assets/picture-profile.png";
import Button from "./Button";
const AboutUs = () => {
    return (
        <section className='about-us-section'>
            <div className='profile-picture-section'>
                <div className='image-wrapper'>
                    <span className='parallelogram top'></span>
                    <span className='dots top'></span>
                    <img src={profilePicture} alt='profile-picture' />
                    <span className='parallelogram bottom'></span>
                    <span className='dots bottom'></span>
                </div>
            </div>
            <div className='content-wrapper'>
                <h1>
                    Hi, I'm Ioana and I'm a <br />
                    <span class='highlighted'>Frontend Developer</span>.
                </h1>
                <p>
                    I'm an enthuziastic developer, based in Pitesti, Romania.
                    I've 3 years experience working mostly on creating user
                    interfaces but I've also worked on backend functionallities
                    as well.
                </p>
                <div className='button-wrapper'>
                    <Button title='Contact' link='#contact' />
                    <Button title='Check my work' link='#work' />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
