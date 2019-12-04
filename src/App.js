import React from 'react';
import Field from './components/Field/Field'
import TableRow from './components/TableRow/TableRow'

function App() {
  return (
    <div className="App">
    	<table>
    		<tbody>
    			<TableRow />
    			<TableRow />
    			<TableRow />
    			<TableRow />
    			<TableRow />
    		</tbody>
    	</table>

    	{/*
      	<Field />
      	<Field />
      	<Field />
      	<Field />
      	<Field />
    	*/}
    </div>
  );
}

export default App;
