import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/Header";
import './RegisterPage.scss';

import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

function RegisterPage() {
    const history = useHistory();
    const firebase = useFirebaseApp();
    // const user = useUser();

    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        emailVerified: false,
        phoneNumber: '',
        password: '',
        photoURL: 'http://www.example.com/12345678/photo.png',
        disabled: false,
    });

    const [errorMsg, setErrorMsg] = useState(null);

    const handleChange = (e, element) => {
        setForm({...form, [element]: e.target.value});
    };

    const handleConfirm = (event) => {
        console.log(event.target.value);
        if(event.target.value === form.password) {
            setErrorMsg(null);
        } else {
            setErrorMsg('password not match');
        }
    };

    const handleClick = async () => {
        console.log('click: ', form);

        //create new user on firebase auth
        await firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
        .then((response) => {
            setErrorMsg(null);
            history.push("/login");
           })
        .catch(error => {
            setErrorMsg(error.message);
        });

        // await firebase.auth().createUser({
        //     email: form.email,
        //     emailVerified: form.emailVerified,
        //     phoneNumber: form.phoneNumber,
        //     password: form.password,
        //     displayName: `${form.firstname} ${form.lastname}`,
        //     photoURL: form.photoURL,
        //     disabled: false
        // })
        // .then((userRecord) => {
        //     // See the UserRecord reference doc for the contents of userRecord.
        //     console.log("Successfully created new user:", userRecord);
        // })
        // .catch((error) => {
        //     console.log("Error creating new user:", error);
        // });
    };

    return (
        <div className="register">
            <Header />
            <h1>Register now!</h1>
            <div className="register__Form">
                <div>
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" name="firstname" onChange={e => handleChange(e, 'firstname')} />
                </div>
                <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" name="lastname" onChange={e => handleChange(e, 'lastname')} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={e => handleChange(e, 'email')} />
                </div>
                <div>
                    <label htmlFor="phoneNumber">PhoneNumber</label>
                    <input type="text" name="phoneNumber" onChange={e => handleChange(e, 'phoneNumber')} />
                </div>
                <div>
                    <label htmlFor="password">Enter Password</label>
                    <input type="password" name="Password" onChange={e => handleChange(e, 'password')}/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={handleConfirm}/>
                </div>
                <button className="register__button1" onClick={handleClick} disabled={errorMsg}>Register</button>
            </div>
            {errorMsg && <div>{errorMsg}</div>}
        </div>
    )
}

export default RegisterPage;

