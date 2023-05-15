import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { createAccount } from "../Redux/AuthReducer/Action";
import { FcGoogle } from "react-icons/fc";
import "./CreateAccount.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
  mobile: "",
};
export const CreateAccount = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const selector = useSelector((store) => {
    return store.authReducer.accountCreatedSuccessfull;
  });
  if (selector === true) {
    <Navigate to="/login" />;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != confirmpassword) {
      alert("Password not match!");
      return;
    }
    dispatch(createAccount(formData));
    toast({
      title: "Registered successfully",
      status: "success",
      isClosable: true,
      position: "top",
    });
    navigate("/login");
  };
  const { firstname, lastname, email, password, confirmpassword, mobile } =
    formData;
  return (
    <>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Create an Account</h2>
          <p>
            Shopping for your business?
            {/* <link>create a business account.</link> */}
          </p>
          <input
            placeholder="First Name"
            type={"text"}
            onChange={handleChange}
            name="firstname"
            value={firstname}
            required
          ></input>
          <input
            placeholder="Last Name"
            type={"text"}
            onChange={handleChange}
            name="lastname"
            value={lastname}
            required
          ></input>
          <input
            placeholder="Email Address"
            type={"email"}
            onChange={handleChange}
            name="email"
            value={email}
            required
          ></input>
          <input
            placeholder="Password"
            type={"password"}
            onChange={handleChange}
            name="password"
            value={password}
            required
          ></input>
          <input
            placeholder="Confirm Password"
            type={"password"}
            onChange={handleChange}
            name="confirmpassword"
            value={confirmpassword}
            required
          ></input>
          <input
            placeholder="Mobile Phone Number"
            name="mobile"
            value={mobile}
            type={"number"}
            onChange={handleChange}
            required
          ></input>
          <div style={{ display: "flex" }}>
            <input type="checkbox" />
            <p>Use for Account Recovery.</p>
          </div>
          <input
            type="submit"
            value="Create an Account"
            className="createAccountButton"
            required
          />
          <div className="center_div">
            <hr /> or <hr />
          </div>
          <button className="googleSignup">
            <FcGoogle className="googleIcon" />
            <h4>Sign up with Google</h4>
          </button>
          <p>
            By continue you agree to our
            <Link className="link">Terms And Conditions,</Link>
            our <Link className="link">Privacy Policy,</Link> and the{" "}
            <Link className="link">My Best Buy Program Terms.</Link>
          </p>
          <h4>
            Already have an account?
            <Link className="link">Sign in</Link>
          </h4>
        </form>
      </div>{" "}
    </>
  );
};
