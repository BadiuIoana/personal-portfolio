import "./_resume.scss";
import Button from "./Button";

const TimelineResume = (props) => {
    return (
        <section className='resume-section' id='resume'>
            <div className='wrapper'>
                <div className='title-description'>
                    <div className='title'>
                        <span className='parallelogram top'></span>
                        <span className='dots top'></span>
                        <h2>Resume</h2>
                    </div>
                    <p>My professional growth in a nutshell:</p>
                </div>
                <ul className='timeline'>
                    <li className='timeline-event'>
                        <div className='timeline-event-icon'>
                            <label className='icon'></label>
                        </div>

                        <div className='timeline-event-content'>
                            <p className='timeline-event-thumbnail'>
                                September 2019 - Present
                            </p>
                            <h3>Roweb Development</h3>
                            <h4>Pitesti, Romania</h4>
                            <p>
                                Strong knowledge of HTML, CSS and JavaScript;
                                <br />
                                Maintain, update and develop new functionalities
                                for a CMS (Content Management System) platform;
                                <br />
                                Implement responsive user interfaces based on
                                the design specifications;
                                <br />
                                Develop functionality for various specifications
                                using PHP;
                                <br />
                                [...]
                            </p>
                        </div>
                    </li>
                    <li className='timeline-event'>
                        <label className='timeline-event-icon'></label>
                        <div className='timeline-event-content'>
                            <p className='timeline-event-thumbnail'>
                                October 2017 - July 2020
                            </p>
                            <h3>Universitatea din Pitesti</h3>
                            <h4>
                                Bachelor's degree, Informatics (October 2017 -
                                July 2020)
                            </h4>
                            <p>
                                Training at Prodinf Software (Java applications
                                and MySQL queries);
                                <br />
                                Internship at Roweb Development - getting
                                started with Laravel framework;
                                <br />
                                Web application workshop.
                            </p>
                        </div>
                    </li>
                    <li className='timeline-event'>
                        <label className='timeline-event-icon'></label>
                        <div className='timeline-event-content'>
                            <p className='timeline-event-thumbnail'>
                                August 2018 - February 2019
                            </p>
                            <h3>Vilnius University</h3>
                            <h4>
                                One semester scholarship, Informatics (August
                                2018 - February 2019)
                            </h4>
                        </div>
                    </li>
                </ul>
                <div className='download-resume'>
                    <p>
                        Are you interested to know more about me?
                        <br /> Download the complete version of the PDF resume.
                    </p>
                    <Button
                        title='Download'
                        link='/badiu-ioana-andreea-cv.pdf'
                        download
                    />
                </div>
            </div>
        </section>
    );
};

export default TimelineResume;
