// import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid';

// const addExpense = (
//   {
//     description='',
//     note='',
//     amount=0,
//     createdAt=0
//   } = {}
//   ) => {
//   return {
//     type:'ADD_EXPENSE',
//     expense: {
//       id: uuid(),
//       description: description,
//       note: note,
//       amount: amount,
//       createdAt: createdAt,
//     }

//   }
// }

// const removeExpense = ({id} = {}) => {
//   return {
//     type:'REMOVE_EXPENSE',
//     id:id
//   }
// }

// const editExpense = (id, updates) => {
//   return {
//     type: 'EDIT_EXPENSE',
//     id: id,
//     updates: updates
//   }
  
// }

// const setTextFilter = (text = '') => {
//   return {
//     type:'SET_TEXT_FILTER',
//     text:text
//   }
// }

// const sortByAmount = () => {
//   return {
//     type: 'SORT_BY_AMOUNT',
//     sortBy: 'amount'
//   }
// }

// const sortByDate = () => {
//   return {
//     type: 'SORT_BY_DATE',
//     sortBy: 'date'
//   }
// }

// const setStartDate = (startDate) => {
//   return {
//     type: 'SET_START_DATE',
//     startDate: startDate
//   }
// }

// const setEndDate = (endDate) => {
//   return {
//     type: 'SET_END_DATE',
//     endDate: endDate
//   }
// }
// const expensesReducerDefaultState = [];


// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_EXPENSE':
//       return [
//         ...state, 
//         action.expense
//       ];
//       case 'REMOVE_EXPENSE':
//         return state.filter(({id}) => {   
//           return id !== action.id 
//         })
//       case 'EDIT_EXPENSE':
//         return state.map((expenses)=> {
//           if(expenses.id === action.id) {
//             return {
//               ...expenses,
//               ...action.updates
//             }
//           }
//         })
        
//     default:
//       return state;
//   }
// };

// const filtersReducerDefaultState = {
//   text: '',
//   sortBy: 'date',
//   startDate: undefined,
//   endDate: undefined,
// };
// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'SET_TEXT_FILTER' :
//       return {
//         ...state,
//         text:action.text
//       }
//     case 'SORT_BY_AMOUNT': //can merge two switch cases if you like => same return values
//       return {
//         ...state,
//         sortBy: action.sortBy
//       }
//     case 'SORT_BY_DATE':
//       return {
//         ...state,
//         sortBy: action.sortBy
//       }
//     case 'SET_START_DATE':
//       return {
//         ...state,
//         startDate:action.startDate
//       }
//       case 'SET_END_DATE':
//       return {
//         ...state,
//         endDate: action.endDate
//       }
//     default:
//       return state;
//   }
// };

// //GET VISIBLE EXPENSES
// const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
//   return expenses.filter((expense) => {
//     const startDateMatch = typeof startDate !== 'number' || expense.createdAt>=startDate;
//     const endDateMatch = typeof endDate !== 'number' || expense.createdAt<=endDate;
//     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

//     return startDateMatch && endDateMatch && textMatch;
//   }).sort((a, b)=> {
//     if (sortBy === 'date') {
//       return a.createdAt < b.createdAt ? 1 : -1;
//     }
//     if (sortBy === 'amount') {
//       return a.amount < b.amount ? 1 : -1;
//     }
//   });
// };

// // STORE CREATION
// const store = createStore(
//   combineReducers({
//     expenses: expensesReducer,
//     filters: filtersReducer,
//   })
// );

store.subscribe(()=> {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

   const expenseOne = store.dispatch(addExpense({description:'rent', amount:2, createdAt:2}))
   const expenseTwo = store.dispatch(addExpense({description:'coffee', amount:3, createdAt:2})) 

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

   store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate()); //date
// store.dispatch(setStartDate(-1500));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [
    {
      id: 5,
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

