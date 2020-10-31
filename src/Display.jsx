import React, { Component } from 'react'
import "./display.css"

export default class Display extends Component {

    constructor(props){
        super(props);
        this.state={
            isEditing: false,
            task: this.props.content,
            isDone: false,
        }
    }
    handleRemove = ()=>{
        this.props.remove(this.props.id)
    }

    toggleForm=()=>{
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleUpdate=(e)=>{
        e.preventDefault();
        this.props.updateTask(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        })
   
        }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDone = (e) =>{
        e.preventDefault()
        this.setState({
            isDone: !this.state.isDone
        })
        this.props.checkDone(this.props.id, this.state.task)
    }

    render() {
        
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    
                    <form onSubmit={this.handleUpdate} >
                        <input className="update" type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = <div className="display">
             
            <button onClick={this.handleDone}>done</button>    
            {this.props.content}
            <div>
            <button onClick={this.toggleForm}>edit</button>
            <button onClick={this.handleRemove}>X</button>
            </div>
        </div>
        
        }
        return (<div>
        
        {result}   
        </div>)
        
    }
}
