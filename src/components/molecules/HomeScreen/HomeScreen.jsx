import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update, reset } from '../../../redux/feature/updateUser'

const HomeScreen = () => {
    const userName = useSelector((state) => state.user.userName)
    const dispatch = useDispatch()

    const changeRoute = () => {
        window.location.pathname = '/contact'
    }

    const changeUser = () => {
        dispatch(update('Amar'))
    }

    const resetUser = () => {
        dispatch(reset())
    }
    
    return (
        <>
            <>I am from HomeScreen and user is {userName}</><br></br><br></br>
            <button onClick={changeUser}>Change User</button><br></br><br></br>
            <button onClick={resetUser}>Reset User</button><br></br><br></br>
            <button onClick={changeRoute}>Change Route</button>
        </>
    );
}

export default HomeScreen;