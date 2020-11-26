import React, { Component } from 'react';
import Login from './Forms/Login';
import Register from './Forms/Register';

export default class Main extends Component {
    state = {
        user: {
            username: '',
            password: '',
            isOnline: false,
            formSwitcher: false
        }
    }

    formSwitcher = (action) => {
        this.setState({formSwitcher: action === 'register' ? true : false});
    }

    render() {
        const form = !this.state.formSwitcher ? <Login /> : <Register />;
        return (
            <>
                {form}
                <span className="underLine">Not registered? <button onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} className="linkBtn">Create an account</button></span>
            </>
        );
    }
}