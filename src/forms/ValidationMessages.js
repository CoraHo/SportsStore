
export const GetMessages = (elem) => {
    const mgs = [];
    if (elem.validity.valueMissing) {
        mgs.push("Value required");
    }
    if (elem.validity.typeMismatch) {
        mgs.push(`Invalid ${elem.type}`);
    }
    return mgs;
}