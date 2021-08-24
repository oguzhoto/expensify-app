import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';


const ExpenseListItem = ({id, amount, createdAt, description}) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>
			{numeral(amount / 100).format('$0,0.00')}
			- 
			{moment(createdAt).format('MMMM Do, YYYY')}
		</p>
	</div>
);

export default ExpenseListItem;