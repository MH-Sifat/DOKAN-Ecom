import React, { useContext, useEffect } from 'react';
import './ShopCategory.css';
import { ShopContext } from '../../../Context/ShopContext';
import dropdwon_icon from '../../../assets/images/dropdown_icon.png';
import Item from '../../Item/Item';


const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Show 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    <span> Sort by</span><img src={dropdwon_icon} />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default ShopCategory;