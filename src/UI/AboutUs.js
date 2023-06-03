import "./_about-us.scss";
import profilePicture from "../assets/picture-profile.jpeg";
const AboutUs = () => {
    return (
        <section className='about-us-section'>
            <div className='content-wrapper'>
                <p>Hello, there! I'm </p>
                <h1>Ioana Badiu</h1>
                <p>
                    I'm an enthuziastic frontend developer, passionate about
                    Javascript, CSS and willing to learn more about UX Design as
                    well!
                </p>
                <p>
                    The main technologies I've worked with are: PHP(also with
                    Laravel), HTML, CSS and JavaScript (jQuery & Vuejs). I am a
                    self-taught person so I have practiced React in my free
                    time.
                </p>
                <p>
                    Do all above sounds good? Then you may want to see my
                    portfolio projects and drop me a line. Have a nice day.
                </p>
            </div>
            <div className='profile-picture-section'>
                <img src={profilePicture} alt='profile-picture' />
                <span className='lines'></span>
            </div>
        </section>
    );
};

export default AboutUs;
