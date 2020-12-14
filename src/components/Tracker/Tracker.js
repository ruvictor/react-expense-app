import React, { Component } from 'react';
import './Tracker.css';
import fire from '../../config/Fire';
import Transaction from './Transaction/Transaction';

class Tracker extends Component {

    state = {
        transactions: [
            {
                id: 1,
                type: 'deposit',
                name: 'ATM Deposit',
                price: 16
            },
            {
                id: 2,
                type: 'expense',
                name: 'Coffee',
                price: 16
            },
            {
                id: 3,
                type: 'expense',
                name: 'Gas',
                price: 16
            }
        ],
        money: 1000,

        transactionName: '',
        transactionType: '',
        price: ''
    }

    // logout function
    logout = () => {
        fire.auth().signOut();
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value !=="0" ? e.target.value : ""
        });
    }

    // add transaction
    addNewTransaction = () => {
        console.log('dss');
        const BackUpState = this.state.transactions;
        // BackUpState.push({id: BackUpState.length + 1, content: note});
        fire.database().ref('Notes/').push({
            // id: this.state.transactions.length + 1,
            note: BackUpState
        }).then((data)=>{
            //success callback
            // this.setState({
            //     notes: BackUpState
            // })
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }

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
                    <div className="newTransaction">
                        <form>
                            <input
                                onChange={this.handleChange('transactionName')}
                                placeholder="Transaction Name"
                                type="text"
                                name="transactionName"
                            />
                            <div className="inputGroup">
                                <select name="type"
                                    onChange={this.handleChange('transactionType')}>
                                    <option value="0">Type</option>
                                    <option value="expense">Expense</option>
                                    <option value="deposit">Deposit</option>
                                </select>
                                <input
                                    onChange={this.handleChange('price')}
                                    placeholder="Price"
                                    type="text"
                                    name="price"
                                />
                            </div>
                        </form>
                        <button onClick={() => this.addNewTransaction()} className="addTransaction">+ Add Transaction</button>
                    </div>
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