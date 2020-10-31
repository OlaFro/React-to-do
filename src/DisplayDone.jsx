import React, { Component } from 'react'
import "./DisplayDone.css"

export default class DisplayDone extends Component {

    constructor(props){
        super(props);
        this.state={
            
            task: this.props.content,
            isDone: true,
        }
    }

    handleDone = (e) =>{
        e.preventDefault()
        this.setState({
            isDone: !this.state.isDone
        })
        this.props.checkDone(this.props.id, this.state.task)
    }

    handleRemove = ()=>{
        this.props.remove(this.props.id)
    }

    render() {
        return (
            <div>
                <div className="display">
             
             <button onClick={this.handleDone}>undone</button>    
             {this.props.content}
             <div>
             <button onClick={this.handleRemove}>X</button>
             </div>
         </div>
            </div>
        )
    }
}
