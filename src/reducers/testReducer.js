const SET_INT_VALUE = 'SET_INT_VALUE';

const init = {
    testIntValue: 42,
    testBoolValue: true,
};

const testReducer = (state = init, action) => {
    //debugger;
    switch (action.type){
        case SET_INT_VALUE:
            return {
                ...state,
                testIntValue: action.newValue,
            }
        default:
            return state;
    }
}

export default testReducer;

export const setIntValueActionCreator = (newValue) => {
    return {
        type: SET_INT_VALUE,
        newValue: newValue,
    };
};