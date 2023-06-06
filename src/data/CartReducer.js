import {ActionType} from "./Types";

export const CartReducer = (storeData, action) => {
    let newStore = {cart: [], cartItems: 0, cartPrice: 0, ...storeData};
    switch (action.type){
        case ActionType.CART_ADD:
            const prod = action.payload.product;
            const quant = action.payload.quantity;

            let existing = newStore.cart.find(item => item.product.id === prod.id);
            if (existing) {
                existing.quantity += quant;
            }else {
                newStore.cart = [...newStore.cart, action.payload];
            }
            newStore.cartItems += quant;
            newStore.cartPrice += prod.price * quant;
            return newStore;

        case ActionType.CART_UPDATE:
            newStore.cart = newStore.cart.map(item => {
                if (item.product.id === action.payload.product.id) {
                    const diff = action.payload.quantity - item.quantity;
                    newStore.cartItems += diff;
                    newStore.cartPrice += action.payload.product.price * diff;
                    return action.payload;
                }else {
                    return item;
                }
            })
            return newStore;

        case ActionType.CART_REMOVE:
            let deleting = newStore.cart.find(item => item.product.id === action.payload.id);
            if (deleting) {
                newStore.cartItems -= deleting.quantity;
                newStore.cartPrice -= deleting.product.price * deleting.quantity;
            }
            newStore.cart = newStore.cart.filter(item => item.product.id !== action.payload.id);
            return newStore;

        case ActionType.CART_CLEAR:
            return {...storeData, cart: [], cartItems: 0, cartPrice: 0};

        default:
            return newStore || {};
    }
}