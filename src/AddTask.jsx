import React, { Component } from 'react'
import "./addTask.css"
const { v4: uuidv4 } = require('uuid')

export default class AddTask extends Component {
    constructor(props){
        super(props);
        this.state={
            task: "",
            isDone: false,
            addTask: false,
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
        this.setState({task: "",
        addTask: !this.state.addTask})
    }

    openTask = ()=>{
        this.setState({
            addTask: !this.state.addTask
        })
    }

    render() {
        let result; 
        console.log(this.state.addTask);
        if (!this.state.addTask){
            result = 
            (<div>
            <button className="openAddTaskButton" onClick={this.openTask} type="button">Add new task</button>    
            </div>)
        }else{
            result = 
            (
                <div className="addTask">
                    <label htmlFor="task">Add your task here:</label>
                    <input className="addTaskInput" onChange={this.handleChange} type="text" name="task" value={this.state.task}></input>
                    <button className="addTaskButton" type="button" onClick={this.handleSubmit}>+</button>
                </div>   
            )
        }
        return result
    }
}
