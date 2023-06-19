import { Link } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = () => {
    return ( 
            <nav className="nav__bottom__container">
                <div className="bottom__container">
                    <ul className="nav">
                        <li className='nav-link'><Link to="/">Inara</Link></li> 
                        <li className='nav-link'><Link to="/shop">Pooranya</Link> </li>
                        <li className='nav-link'><Link to="/category/men">Minavar</Link></li> 
                        <li className='nav-link'><Link to="/category/women">Malar</Link></li> 
                    </ul>
                </div>
            </nav>
     );
}
 
export default NavLinks;