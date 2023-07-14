import "./_contact-form.scss";
import { useState } from "react";
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
        <div className='wrapper contact-section'>
            <form name='contact' method='post'>
                <input type='hidden' name='form-name' value='contact' />
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
