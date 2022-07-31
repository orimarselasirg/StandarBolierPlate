import React from 'react';
import {useDispatch} from 'react-redux'
import{actionTest} from '../redux/action'


function Home(props) {
    const dispatch = useDispatch()
    return (
        <div>
            desde el home
            <button onClick={dispatch(actionTest())}>Test</button>
        </div>
    );
}

export default Home