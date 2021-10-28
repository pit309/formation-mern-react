// Logo
// Menu
import { NavLink } from 'react-router-dom'

function Header() {
    return(
        <header className="header inverse">
            <div className="container">
                <div className="logo">
                    <img src="./logo192.png" />
                </div>
                <div className="menu">
                    <NavLink to="/" activeClassName="active">Accueil</NavLink>
                    <NavLink to="/articles" activeClassName="active">Articles</NavLink>
                    <NavLink to="/apropos" activeClassName="active">A propos</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header