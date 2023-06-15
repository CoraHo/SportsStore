
const isPromise = (payload) =>
    (typeof(payload) === "object" || typeof(payload) === "function") && typeof(payload.then) === "function";

/** the asyncAction will inspect every action sent to data store
 *  and deal with those with a Promise payload by resolving the promise and replace the payload.
 *  the next() function indicates the continuous normal path through data store
 */
export const asyncAction = () => (next) => (action) => {
    if (isPromise(action.payload)) {
        action.payload.then((result) => {
            next({...action, payload: result});
        });
    }else {
        next(action);
    }
}