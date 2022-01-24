import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()
    const navigate = useNavigate()
    const location = useLocation()

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <div>
            <div className="container mx-auto py-20 px-5 md:px-0">
                <div className="login-box w-full md:w-1/2 mx-auto text-center  shadow-xl">
                    <h2 onClick={handleGoogleSignIn} className='text-3xl cursor-pointer p-5 inline-block'>Continue With <FcGoogle className='inline-block text-5xl' /></h2>
                </div>
            </div>
        </div>
    );
};

export default Login;