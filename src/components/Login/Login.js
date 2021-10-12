import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className="container">
            <div className="left">
                <div className="welcome-text">
                    <h1 style={{ fontSize: "40px", fontWeight: 300, }}>Welcome To</h1>
                    <h1 style={{ fontSize: "88px", fontWeight: 700, margin: "12px 0" }}>Login Page</h1>
                    <p style={{ fontSize: "18px", fontWeight: 400, margin: "24px 0" }}>Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. Vesti ulum nec the dumm</p>
                </div>
            </div>
            <div className="right">
                <form >
                    <div className="form-group">
                        <div class="form-group">
                            <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                            <i class="input-icon uil uil-at"></i>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;

