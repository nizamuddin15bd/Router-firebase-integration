import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../../firebase.init';
import useFirebase from '../../../hooks/useFirebase';

const auth = getAuth(app);
const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>This is Products components</h2>
            <p>This is Products name: {user ? user.displayName : 'Nizam Products nai'}</p>
        </div>
    );
};

export default Products;