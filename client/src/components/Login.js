import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const submitLogin = (e) => {
    e.preventDefault();
    setName("");
    setPassword("");
    setUser({ name, password, status: true });
  };

  return (
    <div>
      <form onSubmit={submitLogin}>
        <input
          type="name"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
      <h5>{user.name}</h5>
      <h5>{user.password}</h5>
      <h5>{user.status ? "true" : "false"}</h5>
      {user.status && <button onClick={(e) => setUser({})}>Logout</button>}
    </div>
  );
}

export default Login;
