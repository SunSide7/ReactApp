import React, { Component } from 'react'
import Field from '../Field/Field'

import { connect } from 'react-redux'

class TableRow extends Component {

	onChangeValue = (value, item, keyName) => {
		
		console.log('From TableRow:', item, value)

		let objKey = null;
		
		// for (let key in item) {
		// 	item[key] === startValue && (objKey = key)
		// }

		// this.props.toggleChangeValue(value, item, objKey)

		this.props.toggleChangeValue(value, item, keyName)

	}
	
	render() {

		const outletInfo = {
			name: this.props.name,
			address: this.props.address,
			owner: this.props.owner,
			type: this.props.type,
			isActive: this.props.isActive,
		}
		
		return (
			<tr>
				<td>
					{/* { this.props.name } */}
					<Field 
						value={this.props.name}
						keyName={'name'}
						onChangeValue={(value, item) => {
							this.onChangeValue(value, outletInfo, 'name')
						}}
					/>
				</td>
				<td>
					{/* { this.props.age } */}
					<Field 
						value={this.props.address}
						keyName={'address'}
						onChangeValue={(value, item) => {
							this.onChangeValue(value, outletInfo, 'address')
						}}
					/>
				</td>
				
				<td>
					{/* { this.props.age } */}
					<Field 
						value={this.props.owner}
						keyName={'owner'}
						onChangeValue={(value, item) => {
							this.onChangeValue(value, outletInfo, 'owner')
						}}
					/>
				</td>
				<td>
					{/* { this.props.age } */}
					<Field 
						value={this.props.type}
						keyName={'type'}
						onChangeValue={(value, item) => {
							this.onChangeValue(value, outletInfo, 'type')
						}}
					/>
				</td>
				<td>
					{/* { this.props.age } */}
					<Field 
						value={this.props.isActive}
						keyName={'isActive'}
						onChangeValue={(value, item) => {
							this.onChangeValue(value, outletInfo, 'isActive')
						}}
					/>
				</td>

				{/* <td>
					<Field />
				</td>
				<td>
					<Field />
				</td>
				<td>
					<Field />
				</td> */}
				<td>
					<button onClick={() => {
						this.props.toggleDelItem(outletInfo)
					}}>Delete</button>
				</td>		
			</tr>
		)
	}
}

function mapStateToProps(state) {
	return {
		outletInfo: state.outletInfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onDelete: tableItem => dispatch({ type: 'DELETE', value: tableItem }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow)