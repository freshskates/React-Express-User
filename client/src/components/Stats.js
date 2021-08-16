import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

function Stats() {
  const user = useSelector(selectUser);
  return (
    <div>
      <h3>Stats</h3>
      <h5>Username: {user.username}</h5>
      <h5>Password: {user.password}</h5>
      <h5>Status: {user.status ? "true" : "false"}</h5>
    </div>
  );
}

export default Stats;
