import { useState } from "react";
import "../Item/Item.scss";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
// import Cart from "../Cart/Cart";


const ItemCaracteristicas = ({img, title, description, price, stock}) => {

    const [itemCount, setItemCount] = useState (false);

    const onAdd = (cantidad) => {
        alert(`Se agregó ${cantidad}`);
        setItemCount (!itemCount);
    }

    return (

        
        <>
        
        <div className="col-12">

        <div className="item-container contenedor">

            <div className="item-image">
                <img className="image" src={img} alt="Same alt value" />
            </div>

            <div className="item-info">
                <h4>{title}</h4>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
            
            {/* <div className="divBotonDetalle">
                <button className="botonDetalle">DETALLES</button>
            </div> */}

            {/* <ItemCount stock = {stock} initial = {0} onAdd = {onAdd} /> */}

            {
            itemCount 
            ?
                <div className="agregar">
                    <Link to= '/cart'>
                        <button className="botonAgregar">FINALIZAR COMPRA</button>
                    </Link>
                </div>
            :
            <ItemCount stock ={stock} initial={0} onAdd={onAdd} />

        }


            </div>
        </div>

        </>
        
        );
}

export default ItemCaracteristicas;