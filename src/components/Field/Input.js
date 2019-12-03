import React, { Component } from 'react'
import './Field.sass'

export default class Input extends Component {

    inputRef = React.createRef()

    componentDidMount() {
        this.inputRef.current.focus()

        this.inputRef.current.value = this.props.value
    }

    render() {
        return(
            <input 
                ref={this.inputRef} 
                onKeyPress={event => {this.props.onToggle(event)}}
                onChange={event => {this.props.onChange(this.inputRef.current.value)}}
                type="text" 
                className="text-field_input"
            />
        )
    }
}