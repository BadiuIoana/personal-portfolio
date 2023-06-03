import "./_navbar.scss";

const NavBar = () => {
    return (
        <div className='nav-wrapper'>
            <p class='text-light'>{`<badiu-ioana/>`}</p>
            <input type='checkbox' id='nav-toggle' className='nav-toggle' />
            <nav>
                <ul>
                    <li>
                        <a href='#aboutme'>{"#about-me"}</a>
                    </li>
                    <li>
                        <a href='#mywork'>{"#my-work"}</a>
                    </li>
                    <li>
                        <a href='#skills'>{"#skills"}</a>
                    </li>
                    <li>
                        <a href='#contact-me'>{"#contact-me"}</a>
                    </li>
                </ul>
            </nav>
            <label for='nav-toggle' className='nav-toggle-label'>
                <span></span>
            </label>
        </div>
    );
};

export default NavBar;
