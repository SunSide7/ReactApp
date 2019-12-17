import React, { Component } from 'react'
import TableRow from '../TableRow/TableRow'
import './Table.sass'

import { connect } from 'react-redux'

class Table extends Component {

	state = {
		savedUserData: null,
		isSearching: false,
		headTitleKeys: null
	}

	constructor() {
		super()
		this.toggleFindItem = this.toggleFindItem.bind(this)
		this.toggleAddItem = this.toggleAddItem.bind(this)
	}


	
	// Component Lifecycle Methods
	componentDidMount() {
		this.setState({ savedUserData: this.props.outletInfo })
	}

	static getDerivedStateFromProps(nextProps, previousState) {

		if (!previousState.isSearching) {
			return {
				savedUserData: nextProps.outletInfo
			}
		} else {
			return previousState
		}

	}

	componentDidUpdate() {

		console.log('From Table componentDidUpdate:', this.props.outletInfo)
		
	}
	
	

	
	// Toggle Methods
	toggleFindItem(event) {

		if (!event.target.value) {
						
			this.setState({
				isSearching: false
			})

			this.props.onSet(this.state.savedUserData)

		} else {
			if (!this.state.isSearching) {
				this.setState({ 
					savedUserData: this.props.outletInfo,
					isSearching: true
				})
			}
			
			this.props.onSet(this.state.savedUserData)
			this.props.onFind(event.target.value)
		}
		
		
	}
	
	toggleAddItem() {
		this.setState({ isSearching: false })

		this.props.onAddItem()
		this.setState({ savedUserData: this.props.outletInfo })

	}

	toggleDelItem = (itemToDel) => {
		this.setState({ isSearching: false })
		
		this.props.onDelete(itemToDel)
		this.setState({ savedUserData: this.props.outletInfo })

	}

	toggleChangeValue = (value, item, key, index) => {
		this.props.onChange(value, item, key, index)

		console.log('From Table Changed Row Index:', index)
	}




	render() {
		const { outletInfo } = this.props
		
		const keys = []

		for (let key in outletInfo[0]) {
			keys.push(key)
		}

		// console.log('render outletInfo:', outletInfo)
		
		return (
			<div>
				<table className="table table-striped table-hover">
					<thead className="thead">
						<tr>
							{
								keys.map((key, index) => {
									return (
										<td key={index}>{ key }</td>
									)
								})
							}
						</tr>
					</thead>
					<tbody>
						{
							outletInfo.map((user, index) => {
								return (
									<TableRow 
										key={index}
										index={index}
										name={user.name}
										address={user.address}
										owner={user.owner}
										type={user.type}
										isActive={user.isActive}
										toggleDelItem={this.toggleDelItem}
										toggleChangeValue={this.toggleChangeValue}
									/>
								)
							}) 
						}
					</tbody>
				</table>

				<input type="text" placeholder="Find" onChange={event => this.toggleFindItem(event)}/>

				<button onClick={this.toggleAddItem}>Add item</button>

			</div>
		)
	}

}

function mapStateToProps(state) {
	return {
		outletInfo: state.outletInfo,
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
		onChange: (value, item, key, index) => dispatch({ type: 'CHANGE', value: value, item: item, key: key, index: index })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)