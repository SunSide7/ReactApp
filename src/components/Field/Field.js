import React, { Component } from 'react'
import Input from './Input'
import './Field.sass'

export default class Field extends Component {

    contentRef = React.createRef()

    state = {
        typing: false,
        value: this.props.value || 'Type any text here'
    }
    
    onTyping() {
        this.setState({ typing: true });

        this.state.typing && this.setState({ value: this.contentRef.current.textContent })
    }

    onCloseTyping(event) {
        if (event.key === 'Enter') {
            // this.onTyping()
            this.setState({ typing: false })
            console.log(this.state.value)

            return this.state.value
        }
    }

    onChangeValue = value => {
        this.setState({ value: value })
    }
    
    render() {
        return(
            <div className="text-field">
                
                {
                    !this.state.typing && 
                        <div ref={this.contentRef} onClick={() => this.onTyping()} className="text-field__content"> {this.state.value} </div>
                }
                
                {
                    this.state.typing && 
                        <Input 
                        onToggle={event => {this.onCloseTyping(event)}} 
                        value={this.state.value}
                        onChange={this.onChangeValue} />
                }
            </div>
        )
    }
}