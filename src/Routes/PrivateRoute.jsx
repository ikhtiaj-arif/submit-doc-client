import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading) {
        return <Spinner/>
    }
    if(user && user?.uid){
        return children
    }
    else{
        return <Navigate to='/login' state={{from: location}} replace/>
    }
};

export default PrivateRoute;