import "./_resume.scss";

const TimelineResume = () => {
    return (
        <section className='resume-section'>
            <div className='wrapper'>
                <div className='title-description'>
                    <div className='title'>
                        <span className='parallelogram top'></span>
                        <span className='dots top'></span>
                        <h2>Resume</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Fuga, quod temporibus? Accusantium temporibus
                        numquam neque, cum nihil ad rerum eius, id dolore magnam
                        unde assumenda voluptatibus eaque exercitationem,
                        perspiciatis blanditiis.
                    </p>
                </div>
                <ul class='timeline'>
                    <li class='timeline-event'>
                        <label class='timeline-event-icon'></label>
                        <div class='timeline-event-copy'>
                            <p class='timeline-event-thumbnail'>
                                April 2011 - heute
                            </p>
                            <h3>Geil,Danke! GmbH</h3>
                            <h4>Geschäftsführerin eines Web-Studios</h4>
                            <p>
                                <strong>
                                    Schwerpunkt: Frontend-Entwicklung
                                </strong>
                                <br />
                                Entwickeln von anspruchsvollen, animierten,
                                responsive und adaptive Webseiten mit HTML5,
                                SCSS, jQuery; für alle Browser, optimiert für
                                Desktop, Notebook, Smartphones und Tablets (iOS,
                                Android, Windows).
                            </p>
                            <p>
                                <strong>Projektmanagement mit Scrum</strong>
                                <br />
                                Ständiges Verbessern des agilen
                                Entwicklungsprozesses beispielsweise durch
                                Grunt, Yeoman, GIT, JIRA und BrowserStack.
                            </p>
                        </div>
                    </li>
                    <li class='timeline-event'>
                        <label class='timeline-event-icon'></label>
                        <div class='timeline-event-copy'>
                            <p class='timeline-event-thumbnail'>
                                November 2009 - März 2011
                            </p>
                            <h3>Freelancer</h3>
                            <h4>Designer und Autor</h4>
                            <p>
                                Konzeption, Design und Produktion von Digitalen
                                Magazinen mit InDesign, der Adobe Digital
                                Publishing Suite und HTML5. Co-Autorin der
                                Fachbücher "Digitales Publizieren für Tablets"
                                und "Adobe Digital Publishing Suite" erschienen
                                im dpunkt.verlag.
                            </p>
                        </div>
                    </li>
                    <li class='timeline-event'>
                        <label class='timeline-event-icon'></label>
                        <div class='timeline-event-copy'>
                            <p class='timeline-event-thumbnail'>
                                April 2011 - heute
                            </p>
                            <h3>konplan gmbh</h3>
                            <h4>IT-Consultant</h4>
                            <p>
                                <strong>Systemarchitektur, Consulting</strong>
                                <br />
                                Konzeption und Modellierung von Systemen und
                                APIs für Digital Publishing und Entitlement nach
                                SOA
                            </p>
                        </div>
                    </li>
                </ul>
                {/* <ul>
                <li>
                    <div class='date'>2019</div>
                    <div class='title'>Roweb Development</div>
                    <div class='descr'>
                        Working as a full time employee since the last year of
                        the bachelor degree by applying at a internship program
                        in Laravel framework. Be part of a team and contribute
                        with solutions in 3 projects. Tech stack: CSS, SCSS,
                        HTML, JavaScript, JQuery, VueJS, PHP, Laravel, MySQL, (+
                        practiced React);
                    </div>
                </li>

                <li>
                    <div class='date'>2020</div>
                    <div class='title'>Universitatea din Pitesti</div>
                    <div class='descr'>
                        Bachelor's degree, Informatics (October 2017 - July
                        2020)
                    </div>
                </li>
                <li>
                    <div class='date'>2018</div>
                    <div class='title'>Vilnius University</div>
                    <div class='descr'>
                        One semester scholarship, Informatics (August 2018 -
                        February 2019) I had a cultural experience while being a
                        student abroad.
                    </div>
                </li>
                <li>
                    <div class='date'>2017</div>
                    <div class='title'>Colegiul National "Ion C. Bratianu"</div>
                    <div class='descr'>
                        High School Diploma, Mathematics - Informatics
                        (September 2013 - July 2017)
                    </div>
                </li>
            </ul> */}
            </div>
        </section>
    );
};

export default TimelineResume;
