import "./_footer-section.scss";
import FloatingAvatarInfo from "./FloatingAvatarInfo";
import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button";
import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
const FooterSection = (props) => {
    const [modalVisibility, setModalVisibiliy] = useState(false);
    const toggleModalVisibility = () => {
        setModalVisibiliy((prevState) => !prevState);
    };
    const decodeEmail = () => {
        var encEmail = "YmFkaW9hbmE5ODk4QGdtYWlsLmNvbQ==";
        const emailAddress = document.getElementById("email-address");
        emailAddress.setAttribute("href", "mailto:".concat(atob(encEmail)));
    };
    return (
        <div className='contact-section' id='contact'>
            <div className='wrapper'>
                <div className='two-cols'>
                    <FloatingAvatarInfo />
                    <div className='section'>
                        <div className='social-icons'>
                            <a
                                href='https://github.com/BadiuIoana'
                                target='_blank'
                            >
                                <img
                                    src={githubIcon}
                                    alt='github-icon'
                                    width='28'
                                    height='30'
                                />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/ioana-andreea-badiu/'
                                target='_blank'
                            >
                                <img
                                    src={linkedinIcon}
                                    alt='linkedin-icon'
                                    width='28'
                                    height='30'
                                />
                            </a>
                        </div>
                        <Button
                            title='Get in touch!'
                            onClick={() => setModalVisibiliy(true)}
                        />
                        <Button
                            title='Contact Via Email'
                            id='email-address'
                            onClick={decodeEmail}
                        />

                        <p className='copyright'>
                            © 2023 ioana-badiu-portfolio.netlify.app
                        </p>
                    </div>
                </div>
                {modalVisibility && (
                    <Modal toggleModalVisibility={toggleModalVisibility} />
                )}
            </div>
        </div>
    );
};

export default FooterSection;
