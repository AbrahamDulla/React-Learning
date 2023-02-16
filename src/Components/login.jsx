import "./login.css";
import { React } from "react";

// function Greet() {
//   return <h1>This is Greeting Message from Abraham</h1>;
// }

const Hello = () => {
  return (
    <div className="login">
      <h4 style={{ paddingTop: 15 }}>Login Form</h4>
      <div className="form-body">
        <p>email</p>
        <input style={{ width: 100 }} type="email" />
        <p>password</p>
        <input style={{ width: 100 }} type="password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Hello;
