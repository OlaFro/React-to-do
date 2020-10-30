import React, { Component } from 'react'
import "./addTask.css"
const { v4: uuidv4 } = require('uuid')

export default class AddTask extends Component {
    constructor(props){
        super(props);
        this.state={
            task: ""
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.get({...this.state, id: uuidv4()})
        this.setState({task: ""})
    }

    render() {
        return (
            <div className="addTask">
                <label htmlFor="task">Add your task here:</label>
                <input onChange={this.handleChange} type="text" name="task" value={this.state.task}></input>
                <button type="button" onClick={this.handleSubmit}>+</button>
            </div>
        )
    }
}
