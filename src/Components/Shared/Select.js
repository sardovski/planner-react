import './Select.css'

function Select(props) {
    return (
        <label className={props.labelClass}> By Type:
            <select className={props.class} value={props.selected} onChange={props.onChange} >
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