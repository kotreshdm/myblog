import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    setSignedIn,
    setUserData,
} from '../features/userSlice';

import "../styling/home.css";

const HomePage = () => {
    const dispatch = useDispatch();
    const isSignedIn = useSelector(selectSignedIn);
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };


    return (
        <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
            {!isSignedIn ?
                (<div className="login__message">
                    <h2>📗</h2>
                    <h1>A Readers favourite place!</h1>
                    <p>We provide high quality online resource for reading blogs. Just sign up and start reading some quality blogs.</p>
                    <GoogleLogin
                        clientId="114624845081-1o1mkcmg68d3g6v4qjtu47825p65hn9u.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="login__button"
                            >
                                Login With Google
                            </button>
                        )}
                        onSuccess={login}
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                    />
                </div>) : (""
                )}

        </div>
    )
}

export default HomePage
