import {
    IS_FETCHED
} from '../constant/types';

const initialState = {
    email: null,
    first_name: null,
    last_name: null,
    is_admin: false,
    is_fetched: false,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case IS_FETCHED:
            return {
                ...state,
                is_fetched: action.payload,
            }
        default:
            return state;
    }
}