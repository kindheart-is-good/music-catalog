import React, {FC, useState}  from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {fetchAuth, fetchRegister} from "../store/slices/authSlice";

const Registration: FC = () => {

    const dispatch = useAppDispatch();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        /*<form action="#" method="post" enctype="multipart/form-data" >*/
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

            <button onClick={() => {
                //store.registration(email, password);
                dispatch(fetchRegister({email, password}));
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