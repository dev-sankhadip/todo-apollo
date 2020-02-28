import React,{ useState } from 'react';
import { gql } from 'apollo-boost';

import { client } from '../graphql/client'


export const Login=()=>
{
    const [ email, setEmail ]=useState('');
    const [ password, setPassword ]=useState('');

    const submit=(e)=>
    {
        e.preventDefault();
        client.mutate({ mutation:gql` 
            mutation{
                loginUser(email:${email}, password:${password}){
                    code
                }
            }
        ` })
        .then((res)=>
        {
            console.log(res)
        })
        .catch(err=>console.error(err))
    }

    const setFormValue=(e, setter)=>
    {
        setter(e.target.value);
    }

    return(
        <div className="container">
            <form onSubmit={ submit }>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={(e)=>{ setFormValue(e, setEmail) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" onChange={(e)=>{ setFormValue(e, setPassword) }} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}