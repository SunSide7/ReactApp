import React, { Component } from 'react'
import Field from '../Field/Field'

import { connect } from 'react-redux'

class TableRow extends Component {

	selectRef = React.createRef()
	inputRef = React.createRef()

	onChangeValue = (value, item, keyName) => {
		
		
		// console.log('From TableRow:', this.props.outletInfo)
		
		let objKey = null;
		
		// for (let key in item) {
			// 	item[key] === startValue && (objKey = key)
			// }
			
			// this.props.toggleChangeValue(value, item, objKey)
			
			this.props.toggleChangeValue(value, item, keyName)			
			
		// }
		
		
	}





	componentDidMount() {

		// console.log("From TableRow:", this.selectRef.current.options[0].value, this.inputRef.current.checked)
		// console.log("From TableRow:", this.selectRef.current)
		// console.log("From TableRow:", this.selectRef.current.options[this.selectRef.current.selectedIndex].value)

	}

	componentDidUpdate() {

		console.log('From TableRow componentDidUpdate:', this.props.outletInfo)
		
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
					<select 
						ref={this.selectRef} 
						defaultValue={this.props.type}
						onChange={event => this.onChangeValue(event.target.value, outletInfo, 'type')}
					>

						{ true && <option disabled hidden value="default"></option> }
						<option value="option_1">Сеть</option>
						<option value="option_2">ИП</option>

					</select>
				</td>

				<td>
					{/* { this.props.age } */}
					<input 	
						ref={this.inputRef}
						checked={this.props.isActive}
						type="checkbox"
						onChange={event => this.onChangeValue(!outletInfo.isActive, outletInfo, 'isActive')}
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