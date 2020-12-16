import React, { Component } from 'react';
import './Tracker.css';
import fire from '../../config/Fire';
import Transaction from './Transaction/Transaction';

class Tracker extends Component {

    state = {
        transactions: [
            // {
            //     id: 1,
            //     type: 'deposit',
            //     name: 'ATM Deposit',
            //     price: 16
            // },
            // {
            //     id: 2,
            //     type: 'expense',
            //     name: 'Coffee',
            //     price: 16
            // },
            // {
            //     id: 3,
            //     type: 'expense',
            //     name: 'Gas',
            //     price: 16
            // }
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
        const BackUpState = this.state.transactions;
        BackUpState.push({
            id: BackUpState.length + 1,
            name: this.state.transactionName,
            type: this.state.transactionType,
            price: this.state.price,
        });
        
        fire.database().ref('Transactions/').push({
            id: BackUpState.length,
            name: this.state.transactionName,
            type: this.state.transactionType,
            price: this.state.price,
        }).then((data) => {
            //success callback
            console.log('success callback');
            this.setState({
                transactions: BackUpState,
                transactionName: '',
                transactionType: '',
                price: ''
            })
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
                                value={this.state.transactionName}
                                placeholder="Transaction Name"
                                type="text"
                                name="transactionName"
                            />
                            <div className="inputGroup">
                                <select name="type"
                                    onChange={this.handleChange('transactionType')}
                                    value={this.state.transactionType}>
                                    <option value="0">Type</option>
                                    <option value="expense">Expense</option>
                                    <option value="deposit">Deposit</option>
                                </select>
                                <input
                                    onChange={this.handleChange('price')}
                                    value={this.state.price}
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