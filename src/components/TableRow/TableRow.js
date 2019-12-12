import React, { Component } from 'react'
import Field from '../Field/Field'

import { connect } from 'react-redux'

class TableRow extends Component {

	onChangeValue = (value, item, startValue) => {
		
		console.log('From TableRow:', item, value)

		let objKey = null;
		
		// for (let key in item) {
		// 	item[key] === startValue && (objKey = key)
		// }

		// this.props.toggleChangeValue(value, item, objKey)

		this.props.toggleChangeValue(value, item, startValue)
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
					<Field 
						value={this.props.name} 
						onChangeValue={(value, item) => {
							this.onChangeValue(value, userInfo, 'name')
						}}
					/>
				</td>
				<td>
					{/* { this.props.age } */}
					<Field 
						value={this.props.age} 
						onChangeValue={(value, item) => {
							this.onChangeValue(value, userInfo, 'age')
						}}
					/>
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