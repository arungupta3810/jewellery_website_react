import About from "./Pages/About";
import Home from "./Pages/Home";

export const routes = [
    {
        id: 1,
        name: 'Home',
        url: '/',
        component: <Home />
    },
    {
        id: 2,
        name: 'About',
        url: '/about',
        component: <About />
    },
    // {
    //     id: 3,
    //     name: 'Gallery',
    //     url: '/gallery'
    // },
    // {
    //     id: 4,
    //     name: 'Contact',
    //     url: '/contact'
    // },
]