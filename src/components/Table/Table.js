import React, { Component } from 'react'
import TableRow from '../TableRow/TableRow'

export default class Table extends Component {

	render() {
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