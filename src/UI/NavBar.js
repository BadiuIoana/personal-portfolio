import "./_navbar.scss";
import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";

const NavBar = (props) => {
    return (
        <div className='nav-wrapper'>
            <h1 className='text-emphasize'>{`<ioana-badiu />`}</h1>
            <input type='checkbox' id='nav-toggle' className='nav-toggle' />
            <nav>
                <ul>
                    <li
                        onClick={(e) => {
                            props.setLocationInPage(
                                e.target.getAttribute("data-description")
                            );
                        }}
                        className='menu-item'
                        data-description='about-me'
                    >
                        {"#about-me"}
                    </li>
                    <li
                        onClick={(e) => {
                            props.setLocationInPage(
                                e.target.getAttribute("data-description")
                            );
                        }}
                        className='menu-item'
                        data-description='work'
                    >
                        {"#work"}
                    </li>
                    <li
                        onClick={(e) =>
                            props.setLocationInPage(
                                e.target.getAttribute("data-description")
                            )
                        }
                        className='menu-item'
                        data-description='resume'
                    >
                        {"#resume"}
                    </li>

                    <li
                        onClick={(e) =>
                            props.setLocationInPage(
                                e.target.getAttribute("data-description")
                            )
                        }
                        className='menu-item'
                        data-description='contact'
                    >
                        {"#contact"}
                    </li>
                </ul>
                <div className='social-icons'>
                    <a href='https://github.com/BadiuIoana' target='_blank'>
                        <img
                            src={githubIcon}
                            alt='github-icon'
                            width='20'
                            height='20'
                        />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/ioana-andreea-badiu/'
                        target='_blank'
                    >
                        <img
                            src={linkedinIcon}
                            alt='linkedin-icon'
                            width='20'
                            height='20'
                        />
                    </a>
                </div>
            </nav>
            <label htmlFor='nav-toggle' className='nav-toggle-label'>
                <span></span>
            </label>
        </div>
    );
};

export default NavBar;
