import {ActionType} from "./Types";

export const addToCart = (product, quantity) => {
    return {
        type: ActionType.CART_ADD,
        payload: {
            product,
            quantity: quantity || 1
        }
    }
};

export const updateCartQuantity = (product, quantity) => {
    return {
        type: ActionType.CART_UPDATE,
        payload: {
            product,
            quantity
        }
    }
};

export const removeFromCart = (product) => {
    return {
        type: ActionType.CART_REMOVE,
        payload: product
    }
};

export const clearCart = () => {
    return {
        type: ActionType.CART_CLEAR
    }
};
