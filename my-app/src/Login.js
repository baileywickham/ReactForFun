import './App.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



export const Login = (props) => {
    const [state, setState] = useState({ value: "" })
    const nav = useNavigate()
    const onChange = (e) => {
        setState({ value: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (state.value.toLowerCase() == "group" ||
            state.value.toLowerCase() == "groups" ||
            state.value.toLowerCase() == "a group") {
            nav("/instructions")
        } else {
            alert("incorrect password :(")
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Login</h1>
                <p>What is the name of the mathematical object of which the class of cyphers is based on?</p>
                <form onSubmit={onSubmit}>
                    <input className="textbox" type="text" value={state.value} onChange={onChange} />
                    <input className="button" type="submit" value="Submit" />
                </form>
            </header>
        </div>
    )

}