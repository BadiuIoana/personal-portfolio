import { Fragment } from "react";
import "./App.scss";
import Loader from "./UI/Loader";
import NavBar from "./UI/NavBar";
import AboutUs from "./UI/AboutUs";
import Work from "./UI/Work";
import TimelineResume from "./UI/TimelineResume";

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
        </Fragment>
    );
}

export default App;
