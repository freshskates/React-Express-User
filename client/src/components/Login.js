import React from "react";
import Logout from "./Logout";
import Stats from "./Stats";
import { useSelector, useDispatch } from "react-redux";
import {
  logIn,
  selectUser,
  setPasswordField,
  setUsernameField,
  selectPasswordField,
  selectUsernameField,
} from "../features/user/userSlice";

function Login() {
  const user = useSelector(selectUser);
  const username = useSelector(selectUsernameField);
  const password = useSelector(selectPasswordField);
  const dispatch = useDispatch();

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(setUsernameField(""));
    dispatch(setPasswordField(""));
    dispatch(logIn({ username, password, status: true }));
  };

  return (
    <div>
      {user === null ? (
        <form onSubmit={submitLogin}>
          <input
            type="name"
            placeholder="Username"
            value={username}
            onChange={(e) => dispatch(setUsernameField(e.target.value))}
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => dispatch(setPasswordField(e.target.value))}
          ></input>
          <button type="submit">Login</button>
        </form>
      ) : (
        <>
          <Stats />
          <Logout />
        </>
      )}
    </div>
  );
}

export default Login;
