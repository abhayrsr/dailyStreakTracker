import './header.css';
import {Link, Outlet} from 'react-router-dom';
import Signout from '../Buttons/signOutButton/signOut';
import Light from '../Light/light';
import StreakosLogo from '../../assets/images/StreakosCrop.png';


export default function Header(){
    return(
        <nav className="nav">
            <div className="logo">
                <Link to='/home'> <img className="image" src={StreakosLogo} alt="logo"/> </Link>
            </div>
            <div className="header-button-signout">
                 <Light />
                 <Signout />
            </div>
            <div className="header-button-light">
                
            </div>
            <Outlet />
        </nav>
    )
}