import './button.css';
import {Link} from "react-router-dom";

const Button = (props) =>{
    return(
        <div className = "button-inner">
            <Link to = {`${props.ButtonLink}`} className = "button">
                {props.ButtonText}
            </Link>
        </div>
    )
}

export default Button;