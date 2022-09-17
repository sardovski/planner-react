import './inputText.css'

function InputText(props) {
    
   return <textarea maxlength="500" type='text' onChange={props.onChange} value={props.text} placeholder="Type you'r description here" />

}


export default InputText;