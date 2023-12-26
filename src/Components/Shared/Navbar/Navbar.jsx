import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../../../src/assets/images/logo.png';
import cart_icon from '../../../../src/assets/images/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const [mobile, setMobile] = useState(false)
    const handleClose = () => setMobile(false)
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <>
            <div className='navbar'>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>DOKAN</p>
                </div>
                <ul className='nav-menu'>
                    <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/mens'> Men </Link>{menu === "mens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/womens'>Women </Link>{menu === "womens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/kids'>Kids </Link>{menu === "kids" ? <hr /> : <></>}</li>
                </ul>
                <div className="nav-login-cart">
                    <Link to='/signin'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                    <FontAwesomeIcon onClick={() => setMobile(!mobile)(window.scrollTo(0, 0))} className='menu-icon' icon={faBars} />
                </div>
            </div>
            <div className="nav-menu-responsive">
                <ul className='nav-menu' style={mobile ? { display: "flex" } : { display: "none" }}>
                    <li onClick={() => { setMenu("shop") }}><Link onClick={handleClose} style={{ textDecoration: 'none', color: '#626262' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("mens") }}><Link onClick={handleClose} style={{ textDecoration: 'none', color: '#626262' }} to='/mens'> Men </Link>{menu === "mens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("womens") }}><Link onClick={handleClose} style={{ textDecoration: 'none', color: '#626262' }} to='/womens'>Women </Link>{menu === "womens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("kids") }}><Link onClick={handleClose} style={{ textDecoration: 'none', color: '#626262' }} to='/kids'>Kids </Link>{menu === "kids" ? <hr /> : <></>}</li>
                </ul>
            </div>
        </>

    );
};

export default Navbar;