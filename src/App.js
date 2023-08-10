import { Fragment, useEffect } from "react";
import "./App.scss";
import NavBar from "./UI/NavBar";
import AboutMe from "./UI/AboutMe";
import Work from "./UI/Work";
import TimelineResume from "./UI/TimelineResume";
import FooterSection from "./Footer/FooterSection";
import { useState } from "react";
function App() {
    const [locationInPage, setLocationInPage] = useState(null);
    useEffect(() => {
        window.scrollTo({
            top:
                document.getElementById(locationInPage)?.getBoundingClientRect()
                    .top +
                window.scrollY -
                document.querySelector(".nav-wrapper").getBoundingClientRect()
                    .height,
            behavior: "smooth",
        });
    }, [locationInPage]);

    return (
        <Fragment>
            <NavBar setLocationInPage={setLocationInPage} />
            <AboutMe setLocationInPage={setLocationInPage} />
            <Work />
            <TimelineResume />
            <FooterSection />
        </Fragment>
    );
}

export default App;
