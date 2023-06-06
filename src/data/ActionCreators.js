import {ActionType} from "./Types";
import {data as phData} from "./placeholderData";

export const loadData = (dataType) => {
    return {
        type: ActionType.DATA_LOAD,
        payload: {
            dataType: dataType,
            data: phData[dataType]
        }
    }
}