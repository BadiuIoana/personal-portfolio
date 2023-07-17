import "./_contact-form.scss";
import { useState } from "react";
import avatarImg from "../assets/avatar.png";
import Button from "./Button";

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};
const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                ...{ name: name, email: email, message: message },
            }),
        })
            .then(() => alert("Success!"))
            .catch((error) => alert(error));

        e.preventDefault();
    };

    return (
        <div className='contact-section'>
            <div className='wrapper'>
                <div className='two-cols'>
                    <div className='section'>
                        <p class='speech-text'>
                            Don't add me in '.gitignore'! &#128513; Perhaps we
                            can be part together of a great team and provide
                            creative and usefull solutions for project
                            requirements.
                            <br /> Let's have a chat!
                            <div class='speech-bubble-ds__arrow'></div>
                        </p>
                        <img
                            src={avatarImg}
                            alt='avatar image'
                            width='100'
                            height='100'
                        />
                    </div>

                    <div className='section'>
                        <h2>Contact me</h2>
                        <form name='contact' method='post'>
                            <input
                                type='hidden'
                                name='form-name'
                                value='contact'
                            />
                            <div>
                                <label htmlFor='name'>Full Name</label>
                                <input type='text' name='name' />
                            </div>
                            <div>
                                <label htmlFor='name'>Your Email</label>
                                <input type='email' name='email' />
                            </div>
                            <div>
                                <label htmlFor='name'>Message</label>
                                <textarea
                                    type='text'
                                    name='message'
                                    rows='4'
                                ></textarea>
                            </div>
                            <button type='submit'>
                                <div class='svg-wrapper'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        width='24'
                                        height='24'
                                    >
                                        <path
                                            fill='none'
                                            d='M0 0h24v24H0z'
                                        ></path>
                                        <path
                                            fill='currentColor'
                                            d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
                                        ></path>
                                    </svg>
                                </div>
                                <span>Send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
