import React, { Component } from 'react'
import TableRow from '../TableRow/TableRow'

import { connect } from 'react-redux'

class Table extends Component {

	render() {
		const { userInfo } = this.props

		console.log('Table:', this.props)
		return (
			<table>
    		<tbody>
				{userInfo.map((user, index) => {
					return (
						<TableRow
							key={index}
							name={user.name}
							age={user.age}
						/>
					)
				}) }
    		</tbody>
    	</table>
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
		onSub: () => dispatch({ type: 'SUB' })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)