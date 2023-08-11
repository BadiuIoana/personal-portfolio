import { Fragment } from "react";
import "./App.scss";
import NavBar from "./UI/NavBar";
import AboutMe from "./UI/AboutMe";
import Work from "./UI/Work";
import TimelineResume from "./UI/TimelineResume";
import FooterSection from "./Footer/FooterSection";
import { useState } from "react";
function App() {
    const scrollTo = (location) => {
        window.scrollTo({
            top:
                document.getElementById(location)?.getBoundingClientRect().top +
                window.scrollY -
                document.querySelector(".nav-wrapper").getBoundingClientRect()
                    .height,
            behavior: "smooth",
        });
    };

    return (
        <Fragment>
            <NavBar scrollTo={scrollTo} />
            <AboutMe scrollTo={scrollTo} />
            <TimelineResume />
            <Work />
            <FooterSection />
        </Fragment>
    );
}

export default App;
