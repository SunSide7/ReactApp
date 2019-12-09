import React, { Component } from 'react'
// import Field from '../Field/Field'

import { connect } from 'react-redux'

class TableRow extends Component {
	
	render() {

		const userInfo = {
			name: this.props.name,
			age: this.props.age
		}

		console.log('render TableRow:', userInfo)
		
		// console.log(JSON.stringify(userInfo) === JSON.stringify(this.props.userInfo[0]))

		
		
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
				<td>
					{ this.props.number }
				</td>
				<td>
					<button onClick={this.props.onDelete.bind(this, userInfo)}>Delete</button>
				</td>
				<td>
					<button onClick={this.props.onAdd}>Add</button>
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
		onAdd: () => dispatch({ type: 'ADD' })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow)