import React, { Component } from 'react'
import TableRow from '../TableRow/TableRow'

import { connect } from 'react-redux'

class Table extends Component {

	state = {
		savedUserData: null
	}


	
	
	componentDidMount() {
		this.setState({ savedUserData: this.props.userInfo })
	}

	componentDidUpdate() {
		console.log('componentDidUpdate:', this.props.userInfo)
	}




	render() {
		const { userInfo } = this.props

		console.log('render userInfo:', userInfo)
		
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
									number={this.props.counter}
								/>
							)
						}) }
					</tbody>
				</table>

				<input type="text" onChange={event => {
					this.props.onSet(this.state.savedUserData)
					console.log('event.target.value:', event.target.value)
					this.props.onFind(event.target.value)
				}}/>

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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)