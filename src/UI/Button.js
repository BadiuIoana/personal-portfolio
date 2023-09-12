import "./_button.scss";

const Button = (props) => {
    return (
        <button type='button' onClick={props.onClick}>
            <a
                className='fancy'
                href={props.link ? props.link : null}
                download={props.download}
                id={props.id}
                target={props.target}
            >
                <span className='top-key'></span>
                <span className='text'>{props.title}</span>
                <span className='bottom-key-1'></span>
                <span className='bottom-key-2'></span>
            </a>
        </button>
    );
};

export default Button;
