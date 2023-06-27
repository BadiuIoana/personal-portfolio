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
            </div>
            {/* <div className='timeline'>
                <span className='vertical-line'></span>
                <div className='experience-section'>
                    <div className='wrapper'>
                        <div className='left-part'> 2020</div>
                        <div className='right-part'>
                            <h3>description</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nihil quibusdam eaque eligendi
                                odio totam laudantium perferendis harum, nobis
                                nam culpa cumque saepe. Nihil consectetur
                                architecto fugit repudiandae temporibus quisquam
                                voluptatum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='experience-section'>
                    <div className='wrapper'>
                        <div className='left-part'> 2020</div>
                        <div className='right-part'>
                            <h3>description</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nihil quibusdam eaque eligendi
                                odio totam laudantium perferendis harum, nobis
                                nam culpa cumque saepe. Nihil consectetur
                                architecto fugit repudiandae temporibus quisquam
                                voluptatum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='experience-section'>
                    <div className='wrapper'>
                        <div className='left-part'> 2020</div>
                        <div className='right-part'>
                            <h3>description</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nihil quibusdam eaque eligendi
                                odio totam laudantium perferendis harum, nobis
                                nam culpa cumque saepe. Nihil consectetur
                                architecto fugit repudiandae temporibus quisquam
                                voluptatum.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='timeline-section'>
                <div className='left-part'>
                    <span className='vertical-line'></span>
                    <h2>2020</h2>
                </div>
                <div className='right-part'>
                    <p className='emphasize'>Title for the job</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, sequi doloribus numquam at labore unde tempora
                        eveniet. Tenetur, tempore blanditiis. Esse in, commodi
                        possimus nostrum culpa neque illo harum delectus?
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TimelineResume;
