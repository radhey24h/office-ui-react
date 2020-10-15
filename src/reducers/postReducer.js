import {
    IS_FETCHED,
    FETCH_POSTS,
    FETCH_POST,
} from '../constant/types';

const initialState = {
    posts: [],
    post: {},
    is_fetched: false,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case IS_FETCHED:
            return {
                ...state,
                is_fetched: action.is_fetched,
            }
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case FETCH_POST:
            return {
                ...state,
                post: action.post,
            }
        default:
            return state;
    }
}