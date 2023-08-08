import "./_contact-form.scss";
import { Fragment, useState } from "react";

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};

const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
};

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameIsValid, setNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [messageIsValid, setMessageIsValid] = useState(false);

    const [nameIsVisited, setNameIsVisited] = useState(false);
    const [emailIsVisited, setEmailIsVisited] = useState(false);
    const [messageIsVisited, setMessageIsVisited] = useState(false);

    const [showMessageAfterSubmit, setShowMessageAfterSubmit] = useState(false);

    let formIsValid = false;

    const updateNameHandler = (event) => {
        setName(event.target.value);

        if (event.target.value.trim() !== "") {
            setNameIsValid(true);
        } else {
            setNameIsValid(false);
        }
    };

    const updateEmailHandler = (event) => {
        setEmail(event.target.value);

        if (
            event.target.value.trim() !== "" &&
            isValidEmail(event.target.value)
        ) {
            setEmailIsValid(true);
        } else {
            setEmailIsValid(false);
        }
    };

    const updateMessageHandler = (event) => {
        setMessage(event.target.value);

        if (event.target.value.trim() !== "") {
            setMessageIsValid(true);
        } else {
            setMessageIsValid(false);
        }
    };

    const onBlurNameHandler = () => {
        setNameIsVisited(true);
    };
    const onBlurEmailHandler = () => {
        setEmailIsVisited(true);
    };
    const onBlurMessageHandler = () => {
        setMessageIsVisited(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nameIsValid && emailIsValid && messageIsValid) {
            formIsValid = true;
        }
        if (!formIsValid) {
            setNameIsVisited(true);
            setEmailIsVisited(true);
            setMessageIsVisited(true);

            return;
        }
        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({
                "form-name": "contact",
                ...{ name: name, email: email, message: message },
            }),
        })
            .then((response) => {
                if (response.ok) {
                    setShowMessageAfterSubmit(true);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setNameIsValid(false);
                    setEmailIsValid(false);
                    setMessageIsValid(false);
                    setNameIsVisited(false);
                    setEmailIsVisited(false);
                    setMessageIsVisited(false);

                    formIsValid = false;
                }
            })
            .catch((error) => {
                console.log(error);
                setShowMessageAfterSubmit(true);
                console.log(showMessageAfterSubmit);
            });
    };

    return (
        <Fragment>
            {showMessageAfterSubmit && (
                <div class='message'> Thank you for contacting us!</div>
            )}
            {!showMessageAfterSubmit && (
                <form name='contact' method='post' onSubmit={handleSubmit}>
                    <input type='hidden' name='form-name' value='contact' />
                    <div className='group'>
                        <label className='input'>
                            <input
                                className='input__field'
                                type='text'
                                placeholder=' '
                                name='name'
                                value={name}
                                onChange={updateNameHandler}
                                onBlur={onBlurNameHandler}
                            />
                            <span className='input__label'>Full Name</span>
                            <span className='error'>
                                {!nameIsValid && nameIsVisited
                                    ? `The name is required.`
                                    : " "}
                                &nbsp;
                            </span>
                        </label>
                    </div>
                    <div className='group'>
                        <label className='input'>
                            <input
                                className='input__field'
                                type='text'
                                placeholder=' '
                                name='email'
                                value={email}
                                onChange={updateEmailHandler}
                                onBlur={onBlurEmailHandler}
                            />
                            <span className='input__label'>Your Email</span>
                            <span className='error'>
                                {!emailIsValid && emailIsVisited
                                    ? `Please provide a valid email.`
                                    : ""}
                                &nbsp;
                            </span>
                        </label>
                    </div>
                    <div className='group'>
                        <label className='input'>
                            <textarea
                                className='input__field'
                                type='text'
                                placeholder=' '
                                name='message'
                                rows='4'
                                value={message}
                                onChange={updateMessageHandler}
                                onBlur={onBlurMessageHandler}
                            />
                            <span className='input__label'>Message</span>
                            <span className='error'>
                                {!messageIsValid && messageIsVisited
                                    ? `The message is required.`
                                    : ""}
                                &nbsp;
                            </span>
                        </label>
                    </div>
                    <button type='submit'>
                        <div className='svg-wrapper'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                width='24'
                                height='24'
                            >
                                <path fill='none' d='M0 0h24v24H0z'></path>
                                <path
                                    fill='currentColor'
                                    d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
                                ></path>
                            </svg>
                        </div>
                        <span>Send</span>
                    </button>
                </form>
            )}
        </Fragment>
    );
};

export default ContactForm;
