import "./_floating-avatar.scss";
import avatarImg from "../assets/avatar.png";

const FooterSection = () => {
    return (
        <div className='section'>
            <p className='speech-text'>
                Don't add me to the '.gitignore' file!&#128522; Perhaps we can
                join forces in a fantastic team to deliver creative and valuable
                solutions for project needs.
                <br /> Let's chat!
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
