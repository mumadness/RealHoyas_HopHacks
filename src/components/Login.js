import React from 'react'

export default function Login() {
    return (
        <div className="login-form-wrapper">
            <h2>Login</h2>

            <form action="/login" method="POST" id="login-form">
                <div>
                    <input type="text" name="email" id="email" placeholder="email"/>
                </div>
                <div>
                    <input type="text" name="password" id="password" placeholder="password"/>
                </div>

                <button className="login-btn">Login</button>

            </form>
            
        </div>
    )
}
