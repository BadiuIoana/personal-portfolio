import "./_resume.scss";
import Button from "./Button";

const TimelineResume = () => {
    return (
        <section className='resume-section' id='resume'>
            <div className='wrapper'>
                <div className='title-description'>
                    <div className='title'>
                        <span className='parallelogram top'></span>
                        <span className='dots top'></span>
                        <h2>Resume</h2>
                    </div>
                    <p>
                        Three years ago, I started working as a full-time web
                        programmer, thanks to a PHP internship. Throughout my
                        career journey, I have practiced with technologies like
                        PHP, Javascript, CSS, and MySQL. Moreover, I have
                        brought my contribution to providing solutions for
                        external projects in diverse industries.
                    </p>
                </div>
                <ul class='timeline'>
                    <li class='timeline-event'>
                        <div className='timeline-event-icon'>
                            <label class='icon'></label>
                        </div>

                        <div class='timeline-event-content'>
                            <p class='timeline-event-thumbnail'>
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
                            </p>
                        </div>
                    </li>
                    <li class='timeline-event'>
                        <label class='timeline-event-icon'></label>
                        <div class='timeline-event-content'>
                            <p class='timeline-event-thumbnail'>
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
                    <li class='timeline-event'>
                        <label class='timeline-event-icon'></label>
                        <div class='timeline-event-content'>
                            <p class='timeline-event-thumbnail'>
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
                <div class='download-resume'>
                    <p>
                        Are you interested to see more about me? Download the
                        complete version of the resume in PDF.
                    </p>
                    <Button
                        title='Download'
                        link='/badiu-ioana-andreea-cv.pdf'
                        download='true'
                    />
                </div>
            </div>
        </section>
    );
};

export default TimelineResume;
