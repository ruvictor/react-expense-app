import React, { Component } from 'react';
import './Tracker.css';
import fire from '../../config/Fire';

class Tracker extends Component {

    state = {
        transactions: {
            1: {
                type: 'deposit',
                name: 'Coffee',
                price: 16
            },
            2: {
                type: 'expense',
                name: 'Coffee',
                price: 11
            },
            3: {
                type: 'deposit',
                name: 'Coffee',
                price: 10
            }
        }
    }

    // logout function
    logout = () => {
        fire.auth().signOut();
    }

    render(){
        var currentUser = fire.auth().currentUser;
        return(
            <div className="trackerBlock">
                <div className="welcome">
                    <span>Hi, {currentUser.displayName}!</span>
                    <button onClick={this.logout}>Logout</button>
                </div>
                <button className="addTransaction">+ Add Transaction</button>
                
                <div className="latestTransactions">
                    <p>Latest Transactions</p>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Tracker;