import React, { Component } from 'react'
import Field from '../Field/Field'

import { connect } from 'react-redux'

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