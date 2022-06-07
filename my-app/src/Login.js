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
        if (state.value.toLowerCase() == "0x11bb26" ||
            state.value.toLowerCase() == "11bb26") {
            nav("/instructions")
        } else {
            alert("incorrect password :(")
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    <input className="textbox" type="text" value={state.value} onChange={onChange} />
                    <input className="button" type="submit" value="Submit" />
                </form>
            </header>
        </div>
    )

}