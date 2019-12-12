import React, { Component } from 'react'
import Input from './Input'
import './Field.sass'

export default class Field extends Component {

    contentRef = React.createRef()

    state = {
        typing: false,
        value: this.props.value || 'Type any text here',
        fields: {
            type: false,
            isActive: false
        }
    }
    
    onTyping() {
        this.setState({ typing: true });

        this.state.typing && this.setState({ value: this.contentRef.current.textContent })
    }

    onCloseTyping(event) {
        if (event.key === 'Enter') {
            this.setState({ 
                typing: false,
                value: this.props.value
            })

            return this.props.value
        }
    }

    onChangeValue = value => {
        // this.setState({ value: value })
        this.props.onChangeValue(value)
    }

    componentDidMount() {
        switch (this.props.keyName) {
            case 'type':
                console.log('This is outlet type element')
                this.setState({ 
                    fields: {
                        type:  true 
                    }
                })
                break
            case 'isActive':
                console.log('This is outlet active element')
                this.setState({ 
                    fields: {
                        isActive: true 
                    }
                })
                break
            default:
                break
        }
    }
    
    
    render() {

        // console.log('From Field:', this.props.keyName)
        
        return(
            <div className="text-field">
                
                {
                    !this.state.typing && 
                        <div ref={this.contentRef} onClick={() => this.onTyping()} className="text-field__content"> {this.props.value} </div>
                }
                
                {
                    this.state.typing && 
                        (<div>
                            <Input 
                                onToggle={event => {this.onCloseTyping(event)}} 
                                value={this.state.value}
                                onChange={this.onChangeValue} />
                            <div className="text-field__typing-info">Type "Enter" to save</div>
                        </div>
                        )
                }

                {
                    this.state.fields.type && 
                        <select name="" id="" defaultValue="default">
                            {/* { true && <option disabled selected hidden value="default"></option> } */}
                            <option value="option_1">Сеть</option>
                            <option value="option_2">ИП</option>
                        </select>
                }

                {
                    this.state.fields.isActive && 
                        <input checked={false} type="checkbox"/>
                }
            </div>
        )
    }
}