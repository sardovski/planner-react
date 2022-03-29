import { useState, useEffect } from "react";

import { useTaskList } from "../../Context/TaskListContext";
import { useSelected } from "../../Context/SelectedContext";

import Button from "../Shared/Button";
import Input from "../Input";
import Select from "../Shared/Select";

import './Form.css'
import InputText from "../InputText/InputText";

const Form = () => {
    const [, updateTaskList ] = useTaskList();
    const [selected, setSelected] = useSelected()
    const [input, setInput] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);
    const [text,setText] = useState('');

    useEffect(() => {
        if (input.trim().length !== 0) {
            setBtnDisable(false);
        } else {
            setBtnDisable(true);
        }
    }, [input, btnDisable])


    function onAddClick(e) {
        e.preventDefault();
        
        setInput('');
        setText('');

        updateTaskList({
            id: Date.now(),
            text: input,
            completed: false,
            description:text
        })
    }
    function onChangeInput(e) {
        setInput(() => e.target.value);
    }
    function onChangeText(e) {
        setText(() => e.target.value);
    }
    function onChangeSelect(e) {
        setSelected(e.target.value)
    }

    return (
        <form>
            <h3 >Adding new task to the list.</h3>
            <section className="inputs">
            <Input
                value={input}
                onChangeInput={onChangeInput}
            />
            <InputText text={text} onChange={onChangeText}/>
            </section>
            <Select 
            selected={selected} 
            options={['All','Complete','Uncomplete']} 
            onChange={onChangeSelect}
            class='select-type'
            labelClass='select-label'
            />
            <Button
                class={`btn add-btn ${btnDisable ? 'off' : 'on'}`}
                buttonText='Add'
                enable={btnDisable}
                onClick={onAddClick}
            />
        </form>);
};

export default Form;