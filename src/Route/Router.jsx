import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Shop from "../Components/Pages/Shop/Shop";
import ShopCategory from "../Components/Pages/ShopCategory/ShopCategory";
import Product from "../Components/Pages/Product/Product";
import Cart from "../Components/Pages/Cart/Cart";
import SignIn from "../Components/Pages/SignIn/SignIn";
import banner_men from '../assets/images/banner_mens.png';
import banner_women from '../assets/images/banner_women.png';
import banner_kid from '../assets/images/banner_kids.png';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Shop></Shop>
            },
            {
                path: '/mens',
                element: <ShopCategory banner={banner_men} category="men"></ShopCategory>
            },
            {
                path: '/womens',
                element: <ShopCategory banner={banner_women} category="women"></ShopCategory>
            },
            {
                path: '/kids',
                element: <ShopCategory banner={banner_kid} category="kid"></ShopCategory>
            },
            {
                path: '/product',
                element: <Product></Product>
            },
            {
                path: '/product/:productId',
                element: <Product></Product>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }
        ]
    }
])

export default router;