import React, { Component } from 'react'
import Field from '../Field/Field'

export default class TableRow extends Component {
	render() {
		return (
			<tr>
				<td>
					<Field />
				</td>
				<td>
					<Field />
				</td>
				<td>
					<Field />
				</td>
				<td>
					<Field />
				</td>
				<td>
					<Field />
				</td>
			</tr>
		)
	}
}