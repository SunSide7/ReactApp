import React, { Component } from 'react'
import './Field.sass'

export default class Field extends Component {

    

    contentRef = React.createRef()
    inputRef = React.createRef()

    state = {
        typing: true,
        classNames: {
            contentClassNames: ['text-field__content', 'active'],
            inputClassNames: ['text-field__input', 'hide']
        }
    }

    componentDidUpdate() {
        if (this.state.typing) {
            console.log('ComponentDidUpdate')
            
        }
    }

    
    shouldComponentUpdate() {
        if (this.state.typing) {
            console.log('shouldComponentUpdate')
            
        }

        return true
    }

    
    
    onTyping() {
        
        this.inputRef.current.focus()
        this.setState({ typing: !this.state.typing });
        
        if (this.state.typing) {
            
            this.setState({ classNames: {
                contentClassNames: ['text-field__content', 'hide'],
                inputClassNames: ['text-field__input', 'active']
            } })
            
            // console.log()
            this.inputRef.current.value = 'new value'
            console.log(this.inputRef.current)
            console.log(this.state.typing)
            
        } else {

            this.setState({ classNames: {
                contentClassNames: ['text-field__content', 'active'],
                inputClassNames: ['text-field__input', 'hide']
            } })

        }
        
    }

    onCloseTyping(event) {
        if (event.key === 'Enter') {
            this.onTyping()
        }
    }
    
    render() {
        return(
            <div className="text-field">
                <div ref={this.contentRef} onClick={() => this.onTyping()} className={this.state.classNames.contentClassNames.join(' ')}>Type any text here</div>
                <input ref={this.inputRef} onKeyPress={event => this.onCloseTyping(event)} type="text" className={this.state.classNames.inputClassNames.join(' ')}/>
            </div>
        )
    }
}