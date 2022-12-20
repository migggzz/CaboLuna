import cart from './cart.svg'
function NavBar2(){
    return(
        <>
        {/* <nav className="navbar navbar-inverse wrap">
            <div className="container-fluid row">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">Cabo Luna </a>
                <img src={cart} className="" alt="cart" />
                </div>
                <ul className="nav navbar-nav">
                <li className="active nav-item"><a href="#">Productos</a></li>
                <li><a hrefname="#">Companias</a></li>
                <li><a hrefname="#">Quienes Somos</a></li>
                <li><a hrefname="#">Contactanos</a></li>
                </ul>
            </div>
        </nav> */}
        <nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#">Link 1</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link 2</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link 3</a>
                </li>
                <li className="nav-item"><img src={cart} className="" alt="cart" /></li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar2;