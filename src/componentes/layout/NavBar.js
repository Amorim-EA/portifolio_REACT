import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return(
    <nav>
    <ul>
     <li>
     <Link to="/">Home</Link>
     </li>
     <li>
     <Link to="/conhecimento">Conhecimentos</Link>
     </li>
     <li>
     <Link to="/servicos">Serviços</Link>
     </li>
     <li>
     <Link to="/contato">Contato</Link>
     </li>
     </ul>
    </nav>
    )
}

export default NavBar;