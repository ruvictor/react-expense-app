import React, { Component } from 'react';
import './Main.css';
import fire from '../config/Fire';
import Login from './Forms/Login';
import Register from './Forms/Register';
import Spinner from '../assets/loader.gif';

export default class Main extends Component {
    state = {
        user: {
            user: null
        },
        loading: true
    }

    componentDidMount(){
        this.authListener();
        setTimeout(function() {
          this.setState({
            loading: false
          });
        }.bind(this), 1000);
      }

    authListener(){
      fire.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({user});
        }else{
          this.setState({user:null});
        }
      });
    }

    logout = () => {
      fire.auth().signOut();
    }

    formSwitcher = (action) => {
        this.setState({formSwitcher: action === 'register' ? true : false});
    }

    render() {
        const form = !this.state.formSwitcher ? <Login /> : <Register />;

        if (this.state.loading){
            return (
              <div className="Spinner">
                <img src={Spinner} alt="Spinner" className="ImgSpinner" />
              </div>);
        }

        return (
            <>
                {!this.state.user ? ( <>{form} <span className="underLine">Not registered? <button onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} 
                        className="linkBtn">Create an account</button>
                    </span></>) : (<button onClick={this.logout}>Logout</button>)}
            </>
        );
    }
}