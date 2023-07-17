import {ActionType, DataTypes} from "./Types";

export const ShopReducer = (storeData, action) => {
    switch(action.type) {
        case ActionType.DATA_LOAD:
            return {
                ...storeData,
                // using [] to set the value of payload to be an attribute in this new object
                [action.payload.dataType]: action.payload.data,
                [`${action.payload.dataType}_total`]: action.payload.total,
                [`${action.payload.dataType}_params`]: action.payload.params
            }
        case ActionType.DATA_SET_PAGESIZE:
            return {...storeData, pageSize: action.payload}
        case ActionType.DATE_SET_SORT_PROPERTY:
            return {...storeData, sortKey: action.payload}
        case ActionType.DATA_STORE:
            if (action.payload.dataType === DataTypes.ORDERS) {
                return {...storeData, order: action.payload.data}
            }
            break;
        default:
            return storeData || {}
    }
}