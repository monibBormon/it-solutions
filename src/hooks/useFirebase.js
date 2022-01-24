import firebaseInit from "../firebase/firebase.init";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";

// firebase init 
firebaseInit()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")

    // get auth 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    // google sign in
    const signInWithGoogle = (location, navigate) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                setError("")
                const destination = location?.state?.from || "/";
                navigate(destination);
            }).catch(error => setError(error.message))
    }

    // onAuth State change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // dispatch(authUser(user))
            } else {
                setUser({});
                // dispatch(authUser(user))
            }
        });
        return () => unSubscribe;
    }, [auth]);

    // log out
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => { })
    };



    return {
        user,
        error,
        signInWithGoogle,
        logOut
    }
}
export default useFirebase;