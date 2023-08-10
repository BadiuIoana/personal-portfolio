import "./_modal.scss";
import { Fragment } from "react";
import ContactForm from "../../Footer/ContactForm";
import ReactDOM from "react-dom";
const Modal = (props) => {
    return ReactDOM.createPortal(
        <Fragment>
            <div
                className='overlay'
                onClick={props.toggleModalVisibility}
            ></div>
            <div className='modal'>
                <div className='modal-body'>
                    <ContactForm />
                </div>
                <button
                    className='close-btn'
                    onClick={props.toggleModalVisibility}
                >
                    &times;
                </button>
            </div>
        </Fragment>,
        document.getElementById("modal")
    );
};

export default Modal;
