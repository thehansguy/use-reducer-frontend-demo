import React from "react";
import { REDUCER_DISPATCH_ACTIONS } from "./App";

function TodoItemComponent({ oneObjectItem, dispatch }) {
  return (
    <div>
      <span>todo:{oneObjectItem.todoItemName} </span>
      <span>
        <button
          onClick={() =>
            dispatch({
              type: REDUCER_DISPATCH_ACTIONS.MARK_AS_COMPLETED,
              payload: { id: oneObjectItem.id },
            })
          }
        >
          Completed
        </button>
        <button
          onClick={() =>
            dispatch({
              type: REDUCER_DISPATCH_ACTIONS.REMOVE_FROM_LIST,
              payload: { id: oneObjectItem.id },
            })
          }
        >
          Remove
        </button>
      </span>
    </div>
  );
}

export default TodoItemComponent;
