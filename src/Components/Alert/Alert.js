// import { Children, cloneElement, useState } from "react";
import { useEffect, useRef, useState } from "react";
import Button from "../Shared/Button";
import './Alert.css'


function Alert(props) {

   const alertWindow = useRef(null) 
   const alertBox = useRef(null)
   let positionOfEl = props.boxPosition.getBoundingClientRect(); 
   let [toPosition,setToPosition] = useState(null);
   let [show,setShow] = useState(null)

    console.log(props.boxPosition.getBoundingClientRect());

    useEffect(()=>{

      console.log(alertBox.current.getBoundingClientRect());
      console.log(positionOfEl.y-(alertWindow.current.getBoundingClientRect()).y);
      setToPosition(positionOfEl.y-(alertWindow.current.getBoundingClientRect()).y - (alertBox.current.getBoundingClientRect()).height/2)
      setShow('100')

      return () => {
         setToPosition(null)
         setShow(null)
      }

    },[])


        return(
                <section  ref={alertWindow} className="alert-window">
                    <section ref={alertBox} style={{position:'absolute',top:toPosition,opacity:show}} > 
                     <p>{props.text}</p>
                     <div className="alert-window-btn">
                        <Button onClick={props.onAccept} buttonText='OK' />
                        <Button onClick={props.onDecline} buttonText='NO'/>
                     </div>
                     </section>
                </section> 
                )
    
}


export default Alert;



// const [confirm, setConfirm] = useState({ alertWindow: false, confirm: false })

//     function onAlert(e) {
//         setConfirm({ alertWindow: true, confirm: false })

//     }

//     function onAccept(e) {
//         setConfirm({ alertWindow: true, confirm: true })
//     }

//     function onDecline(e) {
//         setConfirm({ alertWindow: false, confirm: false })
//     }


//     return (
//         <div className="alert">

//             {
//              confirm.alertWindow ?
//                  <>
//                  <section className="alert-window">
//                      <p>Are sure you?</p>
//                      <Button onClick={onAccept} buttonText='OK' />
//                      <Button onClick={onDecline} buttonText='NO'/>
//                  </section> 

//                  {
//                  Children.map(props.children,
//                      (child) => {
//                          return cloneElement(child, { alert: onAlert })
//                      })
//                      }
//                  </>
//                  :
                 
//                  Children.map(props.children,
//                      (child) => {
//                          return cloneElement(child, { alert: onAlert })
//                      })
//             }
//         </div>
//     )