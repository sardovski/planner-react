import { useRef } from "react";
import { Link } from "react-router-dom";
import useOnscreen from "../../Hooks/OnScreen";

import './Header.css'

function Header() {

    const elRef = useRef(null);
    const isVisible = useOnscreen(elRef,{
        root: null,
        rootMargin: '0px',
        threshold: 1
    },[elRef])

    return (
        <>
            <header className="header">
                <nav className="nav">
                    <ul className={isVisible ? '' : 'bg'}>
                        <li className="nav-item">
                            <Link to={'/'}>Home</Link> </li>
                        <li className="nav-item">
                            <Link to={'/Tasks'}> Task Organaizer</Link></li>
                        <li className="nav-item"><Link to={'/About'}>About</Link></li>
                    </ul>
                </nav>
            </header>
            <div ref={elRef} className="cross" > </div>
        </>
    );
}

export default Header;