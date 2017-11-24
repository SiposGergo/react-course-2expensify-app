import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";
import { SingleDatePicker } from 'react-dates';

test("should render expenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test("should render expenseForm with expense correctly", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})

test("should render  error for invalid submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => { }
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test("should set description on input change", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper.find("input").at(0).simulate('change', {
        target: { value: "new descrition" }
    }))
    expect(wrapper.state("description")).toBe("new descrition");
})

test("should set note on input change", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper.find("textarea").at(0).simulate('change', {
        target: { value: "new note" }
    }))
    expect(wrapper.state("note")).toBe("new note");
})

test("should not set note on amount change if it is not valid", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper.find("input").at(1).simulate('change', {
        target: { value: "12.1254" }
    }))
    expect(wrapper.state("amount")).toBe("");
})

test("should set note on amount change if it is valid", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper.find("input").at(1).simulate('change', {
        target: { value: "12.2" }
    }))
    expect(wrapper.state("amount")).toBe("12.2");
})

test("should call onsubmit prop for valid submission", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => { }
    });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
})

test("should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set focused on datepicker focused changed", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop("onFocusChange")({ focused: true });
    expect(wrapper.state("calendarFocused")).toEqual(true);
});