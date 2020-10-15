import {
    IS_FETCHED,
    FETCH_USERS,
    FETCH_USER,
} from '../constant/types';

const isFetched = (isFetched) => {
    return {
        type: IS_FETCHED,
        isFetched,
    }
}

const fetchUsers = (users) => {
    return {
        type: FETCH_USERS,
        users,
    }
}

const fetchUser = (user) => {
    return {
        type: FETCH_USER,
        user,
    }
}

export {
    isFetched,
    fetchUsers,
    fetchUser,
}