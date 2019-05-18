import React from "react";
import { shallow } from "enzyme";
import { EditExpense } from "../../components/EditExpense";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, wrapper;
const { amount, createdAt, description, id, note } = expenses[0];

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpense
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[0]}
    />
  );
});

test("Should render EditExpense component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(history.push).toHaveBeenCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(id, {
    amount,
    createdAt,
    description,
    id,
    note
  });
});

test("Should handle removeExpense", () => {
  wrapper.find("button").prop("onClick")(expenses[0]);
  expect(history.push).toHaveBeenCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith({
    id
  });
});
