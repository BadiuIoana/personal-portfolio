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
                name='contact'
                method='POST'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                data-netlify-recaptcha='true'
                action='/thank-you'
            >
                <p>
                    <label>
                        Your Name: <input type='text' name='name' />
                    </label>
                </p>
                <p>
                    <label>
                        Your Email: <input type='email' name='email' />
                    </label>
                </p>
                <p>
                    <label>
                        Your Role:{" "}
                        <select name='role[]' multiple>
                            <option value='leader'>Leader</option>
                            <option value='follower'>Follower</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        Message: <textarea name='message'></textarea>
                    </label>
                </p>
                <p>
                    <button type='submit'>Send</button>
                </p>
            </form>
        </div>
    );
};

export default ContactForm;
