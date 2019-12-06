import React, { Component } from 'react'
import TableRow from '../TableRow/TableRow'

import { connect } from 'react-redux'

class Table extends Component {

	render() {
		console.log('Table:', this.props)
		return (
			<table>
    		<tbody>
    			<TableRow />
    			<TableRow />
    			<TableRow />
    			<TableRow />
    			<TableRow />
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

export default connect(mapStateToProps)(Table)