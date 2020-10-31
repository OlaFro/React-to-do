import React, { Component } from 'react'
import AddTask from "./AddTask"
import Display from "./Display"
import DisplayDone from "./DisplayDone"
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

    update = (id, updatedContent)=>{
        const updatedTasks = this.state.tasks.map(elem =>{
            if (elem.id === id){
                return {...elem, task: updatedContent}
            }
            return elem;
        })
        this.setState({tasks: updatedTasks})
    }

    toggleDone = (id) => {
        const doneTasks = this.state.tasks.map(elem => {
            console.log(elem.isDone);
            if (elem.id === id) {
                return {...elem, isDone: !elem.isDone}
            }
            return elem
        })
        this.setState({tasks: doneTasks})
    }

    remove = (id) =>{
        this.setState({
            tasks: this.state.tasks.filter(elem =>{
                return elem.id !== id
            })
        })
    }

    render() {

        const displayTasks = this.state.tasks.map(elem=> {
            if (!elem.isDone) {
        return <Display 
        key={elem.id} 
        id={elem.id} 
        content={elem.task} 
        remove={this.remove} 
        updateTask={this.update}
        checkDone={this.toggleDone}
        />
        }});

        const displayDoneTasks = this.state.tasks.map(elem=>{
            if (elem.isDone) {
            return <DisplayDone
            key={elem.id} 
            id={elem.id} 
            content={elem.task} 
            remove={this.remove} 
            updateTask={this.update}
            checkDone={this.toggleDone}
            />
        }})
        


        return (
            <div className="Main">
                <div className="header">
                    <h1>To-do list</h1>
                </div>
                <AddTask get={this.getTask} />
                <h3>Task to do</h3>
                {displayTasks}
                <h3>Task done</h3>
                {displayDoneTasks}
            </div>
        )
    }
}
