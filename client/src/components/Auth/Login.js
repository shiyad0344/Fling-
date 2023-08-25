import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { login } from '../../actions/auth.js';
import Navbar from '../Navbar.js';

function Login() {
    const dispatch = useDispatch();
    const history = useHistory(); 

    const initialState = { email: '', password: '' };

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(login(formData, history))
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="login">
            <Navbar />
            <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
                <div className="login_form">

                <h3 style={{color: "white", marginLeft: "35%" , marginRight:"35%", fontSize: "2rem"}}>SIGN IN </h3>

                <form style={{height: "350px", width: "300px"}} onSubmit={handleSubmit} className="form ">

                <label for="email" style={{marginLeft: "35%" , marginRight:"35%"}}><b>Email</b> </label><input type="text" name="email" onChange={handleChange} required></input>
                <label for="passsword" style={{marginLeft: "32%" , marginRight:"35%"}}><b>Password</b> </label><input type="password" name="password" onChange={handleChange} required style={{marginLeft: "30px" , marginRight:"20px"}}></input>

                <button type="submit" className ="btn btn-secondary" style={{padding: "6px" ,width: "50%" , marginTop:"30px", textAlign: "center", marginRight:"75px"}}>LOGIN</button>
                <Link to='/register'>
            <div style={{marginTop: "90px", marginLeft: "40px" , marginRight:"20px"}}>
                <p>Don't have an account?</p>
            </div>
            </Link>
            </form>
            </div>
            </div>

        </div>
    )
}

export default Login