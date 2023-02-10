import React, {FC, useState}  from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {fetchAuth} from "../store/slices/authSlice";

const Login: FC = () => {

    const dispatch = useAppDispatch();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <form onSubmit={() => {console.log('')}} >
            <p>Enter you email:<br/>
                <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                /></p>
            <p>Choose the password:<br/>
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                /></p>

            <button type="submit" onClick={() => {
                //store.login(email, password);
                //const params = [email, password]
                dispatch(fetchAuth({email, password}));
            }}>
                Login
            </button>
        </form>
    )
}

export default Login;