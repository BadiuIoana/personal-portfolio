import "./_navbar.scss";
import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";

const NavBar = (props) => {
    const hideMobileMenu = () => {
        if (document.getElementById("nav-toggle"))
            document.getElementById("nav-toggle").checked = false;
    };
    return (
        <div className='navigation'>
            <div className='nav-wrapper'>
                <h1 className='text-emphasize'>{`<IoanaBadiu />`}</h1>
                <input type='checkbox' id='nav-toggle' className='nav-toggle' />
                <nav>
                    <ul>
                        <li
                            onClick={() => {
                                props.scrollTo("about-me");
                                hideMobileMenu();
                            }}
                            className='menu-item'
                        >
                            {"#about-me"}
                        </li>

                        <li
                            onClick={() => {
                                hideMobileMenu();
                                props.scrollTo("resume");
                            }}
                            className='menu-item'
                        >
                            {"#resume"}
                        </li>
                        <li
                            onClick={() => {
                                hideMobileMenu();
                                props.scrollTo("work");
                            }}
                            className='menu-item'
                        >
                            {"#projects"}
                        </li>
                        <li
                            onClick={() => {
                                props.scrollTo("contact");
                                hideMobileMenu();
                            }}
                            className='menu-item'
                        >
                            {"#contact"}
                        </li>
                    </ul>
                    <div className='social-icons'>
                        <a
                            href='https://github.com/BadiuIoana'
                            target='_blank'
                            onClick={hideMobileMenu()}
                        >
                            <img
                                src={githubIcon}
                                alt='github-icon'
                                width='28'
                                height='28'
                            />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/ioana-andreea-badiu/'
                            target='_blank'
                            onClick={hideMobileMenu()}
                        >
                            <img
                                src={linkedinIcon}
                                alt='linkedin-icon'
                                width='28'
                                height='28'
                            />
                        </a>
                    </div>
                </nav>
                <label htmlFor='nav-toggle' className='nav-toggle-label'>
                    <span></span>
                </label>
            </div>
        </div>
    );
};

export default NavBar;
