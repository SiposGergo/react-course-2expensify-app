import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from '../../components/ExponseListItem';
import expenses from "../fixtures/expenses";

test("should render expense lsit item",() => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
})