import React, { Component } from 'react';
import './Tracker.css';
import fire from '../../config/Fire';
import Transaction from './Transaction/Transaction';

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
                name: 'Gas',
                price: 11
            },
            3: {
                type: 'deposit',
                name: 'Grocery',
                price: 10
            }
        },
        money: 1000
    }

    // logout function
    logout = () => {
        fire.auth().signOut();
    }

    // // add transaction
    // addNewTransaction = () => {
    //     console.log('dss');
    //     const BackUpState = this.state.transactions;
    //     // BackUpState.push({id: BackUpState.length + 1, content: note});
    //     fire.database().ref('Notes/').push({
    //         // id: this.state.transactions.length + 1,
    //         note: BackUpState
    //     }).then((data)=>{
    //         //success callback
    //         // this.setState({
    //         //     notes: BackUpState
    //         // })
    //     }).catch((error)=>{
    //         //error callback
    //         console.log('error ' , error)
    //     })
    // }

    render(){
        var currentUser = fire.auth().currentUser;
        return(
            <div className="trackerBlock">
                <div className="welcome">
                    <span>Hi, {currentUser.displayName}!</span>
                    <button className="exit" onClick={this.logout}>Exit</button>
                </div>
                <div className="totalMoney">${this.state.money}</div>

                <div className="newTransactionBlock">
                    <div className=""></div>
                    <button className="addTransaction">+ Add Transaction</button>
                </div>
                
                <div className="latestTransactions">
                    <p>Latest Transactions</p>
                    <ul>
                    {
                        Object.keys(this.state.transactions).map((id) => (
                            <Transaction key={id}
                                type={this.state.transactions[id].type}
                                name={this.state.transactions[id].name}
                                price={this.state.transactions[id].price}
                            />
                        ))
                    }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tracker;