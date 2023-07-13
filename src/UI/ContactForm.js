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
    const { name, setName } = useState("");
    const { email, setEmail } = useState("");
    const { message, setMessage } = useState("");
    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                ...{ name, email, message },
            }),
        })
            .then(() => alert("Success!"))
            .catch((error) => alert(error));

        e.preventDefault();
    };

    return (
        <div className='wrapper contact-section'>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>
                        Your Name:{" "}
                        <input type='text' name='name' value={name} />
                    </label>
                </p>
                <p>
                    <label>
                        Your Email:{" "}
                        <input type='email' name='email' value={email} />
                    </label>
                </p>
                <p>
                    <label>
                        Message: <textarea name='message' value={message} />
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
