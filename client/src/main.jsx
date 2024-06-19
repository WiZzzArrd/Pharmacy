import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {createContext} from "react";
import UserStore from "./store/UserStore.js";
import ProductStore from "./store/ProductStore.js";
import BasketStore from "./store/BasketStore.js";

export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById("root")).render(
    <Context.Provider value={{
        user: new UserStore(),
        products: new ProductStore(),
        basket: new BasketStore()
    }}>
    <App />
    </Context.Provider>
);
