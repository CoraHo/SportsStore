import {createStore, applyMiddleware} from "redux";
import {ShopReducer} from "./ShopReducer";
import {CartReducer} from "./CartReducer";
import {CommonReducer} from "./CommonReducer";
import {asyncAction} from "./AsyncMiddleware";

/** the applyMiddleware wraps the asyncAction that receives the actions,
 *  and return the result to createStore
 */
export const SportsStoreDataStore = createStore(
    CommonReducer(ShopReducer, CartReducer), applyMiddleware(asyncAction));