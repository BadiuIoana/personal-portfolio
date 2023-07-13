import { Fragment } from "react";
import "./App.scss";
import NavBar from "./UI/NavBar";
import AboutUs from "./UI/AboutUs";
import Work from "./UI/Work";
import TimelineResume from "./UI/TimelineResume";
import ContactForm from "./UI/ContactForm";

function App() {
    return (
        <Fragment>
            {/* <Loader /> */}
            <header>
                <NavBar />
                <AboutUs />
            </header>
            <section>
                <Work />
            </section>
            <TimelineResume />
            <ContactForm />
        </Fragment>
    );
}

export default App;
