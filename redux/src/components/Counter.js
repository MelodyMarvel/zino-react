//we use useSelector to get data from the store
import { useSelector, useDispatch } from "react-redux";
import { SUBTRACT, RESET, ADD, ADD_NUMBER} from "../store/slice/counterSlice"
import {TOGGLE_AUTH} from "../store/slice/authSlice"


// import {
//   handleSubtract,
//   handleAdd,
//   handleReset,
//   handleAddNum,
//   toggleAuth,
// } from "../store/actions/action"

const Counter = () => {
const count = useSelector((state) => state.counter.count);
const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
console.log(count)
console.log(isLoggedIn)

const dispatch = useDispatch()

  
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
        
      <button class="--btn --btn-danger" onClick={() => dispatch(TOGGLE_AUTH())}>
          {isLoggedIn ? "Log Out" : "Log In"}
          </button>
          <hr/>

          {!isLoggedIn ? ( <p>Please Log in</p> ) : (
            <>
              <h3>React counter App</h3>
        <h1 style={{ color }}>{count}</h1>
        <div class="buttons --flex-center">
          <button class="subtract --btn --btn-danger" onClick={() => dispatch(SUBTRACT())}>
            Subtract
          </button>
          <button class="reset --btn" onClick={() => dispatch(RESET())}>
            Reset
          </button>
          <button class="add --btn --btn-primary" onClick={() => dispatch(ADD())}>
            Add
          </button>
          <button class="add --btn --btn-primary" onClick={() => dispatch(ADD_NUMBER(5))}>
            Add 5
          </button>
        </div>

            </>
  )}
        
      </div>
    </section>
  )
};
export default Counter;
