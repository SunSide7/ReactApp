import React, { Component } from 'react'
import TableRow from '../TableRow/TableRow'

import { connect } from 'react-redux'

class Table extends Component {

	state = {
		savedUserData: null,
		isSearching: false
	}

	constructor() {
		super()
		this.toggleFindItem = this.toggleFindItem.bind(this)
		this.toggleAddItem = this.toggleAddItem.bind(this)
	}


	
	// Component Lifecycle Methods
	componentDidMount() {
		this.setState({ savedUserData: this.props.userInfo })
	}

	static getDerivedStateFromProps(nextProps, previousState) {

		if (!previousState.isSearching) {
			return {
				savedUserData: nextProps.userInfo
			}
		} else {
			return previousState
		}

	}
	
	

	
	// Toggle Methods
	toggleFindItem(event) {	
		
		if (!this.state.isSearching) {
			this.setState({ 
				savedUserData: this.props.userInfo,
				isSearching: true 
			})
		}
		
		this.props.onSet(this.state.savedUserData)
		this.props.onFind(event.target.value)
		
	}
	
	toggleAddItem() {
		this.setState({ isSearching: false })

		this.props.onAddItem()
		this.setState({ savedUserData: this.props.userInfo })

	}

	toggleDelItem = (itemToDel) => {
		this.setState({ isSearching: false })
		
		this.props.onDelete(itemToDel)
		this.setState({ savedUserData: this.props.userInfo })

	}

	toggleChangeValue = (value, item, key) => {
		this.props.onChange(value, item, key)
	}




	render() {
		const { userInfo } = this.props

		// console.log('render userInfo:', userInfo)
		
		return (
			<div>
				<table>
					<tbody>
						{
							userInfo.map((user, index) => {
								return (
									<TableRow
										key={index}
										name={user.name}
										age={user.age}
										toggleDelItem={this.toggleDelItem}
										toggleChangeValue={this.toggleChangeValue}
									/>
								)
							}) 
						}
					</tbody>
				</table>

				<input type="text" onChange={event => this.toggleFindItem(event)}/>

				<button onClick={this.toggleAddItem}>Add item</button>

			</div>
		)
	}

}

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo,
		counter: state.counter
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onAdd: () => dispatch({ type: 'ADD' }),
		onSub: () => dispatch({ type: 'SUB' }),
		onFind: value => dispatch({ type: 'FIND', value: value }),
		onSet: value => dispatch({ type: 'SET_DATA', value: value }),
		onAddItem: () => dispatch({ type: 'ADD_ITEM' }),
		onDelete: tableItem => dispatch({ type: 'DELETE', value: tableItem }),
		onChange: (value, item, key) => dispatch({ type: 'CHANGE', value: value, item: item, key: key })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)