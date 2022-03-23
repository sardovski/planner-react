import './Button.css'

const Button = (props) =>{
    return(
        <button 
        className={props.class}
        onClick={props.onClick} 
        disabled={props.enable}>
            {props.buttonText}
        </button>
    );
}

export default Button; 