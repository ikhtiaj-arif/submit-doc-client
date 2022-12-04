import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut }from 'firebase/auth'
import app from '../Firebase/firebase.config';


const auth = getAuth(app)


export const AuthContext = createContext()

const UserContext = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

const info={
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    logInUser,
    logOutUser
}

    return (
             <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;