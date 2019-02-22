import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onButtonClick(option) {
        option === "Add" ? this.setState({count: this.state.count + 1}) : this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div className="counterWrapper">
                <p>Your number is: {this.state.count}</p>
                <button onClick={() => this.onButtonClick("Add")}>Click to Add</button>
                <button onClick={() => this.onButtonClick("Minus")}>Click to Minus</button>
            </div>
        )
    }
}

export default Counter