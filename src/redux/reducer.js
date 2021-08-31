import * as types from './actionTypes';

const initialState = {
    users: [],
    user: {},
    loading: true
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER: 
            return {
                ...state,
                user:action.payload,
                loading: false
            };
        default: 
            return state;
    }
}

export default userReducer;