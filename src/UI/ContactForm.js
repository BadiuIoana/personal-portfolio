import "./_contact-form.scss";

const ContactForm = () => {
    return (
        <div className='wrapper contact-section'>
            <form
                className='contact-form'
                method='POST'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
            >
                <input name='bot-field' className='hidden' />
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

                <button type='submit'>Send message</button>
            </form>
        </div>
    );
};

export default ContactForm;
