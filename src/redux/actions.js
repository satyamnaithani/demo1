import * as types from './actionTypes';
import axios from 'axios';

const getUsers = (users) => ({
    type: types.GET_USER,
    payload: users
});

export const loadUsers = () => {
    console.log(process.env.REACT_APP_API);
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((res) => {
            dispatch(getUsers(res.data));
        }).catch((err) => console.log(err));
    }
}