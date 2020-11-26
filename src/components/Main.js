import React, { Component } from 'react';
import Login from './Forms/Login';
import Register from './Forms/Register';

export default class Main extends Component {
    state = {
        user: {
            username: '',
            password: '',
            isOnline: false
        }
    }

    formSwitcher = (action) => {
        if(action === 'register')
            return <Register />;
        else
            return <Login />;
    }

    render() {
        const content = !this.state.user.isOnline ? <Login /> : 'tracking';
        return content;
    }
}