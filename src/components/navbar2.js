import cart from './cart.svg'
function NavBar2(){
    return(
        <>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid ">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">Cabo Luna </a>
                <img src={cart} className="" alt="cart" />
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><a href="#">Productos</a></li>
                <li><a hrefName="#">Companias</a></li>
                <li><a hrefName="#">Quienes Somos</a></li>
                <li><a hrefName="#">Contactanos</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar2;