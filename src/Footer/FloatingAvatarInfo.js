import "./_floating-avatar.scss";
import { Avatar } from "./Avatar";

const FooterSection = () => {
    return (
        <div className='section'>
            <p className='speech-text'>
                Don't add me to the '.gitignore' file!&#128522; Perhaps we can
                join forces in a team to deliver creative and valuable solutions
                for project needs.
                <br /> Let's chat!
            </p>
            <Avatar />
        </div>
    );
};

export default FooterSection;
