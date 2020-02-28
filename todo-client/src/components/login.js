import React,{ useState, useEffect } from 'react';


export const Login=()=>
{
    const [ email, setEmail ]=useState('');
    const [ password, setPassword ]=useState('');


    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}