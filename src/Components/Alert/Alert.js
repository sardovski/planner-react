import { Children, cloneElement } from "react";

function Alert(props) {

    function onAlert(e) {

    }

    return(
        <div className="alert">
        {
        Children.map(props.children,
            (child,i)=>{

            return cloneElement(child,{alert: onAlert})
        })
        }
        </div>
    )
}


export default Alert;