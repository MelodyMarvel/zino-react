//we use useSelector to get data from the store
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
const count = useSelector(state => state)
console.log(count)
const dispatch = useDispatch()

  const handleSubtract = () => {
    dispatch({
        type: "SUBTRACT"
    })
  };

  const handleReset = () => {
    dispatch({
        type: "RESET"
    })
  };

  const handleAdd = () => {
    dispatch({
        type: "ADD"
    })
};

  let color = "#444";
  if (count >= 1) {
    color = "blue";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "#444";
  }

  return (
    <section class="--flex-center --100vh --bg-primary">
      <div class="container --bg-light --p2 --center-all --m2">
      <button class="--btn --btn-danger">
            Log Out
          </button>
          <hr/>
        <h3>React code</h3>

        <h1 style={{ color }}>{count}</h1>

        <div class="buttons --flex-center">
          <button class="subtract --btn --btn-danger" onClick={handleSubtract}>
            Subtract
          </button>
          <button class="reset --btn" onClick={handleReset}>
            Reset
          </button>
          <button class="add --btn --btn-primary" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};
export default Counter;
