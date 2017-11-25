import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";
import React from "react";

test('should render correctly sumary with one expense', () => {
    const wrapper = shallow(
        <ExpenseSummary expenseCount={1} expensesTotal={1500}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly sumary with multiple expenses', () => {
    const wrapper = shallow(
        <ExpenseSummary expenseCount={23} expensesTotal={454564}/>);
    expect(wrapper).toMatchSnapshot();
});