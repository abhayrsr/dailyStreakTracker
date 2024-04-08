import './header.css';
import Signout from '../Buttons/signOutButton/signOut';
import Light from '../Light/light';
import StreakosLogo from '../../assets/images/StreakosCrop.png';

export default function Header(){
    return(
        <nav className="nav">
            <div className="logo">
                <img className="image" src={StreakosLogo} alt="logo"/>
            </div>
            <div className="header-button-signout">
                 <Light />
                 <Signout />
            </div>
            <div className="header-button-light">
                
            </div>
        </nav>
    )
}