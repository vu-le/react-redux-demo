export default(initialState, actionHandlers) => {
    return (state = initialState, action) => {
        const reduceFn = actionHandlers[action.type];
        if (!reduceFn)
            return state;

        // return Object.assign({}, state, reduceFn(state, action));
        return {
            ...state,
            ...reduceFn(state, action)
        };
    }
};
