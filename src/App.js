import React, { useState, useReducer } from "react";
import TodoItemComponent from "./TodoItemComponent";

const initialState = [];

export const REDUCER_DISPATCH_ACTIONS = {
  ADD_TO_LIST: "add-to-list",
  MARK_AS_COMPLETED_OR_UNCOMPLETED: "mark-as-completed-or-uncompleted",
  REMOVE_FROM_LIST: "remove-from-list",
};

function reducer(todoList, action) {
  switch (action.type) {
    case REDUCER_DISPATCH_ACTIONS.ADD_TO_LIST:
      return [
        ...todoList,
        todoItemObjectGenerator(action.payload.todoItemName),
      ];
    case REDUCER_DISPATCH_ACTIONS.MARK_AS_COMPLETED_OR_UNCOMPLETED:
      return {};
    case REDUCER_DISPATCH_ACTIONS.REMOVE_FROM_LIST:
      return {};

    default:
      return todoList;
  }
}

function todoItemObjectGenerator(todoItemName) {
  return {
    id: Date.now(),
    todoItemName: todoItemName,
    complete: false,
  };
}

function App() {
  const [inputData, setInputData] = useState("");
  const [todoList, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: REDUCER_DISPATCH_ACTIONS.ADD_TO_LIST,
      payload: { todoItemName: inputData },
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
        />
      </form>
      {todoList.map((oneObjectItem) => {
        return (
          <TodoItemComponent
            key={oneObjectItem.id}
            oneObjectItem={oneObjectItem}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
}

export default App;
