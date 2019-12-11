import React, { Component } from 'react'
import Field from '../Field/Field'

import { connect } from 'react-redux'

class TableRow extends Component {

	onChangeValue = (value, item) => {
		this.props.toggleChangeValue(value, item)
	}
	
	render() {

		const userInfo = {
			name: this.props.name,
			age: this.props.age
		}
		
		return (
			<tr>
				<td>
					{/* { this.props.name } */}
					<Field value={this.props.name} onChangeValue={(value, item) => {
						this.onChangeValue(value, userInfo)
					}} />
				</td>
				<td>
					{/* { this.props.age } */}
					<Field value={this.props.age} onChangeValue={(value, item) => {
						this.onChangeValue(value, userInfo)
					}} />
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
					<button onClick={() => {
						this.props.toggleDelItem(userInfo)
					}}>Delete</button>
				</td>		
			</tr>
		)
	}
}

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onDelete: tableItem => dispatch({ type: 'DELETE', value: tableItem }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow)