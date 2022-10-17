import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { UserLogin } from "../Redux/AuthReducer/action";
import * as types from "../Redux/AuthReducer/actionTypes";
const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(UserLogin({ email, password })).then((res) => {
        if (res.type === types.LOGIN_SUCCESS) {
          navigate( location.state.pathname || "/", { replace: true });
        }
      });

      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleForm}>
        <div>
          <label>User Email</label>
          <br />
          <input
            data-testid="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            data-testid="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" data-testid="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
