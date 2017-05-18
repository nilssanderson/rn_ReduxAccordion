
// always need to define a return value, can never be undefined
// if state doesnt have anything it is set to null
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;

        default:
            return state;
    }
};
