import Home from "./Pages/Home";
import Products from "./Pages/Products";

export const routes = [
    {
        id: 1,
        name: 'Home',
        url: '/',
        component: <Home />
    },
    {
        id: 2,
        name: 'Products',
        url: '/products',
        component: <Products />
    },
]