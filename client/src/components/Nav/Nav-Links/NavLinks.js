import { Link } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = () => {
    return ( 
            <nav className="nav__bottom__container">
                <div className="bottom__container">
                    <ul className="nav">
                        <li className='nav-link'><Link to="/inara">Inara</Link></li> 
                        <li className='nav-link'><Link to="/pooranya">Pooranya</Link> </li>
                        <li className='nav-link'><Link to="/minavar">Minavar</Link></li> 
                        <li className='nav-link'><Link to="/malar">Malar</Link></li> 
                        <li className='nav-link'><Link to="/malar">Naari</Link></li> 
                    </ul>
                </div>
            </nav>
     );
}
 
export default NavLinks;