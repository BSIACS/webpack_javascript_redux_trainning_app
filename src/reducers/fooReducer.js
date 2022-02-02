const SET_INT_VALUE = 'SET_INT_VALUE';

const init = {
    fooIntValue: 777,
    fooStringValue: 'Some text!!!',
};

const fooReducer = (state = init, action) => {
    switch (action){

        default:
            return state;
    }
}

export default fooReducer;