import { Fragment } from "react";
import "./App.scss";
import Loader from "./UI/Loader";
import NavBar from "./UI/NavBar";
import AboutUs from "./UI/AboutUs";

function App() {
    return (
        <Fragment>
            {/* <Loader /> */}
            <header>
                <NavBar />
                <AboutUs />
            </header>
        </Fragment>
    );
}

export default App;
