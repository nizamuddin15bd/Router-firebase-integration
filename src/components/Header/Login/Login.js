import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const auth = getAuth(app);
const Login = () => {
    const [singInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h3>Please  Login</h3>
            <div style={{ margin: "20px" }}>
                <button onClick={() => singInWithGoogle()}> Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type='password' placeholder='Your password' />
                <br />
                <input type='submit' value='Login' />
            </form>
        </div>
    );
};

export default Login;