const INITIAL_STATE = {
    NAV_VALUE: 0
}

export const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_NAV_VALUE':
            return {...state, NAV_VALUE: action.payload}

        default:
            return state
    }
}