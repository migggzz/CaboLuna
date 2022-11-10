

import cartWidget from './cartWidget.svg'
import cart from './cart.svg'

function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Cabo Luna </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Lineas de Desarrollo <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contactanos</a>
                </li>
                </ul>
                <span className="navbar-text">
                Cabo Luna
                {cartWidget}
                </span>
            </div>
        </nav>
        </>
    );
}

export default Navbar;


