import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../../firebase.init';
import useFirebase from '../../../hooks/useFirebase';

const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>This is HOme</h2>
            <p>Current user is: {user ? user.displayName : 'no body'}</p>
        </div>
    );
};

export default Home;