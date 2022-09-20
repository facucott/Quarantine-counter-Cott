import { useState, useEffect } from 'react';
// import customFetch from '../utils/customFetch';
import dataFromBD from '../utils/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { data } from '../utils/customFetch';
import { useParams } from "react-router";

const ItemDetailContainer = () => {

    const [dato, setDato] = useState([]);

    const { idItem } = useParams()

    useEffect (() => {

        if (idItem) {

            data(2000, dataFromBD)
            .then(result => setDato (result.filter(item => item.id == idItem)))
            .catch(err => console.log(err))
    
            } else {
            data(2000, dataFromBD)
            .then(result => setDato (result))
            .catch(err => console.log(err))
            }
            
        }, [idItem]);

    return (
        <div className="container">
        <div className="row">
        <ItemDetail data= {dato} />
        </div>
        </div>

    );
    
}


export default ItemDetailContainer;