import { useState } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

function Auth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // login com email e senha
    const signIn =  async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        };
    };

    // login com google
    const signInWithGoogle =  async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        };
    };

    // logout
    const logout =  async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        };
    };

    return (
        <div>
            <input placeholder="email..." onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="password..." onChange={(e) => setPassword(e.target.value)} type='password'/>
            <button onClick={signIn}>Sign In</button>

            <button onClick={signInWithGoogle}>Sign In With Goole</button>

            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Auth;