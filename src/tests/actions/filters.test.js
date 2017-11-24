import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";
import moment from "moment";

test("should set up set end date action", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        value: moment(0)
    })
});

test("should set up set start date action", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        value: moment(0)
    })
});

test("should set up set text filter action", () => {
    const text = "sth"
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    })
});

test("should set up set text filter action with default", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
});

test("should set up sort by date action", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
});

test("should set up sort by amount action", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
});