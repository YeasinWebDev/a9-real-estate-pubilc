import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebaseCofig';
export const AuthContext = createContext(null)
function ContextProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    console.log(user);

    const logInByGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const signIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const LogOut = () => {
        return signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch(error => {
                console.error('Error signing out:', error);
            });
}

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        if (currentUser) {
            setUser(currentUser)
            console.log('observing current user');
            setloading(false)
        } else {
            setUser(null)
            console.log('observing current user gone');
        }
    })
    return () => {
        unSubscribe()
    }
}, [])



const authinfo = { user, setUser, createUser, signIn, LogOut, logInByGoogle, loading }
return (
    <AuthContext.Provider value={authinfo}>
        {children}
    </AuthContext.Provider>
)
}

export default ContextProvider