import React, { Component } from 'react'
import './Field.sass'

export default class Field extends Component {

    content = React.createRef()
    input = React.createRef()
    
    render() {
        return(
            <div className="text-field">
                <div ref={this.content} className="text-field__content">Type any text here</div>
                <input ref={this.input} type="text" className="text-field__input"/>
            </div>
        )
    }
}