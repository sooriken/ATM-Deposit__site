import '../../../App.css';
import './header-navigation.css';
import {Link} from "react-scroll";
import { animateScroll as scroll } from 'react-scroll';

const HeaderNav = (props) =>  {
    return(
        <div className = "header-nav__inner">
            <Link className = "header-nav__item" to = "InfoBlock" smooth = {true} duration = "1500" >О нас</Link>
            <Link className = "header-nav__item" to = "SellBlock" smooth = {true} duration = "1500" >Комплектующие</Link>
            <Link className = "header-nav__item" to = "SplitBlock" smooth = {true} duration = "1500" >Доставка</Link>
            <Link className = "header-nav__item" to = "ContactBlock" smooth = {true} duration = "1500" >Контакты</Link>
        </div>
    );
}

export default HeaderNav;