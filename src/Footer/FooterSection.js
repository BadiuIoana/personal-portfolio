import "./_footer-section.scss";
import ContactForm from "./ContactForm";
import FloatingAvatarInfo from "./FloatingAvatarInfo";

const FooterSection = () => {
    return (
        <div className='contact-section'>
            <div className='wrapper'>
                <div className='two-cols'>
                    <FloatingAvatarInfo />

                    <div className='section'></div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
