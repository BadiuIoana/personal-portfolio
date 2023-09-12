import "./_resume.scss";
import Button from "./Button";

const TimelineResume = () => {
    return (
        <section className='resume-section animated-section' id='resume'>
            <div className='wrapper'>
                <div className='title-description'>
                    <h2>My Professional Growth in a Nutshell</h2>
                </div>
                <ul className='timeline'>
                    <li className='timeline-event'>
                        <div className='timeline-event-icon'>
                            <label className='icon'></label>
                        </div>

                        <div className='timeline-event-content'>
                            <p className='timeline-event-thumbnail'>
                                September 2019 to Present
                            </p>
                            <h3>Roweb Development</h3>
                            <h4>Pitesti, Romania</h4>
                            <p>
                                Implement responsive design using CSS,
                                Javascript (Vue.js, Jquery) and HTML.
                                <br />
                                One year of experience using the Vue.js
                                framework on a real estate project.
                                <br />
                                Maintaining Laravel projects and adding new
                                functionalities as needed.
                                <br />
                                Developing new features and maintaining a CMS
                                platform (using plain PHP, JavaScript, jQuery,
                                CSS, HTML, and MySQL).
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
                            <p>One semester scholarship, Informatics [...]</p>
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
                                Training at Prodinf Software: Focused on Java
                                applications and MySQL queries.
                                <br />
                                Internship at Roweb Development - Introduction
                                to the Laravel framework.
                                <br />
                                Bachelor's degree in Informatics.
                            </p>
                        </div>
                    </li>
                </ul>
                <div className='download-resume'>
                    <p>
                        Interested to learn more about me?
                        <br /> Download the full PDF resume.
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
