import React from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const ExpensesSummary = (props) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{props.expensesCount}</span> expenses totalling <span>{numeral(expensesTotal(props.expenses)).format('$0,0.00')}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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