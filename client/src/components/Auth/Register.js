import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './register.css';
import FileBase from 'react-file-base64';

import { signup } from '../../actions/auth.js';

function Register() {
    const dispatch = useDispatch();
    const history = useHistory();

    const initialState = { name: '', email: '', password: '', birthday: '', gender: '', img: '', preference: '', confirmPassword: '', bio: ''};

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();

        console.log(formData);
        dispatch(signup(formData, history));
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    var loadFile = function (event) {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    return (
        <div className="reg" >
            <div className="reg_header">
                <img className="logo" src="https://images-ext-2.discordapp.net/external/uBTgW5IvHFskkuxkjChJAp3_5XYa8jhnlq_g4VvvZA4/https/i.postimg.cc/bJGynZpg/Pics-Art-10-17-10-24-02.png?width=150&height=83" alt="/"></img>
            </div>

            <div className="reg_heading">
                <h3>CREATE ACCOUNT</h3>
            </div>
            <div className="content">


                <div className="form">
                    <h2>Profile Details</h2>
                    <form onSubmit={handleSubmit}>

                        
                    <div class="row">
                            <div class="col-25">
                                <label for="profile">Upload Profile Image</label>
                            </div>
                            <div class="col-75">
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, img: base64 })} />
                            
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">

                                <label for="name">Name </label>

                            </div>

                            <div className="col-75">
                                <input type="text" name="name" onChange={handleChange} required></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="email">Email </label>
                            </div>

                            <div className="col-75">
                                <input type="text" name="email" onChange={handleChange} required></input>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label for="birthday">Birthday </label>

                            </div>

                            <div className="col-75" >
                                <input style={{marginTop:"13px"}} type="date" id="birthday" name="birthday" onChange={handleChange}></input>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-25">

                                <label for="gender">Gender</label>
                            </div>
                            <div className="col-75">
                                <input type="radio" id="Male" name="gender" value="Male" onChange={handleChange}></input>
                                <label for="gender">Male</label>
                               <input type="radio" id="Female" name="gender" value="Female" onChange={handleChange}></input>
                                <label style={{ marginLeft: "15px" }} for="gender">Female</label>
                                <input type="radio" id="Other" name="gender" value="Non-Binary" onChange={handleChange}></input>
                                <label style={{ marginLeft: "15px" }} for="gender">Non-Binary</label>
                                


                            </div>
                        </div>



                        <div className="row">
                            <div className="col-25">

                                <label for="preference">Show Me</label>
                            </div>
                            <div className="col-75">
                                <input type="radio" id="Men" name="preference" value="Men" onChange={handleChange}></input>
                                <label for="preference">Men</label>
                                <input type="radio" id="Women" name="preference" value="Women" onChange={handleChange}></input>
                                <label style={{ marginLeft: "15px" }} for="preference">Women</label>
                                <input type="radio" id="Other" name="preference" value="Both" onChange={handleChange}></input>
                                <label style={{ marginLeft: "15px" }} for="preference">Both</label>
                                

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label for="passsword">Password: </label>
                            </div>
                            <div className="col-75">
                                <input type="password" name="password" onChange={handleChange} required></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label for="cpasssword">Confirm Password: </label>
                            </div>
                            
                            <div className="col-75">
                                <input style={{marginTop:"10px"}} type="password" name="confirmPassword" onChange={handleChange} required></input>
                            </div>
                        </div>
                    
                        <div class="row">
                            <div class="col-25">
                                <label for="bio">Bio</label>
                            </div>
                            <div class="col-75">
                                <textarea id="bio" name="bio" placeholder="Tell us something about yourself..." style={{height: "100px"}} onChange={handleChange}></textarea>
                            </div>
                        </div>
                        
                       

                        <button style={{marginTop:"10px"}} type="submit" className="signup">SIGNUP</button>

                    </form>




                    <div className="ahaa">
                        <Link to='/login' >
                            <p>Already have an account?</p>
                        </Link>
                    </div>
                </div>

                





            </div>
        </div>
    )
}

export default Register
