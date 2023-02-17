import "./login.css";
import { React } from "react";

// function Greet() {
//   return <h1>This is Greeting Message from Abraham</h1>;
// }

const Hello = () => {
  return (
    <div style={{ display: "grid", paddingTop: 20 }}>
      <div className="login">
        <h4 style={{ paddingTop: 15 }}>Login Form</h4>
        <div className="form-body">
          <div style={{ display: "flex" }}>
            <label style={{ marginRight: 49 }}>email</label>
            <input style={{ width: 140, height: 20 }} type="email" />
          </div>
          <div style={{ display: "flex", marginTop: 20 }}>
            <label style={{ marginRight: 20 }}>password</label>
            <input style={{ width: 140, height: 20 }} type="password" />
          </div>
          <br />
          <button style={{ marginTop: 15, height: 32 }}>Login</button>
        </div>
      </div>

      <br />

      <div className="login">
        <h4 style={{ paddingTop: 10 }}>Login Form</h4>
        <div className="form-body" style={{ paddingTop: 1 }}>
          <div style={{ display: "flex" }}>
            <label style={{}}>Body</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
