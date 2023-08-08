import "./_floating-avatar.scss";
import avatarImg from "../assets/avatar.png";

const FooterSection = () => {
    return (
        <div className='section'>
            <p class='speech-text'>
                Don't add me in '.gitignore'! &#128513; Perhaps we can be part
                together of a great team and provide creative and usefull
                solutions for project requirements.
                <br /> Let's have a chat!
                <div class='speech-bubble-ds__arrow'></div>
            </p>
            <img src={avatarImg} alt='avatar image' width='150' height='150' />
        </div>
    );
};

export default FooterSection;
