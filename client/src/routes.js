import Admin from "./pages/Admin/Admin.jsx";
import {
    ADMIN_ROUTE,
    CART_ROUTE,
    CONTACTS_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE, NOT_FOUND, PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts.js";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import Notfound from "./pages/Notfound/Notfound.jsx";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CART_ROUTE,
        Component: Cart,
    }

]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + "/:id",
        Component: ProductPage
    },
    {
        path: NOT_FOUND,
        Component: Notfound
    }
]