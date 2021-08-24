import React from 'react';
import { connect } from 'react-redux'; 
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const ExpensesSummary = (props) => {
  return (
    <div>
      <h2>Expenses Count: {props.expensesCount}, Expenses Total:{numeral(expensesTotal(props.expenses)).format('$0,0.00')}</h2>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensesCount: selectExpenses(state.expenses, state.filters).length
  }
};

export default connect(mapStateToProps)(ExpensesSummary);