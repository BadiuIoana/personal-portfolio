import "./_floating-avatar.scss";
import avatarImg from "../assets/avatar.png";

const FooterSection = () => {
    return (
        <div className='section'>
            <p className='speech-text'>
                Don't add me in '.gitignore'! &#128513; Perhaps we can be part
                together of a great team and provide creative and usefull
                solutions for project requirements.
                <br /> Let's have a chat!
            </p>
            <img
                src={avatarImg}
                className='avatar'
                alt='avatar image'
                width='150'
                height='150'
            />
        </div>
    );
};

export default FooterSection;
