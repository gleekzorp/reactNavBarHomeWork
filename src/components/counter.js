import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
        this.countUp = this.countUp.bind(this)
        this.countDown = this.countDown.bind(this)
    }

    countUp() {
        this.setState({
            count: this.state.count + 1
        })
    }

    countDown() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <p>Your number is: {this.state.count}</p>
                <button onClick={this.countUp}>Click to Add</button>
                <button onClick={this.countDown}>Click to Minus</button>
            </div>
        )
    }
}

export default Counter