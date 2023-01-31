import React, {FC, useState}  from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {fetchRegister} from "../store/slices/authSlice";

const Registration: FC = () => {

    const dispatch = useAppDispatch();

    const [email, setEmail] = useState<string>('');
    const [fullName, setFullName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        /*<form action="#" method="post" enctype="multipart/form-data" >*/
        <form onSubmit={() => {console.log('')}} >
            <p>Enter your name:<br/>
                <input
                    onChange={e => setFullName(e.target.value)}
                    value={fullName}
                    type="text"
                    placeholder="Your name"
                /></p>
            <p>Enter email:<br/>
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
                //store.registration(email, password);
                dispatch(fetchRegister({fullName, email, password}));
            }}>
                Registration
            </button>
            <button type="reset" >
                reset all fields
            </button>
        </form>
    )
}

export default Registration;