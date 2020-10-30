import React, { Component } from 'react'
import AddTask from "./AddTask"
import Display from "./Display"
import "./main.css"


export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks: []
        }
    }

    getTask = (task) =>{
        this.setState({
           tasks: [...this.state.tasks, task]
        })
    }

    remove = (id) =>{
        this.setState({
            tasks: this.state.tasks.filter(elem =>{
                return elem.id !== id
            })
        })
    }

    update = (id, updatedContent)=>{
        const updatedTasks = this.state.tasks.map(elem =>{
            if (elem.id === id){
                return {...elem, task: updatedContent}
            }
            return elem;
        })
        this.setState({tasks: updatedTasks})
    }

    render() {

        const displayTasks = this.state.tasks.map(elem=> {
        return <Display key={elem.id} id={elem.id} content={elem.task} remove={this.remove} updateTask={this.update}/>})


        return (
            <div className="Main">
                <div className="header">
                    <h1>To-do list</h1>
                </div>
                <AddTask get={this.getTask} />
                {displayTasks}
            </div>
        )
    }
}
