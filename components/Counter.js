import Link from "next/link";
import React from "react";

import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
} from "../redux/actions/counterAction";

const Counter = (props) => {
  // console.log(props);
  // const [counter, setCounter] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Counter: {props.counter}</h1>
      <button onClick={props.incrementCounter}>+</button>
      <button onClick={props.decrementCounter}>-</button> <br />
      {/* <Link href="/login">Login</Link> */}
      <div></div>
    </div>
  );
};

// รับ function จาก store มาใช้งาน
const mapStateCounter = (state) => ({
  counter: state.counter.value,
});

// ส่งค่าไปยัง store เป็น object
const mapDispatchToprops = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateCounter, mapDispatchToprops)(Counter);
