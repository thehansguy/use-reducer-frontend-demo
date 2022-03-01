import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        count: state.count + action.payload.incrementAmount,
      };

    case ACTIONS.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      break;
  }
  return {};
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch({
      type: ACTIONS.INCREMENT,
      payload: { incrementAmount: 1 },
    });
  }

  function decrement() {
    dispatch({
      type: ACTIONS.DECREMENT,
      payload: { decrementAmount: 1 },
    });
  }

  const styles = {
    border: "5px solid green",
    fontSize: "60px",
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      <span style={styles}>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
