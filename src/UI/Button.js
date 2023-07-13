import "./_button.scss";

const Button = (props) => {
    return (
        <button type='button'>
            <a className='fancy' href={props.link} download>
                <span className='top-key'></span>
                <span className='text'>{props.title}</span>
                <span className='bottom-key-1'></span>
                <span className='bottom-key-2'></span>
            </a>
        </button>
    );
};

export default Button;
