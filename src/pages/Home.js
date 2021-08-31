import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadUsers} from '../redux/actions';

const Home = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.data);
    useEffect(() => {
        dispatch(loadUsers());
    }, [])
    console.log(user);
    return (
        <div>
            Home
        </div>
    )
}

export default Home; 