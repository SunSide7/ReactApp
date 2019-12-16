import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Input from './Input'
import './Field.sass'

export default class Field extends Component {

    contentRef = React.createRef()

    state = {
        typing: false,
        value: this.props.value || '',
        fields: {
            type: false,
            isActive: false
        }
    }

    // Component Lifecycle Methods
    componentWillUnmount() {
    }
    
    shouldComponentUpdate() {
        document.removeEventListener('click', this.handleClickOutside, false)
        
        return true
    }
    
    componentDidUpdate() {
        document.addEventListener('click', this.handleClickOutside, false);
    }


    
    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);
    
        if ((!domNode || !domNode.contains(event.target))) {
            this.setState({
                typing : false
            });
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
        this.props.onChangeValue(value)
        
    }

    componentDidMount() {
        switch (this.props.keyName) {
            case 'type':
                this.setState({ 
                    fields: {
                        type:  true 
                    }
                })
                break
            case 'isActive':
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
            </div>
        )
    }
}