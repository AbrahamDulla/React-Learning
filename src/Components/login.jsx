import "./login.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// function Greet() {
//   return <h1>This is Greeting Message from Abraham</h1>;
// }

const Login = () => {
  const [item, setItem] = useState([]);

  const [name, setName] = useState([""]);
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const user = { name, email, country, address, city };

    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setName("");
    setEmail("");
    setCountry("");
    setAddress("");
    setCity("");
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/4`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div style={{ display: "flex", paddingTop: 20 }}>
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
        <div>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      </div>

      <div className="login">
        <h3>Axios Post</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="each-rows">
              <label className="label">Name</label>
              <input
                style={{ width: 140, height: 20 }}
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
              />
            </div>
            <div className="each-rows">
              <label className="label">Country</label>
              <select
                style={{ width: 145, height: 30, marginLeft: -14 }}
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              >
                <option value=""> Select Country </option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Somalia">Somalia</option>
              </select>
              {/* {selectedColor && <p>You selected {selectedColor}.</p>} */}
            </div>
            <div className="each-rows">
              <label className="label">City</label>
              <input
                style={{ width: 140, height: 20, marginLeft: 15 }}
                type="text"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <div className="each-rows">
              <label className="label">Address</label>
              <input
                style={{ width: 140, height: 20, marginLeft: -15 }}
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <div className="each-rows">
              <label className="label">Email</label>
              <input
                style={{ width: 140, height: 20, marginLeft: 2 }}
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="btn-container" style={{ justifyContent: "center" }}>
              <button
                type="submit"
                className="btn"
                style={{ marginTop: 20, width: 230 }}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
