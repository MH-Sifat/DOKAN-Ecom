import React, { useEffect } from 'react';
import './RelatedProducts.css';
import data_product from '../../../../assets/API/data';
import Item from '../../../Item/Item';

const RelatedProducts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='relatedproducts'>
            <h2>Related Products</h2>
            <hr />
            <div className="relatedproducts-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
};

export default RelatedProducts;