import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Popular from './Popular/Popular';
import Offers from './Offers/Offers';
import NewCollection from './NewCollection/NewCollection';
import NewsLetter from './NewsLetter/NewsLetter';

const Shop = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Hero />
            <Popular />
            <Offers />
            <NewCollection/>
            <NewsLetter/>
        </>
    );
};

export default Shop;