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
                <h2 style ={{marginBottom: "100px", color: "#101d29", fontSize: '44px', textAlign: 'center'}}>Please Login</h2>
                <div className="form-group">
                    <input type="email" name="logemail" placeholder="Email address"/>
                    <i className="far fa-envelope"></i>
                </div>
                
                <div className="form-group">
                    <input type="password" name="password" placeholder ="Password"/>
                    <i class="fas fa-lock"></i>
                </div>
                <button className="btn" type="submit" value="Login" >Login</button>
              </form>
                <div className="icon-group">

                </div>
            </div>
        </div>
    );
};

export default Login;

