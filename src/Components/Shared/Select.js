function Select(props) {
    return (
        <label> By Type:
            <select value={props.selected} onChange={props.onChange} >
                {props.options.map(e => {
                    return (
                        <option key={e} value={e}>{e}</option>
                    )
                })}
            </select>
        </label>
    )
}

export default Select;