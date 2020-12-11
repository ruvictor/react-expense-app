import React, {Component} from 'react';
import fire from '../../config/Fire';
import './Reg.css';

class Register extends Component {
    state = {
        email: '',
        password: '',
        fireErrors: ''
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        
        return (
            <>
                {errorNotification}
                <form>
                    <input type="text"
                        className="regField"
                        placeholder="email"
                        value={this.state.email} 
                        onChange={this.handleChange}
                        name="email"
                        />
                    <input
                        className="regField"
                        placeholder="pasword"
                        value={this.state.password} 
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                    />
                    <input className="submitBtn" type="submit" onClick={this.register} value="REGISTER" />
                </form>
            </>
        );
    }
}
export default Register;