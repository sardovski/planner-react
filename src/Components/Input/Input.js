const Input = (props) => {

    return (
        <>
            <label className="Add-Input-Label" >Add Task:
            <i className="fa-solid fa-list-check"></i>
            <input className="Add-Input"
                value={props.value}
                onChange={(e) => props.onChangeInput(e)}
                type="text"
                placeholder="Add new task"
            />
            </label>
        </>
    );
}

export default Input;