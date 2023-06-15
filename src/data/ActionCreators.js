import {ActionType} from "./Types";
// import {data as phData} from "./placeholderData";
import {RestDataSource} from "./RestDataSource";

// export const loadData = (dataType) => {
//     return {
//         type: ActionType.DATA_LOAD,
//         payload: {
//             dataType: dataType,
//             data: phData[dataType]
//         }
//     }
// }

/** using axios to get data from server side.
 */
const dataSource = new RestDataSource();
export const loadData = (dataType, params) => {
    // dataSource.GetData(dataType, params).then((res) => {
    //     console.log("1 from action creators...");
    //     console.log(res);
    // })
    return {
        type: ActionType.DATA_LOAD,
        payload: dataSource.GetData(dataType, params).then(
            response => {
                return {
                    dataType,
                    data: response.data,
                    total: Number(response.headers["x-total-count"]),
                    params
                }}
        )
    }
}

export const setPageSize = (newSize) => {
    return {
        type: ActionType.DATA_SET_PAGESIZE,
        payload: newSize
    }
}

export const setSortProperty = (newPro) =>
    ({type: ActionType.DATE_SET_SORT_PROPERTY,
    payload: newPro})
