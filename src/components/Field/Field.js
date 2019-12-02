import React, { Component } from 'react'
import './Field.sass'

export default class Field extends Component {

    classNames = {
        contentClassNames: ['text-field__content', 'active'],
        inputClassNames: ['text-field__input', 'hide']
    }

    content = React.createRef()
    input = React.createRef()
    
    render() {
        return(
            <div className="text-field">
                <div ref={this.content} className={this.classNames.contentClassNames.join(' ')}>Type any text here</div>
                <input ref={this.input} type="text" className={this.classNames.inputClassNames.join(' ')}/>
            </div>
        )
    }
}