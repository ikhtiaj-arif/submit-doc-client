import React, { createContext } from 'react';
import { getAuth }from 'firebase/auth'
import app from '../Firebase/firebase.config';


const auth = getAuth(app)


export const AuthContext = createContext()

const UserContext = ({children}) => {

const info={
    
}

    return (
             <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;