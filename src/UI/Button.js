import "./_button.scss";

const Button = (props) => {
    return (
        <button type='button'>
            <a class='fancy' href={props.link}>
                <span class='top-key'></span>
                <span class='text'>{props.title}</span>
                <span class='bottom-key-1'></span>
                <span class='bottom-key-2'></span>
            </a>
        </button>
    );
};

export default Button;
