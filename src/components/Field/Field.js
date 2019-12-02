import React, { Component } from 'react'

export default class Field extends Component {
    render() {
        return(
            <div className="text-field">
                <div className="text-field__content">Type any text here</div>
                <input type="text" className="text-field__input"/>
            </div>
        )
    }
}