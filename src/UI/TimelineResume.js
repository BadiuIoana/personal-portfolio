import "./_resume.scss";
import Button from "./Button";

const TimelineResume = () => {
    return (
        <section className='resume-section animated-section' id='resume'>
            <div className='wrapper'>
                <div className='title-description'>
                    <h2 className='text-center'>
                        My Professional Growth in a Nutshell
                    </h2>
                </div>
                <ul className='timeline'>
                    <li className='timeline-event'>
                        <div className='timeline-event-icon'>
                            <label className='icon'></label>
                        </div>

                        <div className='timeline-event-content'>
                            <p className='timeline-event-thumbnail'>
                                September 2019 - December 2023
                            </p>
                            <h3>Roweb Development</h3>
                            <h4>Pitesti, Romania</h4>
                            <p>
                                Implement responsive design using CSS3,
                                JavaScript (Vue.js, jQuery) and HTML5.
                                <br />
                                Experience using the Vue.js framework on a real
                                estate project.
                                <br />
                                Develop new features and maintain a CMS
                                platform.
                                <br />
                                Experience with MVC software frameworks (Laravel
                                / Lumen).
                                <br />
                                [...]
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
                                Faculty of Mathematics and Informatics,
                                Lithuania
                            </h4>
                            <p>Erasmus+ scholarship for one semester [...]</p>
                        </div>
                    </li>
                    <li className='timeline-event'>
                        <label className='timeline-event-icon'></label>
                        <div className='timeline-event-content'>
                            <p className='timeline-event-thumbnail'>
                                October 2017 - July 2020
                            </p>
                            <h3>University of Pitesti</h3>
                            <h4>Department of Mathematics and Informatics</h4>
                            <p>
                                Training at Prodinf Software: Java applications,
                                Oracle database.
                                <br />
                                Internship at Roweb Development: Introduction to
                                the Laravel framework.
                                <br />
                                Bachelor's degree in Informatics.
                            </p>
                        </div>
                    </li>
                </ul>
                <div className='download-resume'>
                    <h4>
                        Interested to learn more about me?
                        <br /> Download the full PDF resume.
                    </h4>
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
