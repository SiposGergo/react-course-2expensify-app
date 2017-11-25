import React from "react";
import selectTotalExpenses from "../selectors/expenses-total";
import getVisibleExpenses from "../selectors/expenses";
import { connect } from "react-redux";
import numeral from "numeraljs"

export const ExpenseSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? "expense" : "expenses";
    const formattedTotal = numeral(props.expensesTotal / 100).format("$0,0.00");
    return (
        <div>
            <h1>
                Viewing {props.expenseCount} {expenseWord} totalling {formattedTotal}
            </h1>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const visibles = getVisibleExpenses(state.expenses, state.filters);
    const total = selectTotalExpenses(visibles);
    return {
        expenseCount: visibles.length,
        expensesTotal: total
    }
}

export default connect(mapStateToProps)(ExpenseSummary)

