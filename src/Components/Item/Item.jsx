import React, { useContext, useEffect } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {

    const { addToCart } = useContext(ShopContext);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // onClick={window.scrollTo(0, 0)}
    
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
            <div className='overlay'>
                <div className='button-container'>
                    <button onClick={() => { addToCart(props.id) }}><img src="../../../src/assets/images/cart_icon.png" alt="" /></button>
                    <button><Link to={`/product/${props.id}`}><img  src="../../../src/assets/images/cart_icon.png" alt="" /></Link></button>
                </div>
            </div>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    );
};

export default Item;