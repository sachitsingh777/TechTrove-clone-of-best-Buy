import { Link, Navigate } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { GoKey } from "react-icons/go";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/AuthReducer/Action";

const initialState = {
  email: "",
  password: "",
};

export const Login = () => {
  const [loginData, setLoginData] = useState(initialState);
  const dispatch = useDispatch();
  const selector = useSelector((store) => {
    return store.authReducer.isAuth;
  });
  useEffect(() => {
    if (dispatch) {
      <Navigate to="" />;
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return { ...loginData, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(loginData));
    // console.log(loginData)
  };

  const { email, password } = loginData;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign In to Best Buy</h2>
        <input
          type={"text"}
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <div className="center_div">
          <input type="checkbox" style={{ border: "1px solid black" }} />
          <p>Show Password</p>
        </div>
        <input
          placeholder="Password"
          type={"password"}
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Link className="forgetPassword">Forget your password?</Link>
        <input type="submit" value={"Sign In"} className="signInbutton" />
        <div className="center_div">
          <hr /> or <hr />
        </div>

        <button className="passkeyButton">
          <GoKey className="fonticon" />
          <Link>Sign In with a Passkey</Link>
        </button>

        <button className="appleButton">
          <BsApple className="fonticon" />
          <Link>Sign in With Apple</Link>
        </button>

        <button className="googleButton">
          <FcGoogle className="fonticon" />
          <Link>Sign in with Google</Link>
        </button>
        <p>
          By continuing you agree to our
          <Link className="link">Terms and Conditions,</Link>
          our
          <Link> Privacy Policy, </Link>
          and the <Link className="link">My Best Buy® Program Terms.</Link>
        </p>
        <hr style={{ width: "100%" }} />
        <div className="createAccount">
          <h5>Don't have an account?</h5>
          <Link className="link" to={"./createaccount"}>
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
};
