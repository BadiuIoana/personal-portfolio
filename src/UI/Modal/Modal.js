import "./_modal.scss";
import { Fragment } from "react";
import ContactForm from "../../Footer/ContactForm";
const Modal = () => {
    return (
        <Fragment>
            <div className='overlay'></div>
            <div className='modal'>
                <div className='modal-body'>
                    <ContactForm />
                </div>
                <button className='close-btn'>x</button>
            </div>
        </Fragment>
    );
};

export default Modal;
