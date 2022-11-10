


function ItemListContainer({greeting = "Item de Tienda"}){
    return(
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">{greeting}</h5>
            <p className="card-text">Aqui va a ir una cosa de venta.</p>
            <a href="#" className="btn btn-primary">botton para comrpar</a>
            </div>
        </div>
    );
}

export default ItemListContainer;