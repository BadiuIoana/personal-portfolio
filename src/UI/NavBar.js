import "./_navbar.scss";
import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";

const NavBar = () => {
    return (
        <div className='nav-wrapper'>
            <h1 className='text-emphasize'>{`<ioana-badiu />`}</h1>
            <input type='checkbox' id='nav-toggle' className='nav-toggle' />
            <nav>
                <ul>
                    <li>
                        <a href='#aboutme'>{"#work"}</a>
                    </li>
                    <li>
                        <a href='#mywork'>{"#resume"}</a>
                    </li>
                    <li>
                        <a href='#skills'>{"#contact"}</a>
                    </li>
                </ul>
                <div className='social-icons'>
                    <a href='https://github.com/BadiuIoana' target='_blank'>
                        <img src={githubIcon} alt='github-icon' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/ioana-andreea-badiu/'
                        target='_blank'
                    >
                        <img src={linkedinIcon} alt='linkedin-icon' />
                    </a>
                </div>
            </nav>
            <label for='nav-toggle' className='nav-toggle-label'>
                <span></span>
            </label>
        </div>
    );
};

export default NavBar;
