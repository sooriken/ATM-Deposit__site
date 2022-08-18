import '../../../App.css';
import './sidebar-media__button.css';
import { Link } from 'react-scroll';
import { useState } from "react";

const SidebarMediaButton = () =>  {
    
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };

    return(
        <div className = "sidebar-media__button-inner" id = "sidebarMediaButton">
            {/* add "--active" modifier onclick */}
            <Link className = {`sidebar-media__button ${isActive ? "" : "sidebar-media__button--active"}`}  onClick={handleToggle}>
                <div className = "sidebar-media__button-bar"></div>
                <div className = "sidebar-media__button-bar"></div>
                <div className = "sidebar-media__button-bar"></div>
            </Link>
        </div>
    );
}

export default SidebarMediaButton;