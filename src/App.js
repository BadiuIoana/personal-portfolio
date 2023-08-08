import { Fragment } from "react";
import "./App.scss";
import NavBar from "./UI/NavBar";
import AboutUs from "./UI/AboutUs";
import Work from "./UI/Work";
import TimelineResume from "./UI/TimelineResume";
import FooterSection from "./Footer/FooterSection";
import Modal from "./UI/Modal/Modal";

function App() {
    return (
        <Fragment>
            <header>
                <NavBar />
                <AboutUs />
            </header>
            <section>
                <Work />
            </section>
            <TimelineResume />
            <FooterSection />
            <Modal />
        </Fragment>
    );
}

export default App;
