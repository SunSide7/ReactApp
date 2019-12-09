import React, { Component } from 'react'
import Field from '../Field/Field'

export default class TableRow extends Component {
	
	render() {
		
		return (
			<tr>
				<td>
					{ this.props.name }
					{/* <Field value={this.props.name} /> */}
				</td>
				<td>
					{ this.props.age }
					{/* <Field value={this.props.age} /> */}
				</td>
				<td>
					{/* <Field /> */}
				</td>
				<td>
					{/* <Field /> */}
				</td>
				<td>
					{/* <Field /> */}
				</td>
			</tr>
		)
	}
}