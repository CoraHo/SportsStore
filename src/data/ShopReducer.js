import {ActionType} from "./Types";

export const ShopReducer = (storeData, action) => {
    switch(action.type) {
        case ActionType.DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data
            }
        default:
            return storeData || {}
    }
}