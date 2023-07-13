import "./_contact-form.scss";

const ContactForm = () => {
    return (
        <div className='wrapper contact-section'>
            {/* <form
                className='contact-form'
                method='POST'
                netlify
                data-netlify='true'
                name='contact'
            >
                <div className='group'>
                    <label htmlFor='company'>Company Name</label>
                    <input type='text' name='company' />
                </div>
                <div className='group'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='text' name='email' />
                </div>
                <div className='group'>
                    <label htmlFor='message'>Message</label>
                    <input type='text' name='message' />
                </div>
                <button type='submit'>Send</button>
            </form> */}

            <form
                name='Portfolio_Contact'
                method='POST'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                data-netlify-recaptcha='true'
            >
                <div className='form-group'>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        className='form-control'
                    />
                    <input
                        type='email'
                        placeholder='email'
                        name='email'
                        className='form-control'
                    />
                    <textarea
                        name='message'
                        rows='5'
                        placeholder='message'
                        className='form-control'
                    ></textarea>
                    <div data-netlify-recaptcha='true'></div>
                </div>
                <button
                    type='submit'
                    className='submit-btn btn'
                    onClick={handleSubmit}
                >
                    send me your message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
