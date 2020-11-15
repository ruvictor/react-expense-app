import React, { Component } from 'react';
import Login from './Forms/Login';

export default class Main extends Component {
    state = {
        user: {
            username: '',
            password: '',
            isOnline: false
        }
    }
    render() {
        const content = !this.state.user.isOnline ? <Login /> : 'tracking';
        return content;
    }
}