import './Button.css'

const Button = (props) =>{
    return(
        <button 
        className={props.class}
        onClick={props.onClick ? (e)=>{
            props.onClick(e)} : null} 
        disabled={props.enable}>
            {props.buttonText}
        </button>
    );
}

export default Button; 