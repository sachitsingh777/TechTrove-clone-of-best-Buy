import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { GoKey } from "react-icons/go";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/AuthReducer/Action";
import { useToast } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const initialState = {
  email: "",
  password: "",
};

export const Login = () => {
  const [loginData, setLoginData] = useState(initialState);

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
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
    toast({
      title: "Login successful",
      description: "Have a great day",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });

    navigate("/");
  };

  const { email, password } = loginData;
  return (
    <>
     <Navbar />
   
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign In to Tech Trove</h2>
        <input
          type={"text"}
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={handleChange}
          required
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
          required
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
          <Link className="link" to={"/createaccount"}>
            Create an account
          </Link>
        </div>
      </form>
    </div> </>
  );
};
