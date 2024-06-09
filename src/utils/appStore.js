import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//configure store will give us store for of our application
const appStore = configureStore({
    // these big reducer contain all reducer and responsible for changing in store
    reducer: {
        // cartReducer is responsible for change in cartSlice
        cart: cartReducer, 
    },
});

export default appStore;