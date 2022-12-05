import React, { useContext, useState } from 'react';

import { AuthContext } from '../Context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import { GetRole } from '../API/GetRole';
import Spinner from '../Components/Spinner';

const AdminRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [roleLoading, setRoleLoading] = useState(true)
    const location = useLocation()
   
    
    GetRole(user?.email)
    .then(data => {
       setRole(data);
       setRoleLoading(false)
       console.log(role);
    }).catch((e)=>{
        console.log(e)
        setRoleLoading(false)
    })
    // 
    if(loading || roleLoading) {
        return <Spinner/>
    }
    if(user && role === 'admin'){
        return children
    }
    else{ return  <Navigate to="/login" state={{from: location}} replace></Navigate>}
   
};

export default AdminRoute;