import { Fragment } from "react";
import "./App.scss";
import NavBar from "./UI/NavBar";
import AboutMe from "./UI/AboutMe";
import Work from "./UI/Work";
import TimelineResume from "./UI/TimelineResume";
import FooterSection from "./Footer/FooterSection";
import { useEffect } from "react";
import Showcase from "./UI/Showcase";
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
function App() {
    useEffect(() => {
        const hiddenElements = document.querySelectorAll(".animated-section");
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);
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
            <Showcase />
            <TimelineResume />
            <Work />
            <FooterSection />
        </Fragment>
    );
}

export default App;
