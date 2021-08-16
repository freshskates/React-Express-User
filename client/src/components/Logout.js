import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../features/user/userSlice";

function Logout() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={(e) => dispatch(logOut())}>Logout</button>
    </div>
  );
}

export default Logout;
