import React, { Component } from 'react';
import fire from '../../config/Fire';

class Tracker extends Component {

    // logout function
    logout = () => {
        fire.auth().signOut();
    }

    render(){
        return(
            <button onClick={this.logout}>Logout</button>
        );
    }
}

export default Tracker;