import '../../App.css';
import './header.css';
import './header-media.css';
import Button from '../buttons/button';
import {Link} from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import SidebarMediaButton from '../sidebar-media/sidebar-media__button/sidebarMediaButton';
import HeaderNav from './header-navigation/header-navigation';

const Header = (props) =>  {
    return(
        <div  className = "header-inner"  id = "HeaderBlock">
            <SidebarMediaButton />
            <Link className = "logo header-logo" to = "/">ATM Deposit</Link>
            <HeaderNav />
            <Button ButtonText='Подробнее' ButtonLink='/more' />
        </div>
    );
}

export default Header;