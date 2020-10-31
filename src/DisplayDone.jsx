import React, { Component } from 'react'
import "./DisplayDone.css"

export default class DisplayDone extends Component {
    render() {
        return (
            <div>
                <div className="display">
             
             <button onClick={this.handleDone}>done</button>    
             {this.props.content}
             <div>
             <button onClick={this.toggleForm}>edit</button>
             <button onClick={this.handleRemove}>X</button>
             </div>
         </div>
            </div>
        )
    }
}
