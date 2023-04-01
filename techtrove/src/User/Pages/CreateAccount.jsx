import { useEffect, useState } from "react"
import { createAccount } from "../Redux/AuthReducer/action"
import { Link, Navigate } from "react-router-dom"
import { FcGoogle } from 'react-icons/fc'
import './CreateAccount.css'
import { useDispatch, useSelector } from "react-redux"

const initialState = {
    firstname: '',
    lastname: '', 
    email: '',
    password: '',
    confirmpassword: '',
    mobile: ''
}
export const CreateAccount = () => {
    const [formData, setFormData] = useState(initialState)
    const dispatch=useDispatch()
    const selector=useSelector((store)=>{
        return store.authReducer.accountCreatedSuccessfull
    })
    useEffect(()=>{
        if(selector){
            <Navigate to='/login' />
        }
    },[])
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(password!=confirmpassword){
            alert("Password not match!")
            return
        }
        dispatch(createAccount(formData))

    }
    const { firstname, lastname, email, password, confirmpassword, mobile } = formData
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <p>Shopping for your business?
                    {/* <link>create a business account.</link> */}
                </p>
                <input placeholder="First Name"
                    type={'text'} onChange={handleChange} name='firstname' value={firstname}
                ></input>
                <input placeholder="Last Name"
                    type={'text'} onChange={handleChange} name='lastname' value={lastname}
                ></input>
                <input placeholder="Email Address"
                    type={'email'} onChange={handleChange} name='email' value={email}
                ></input>
                <input placeholder="Password"
                    type={'password'} onChange={handleChange} name='password' value={password}
                ></input>
                <input placeholder="Confirm Password"
                    type={'password'} onChange={handleChange} name='confirmpassword' value={confirmpassword}
                ></input>
                <input placeholder="Mobile Phone Number" name='mobile' value={mobile}
                    type={'number'} onChange={handleChange}
                ></input>
                <div style={{ display: "flex" }}>
                    <input type="checkbox" />
                    <p>Use for Account Recovery.</p>
                </div>
                <input type="submit" value="Create an Account" className="createAccountButton" />
                <div className="center_div">
                    <hr /> or <hr />
                </div>
                <button className='googleSignup'>
                    <FcGoogle className="googleIcon" />
                    <h4>Sign up with Google</h4>
                </button>
                <p>By continue you agree to our
                    <Link className="link">Terms And Conditions,</Link>
                    our <Link className="link">Privacy Policy,</Link> and the <Link className="link">My Best Buy Program Terms.</Link>
                </p>
                <h4>Already have an account?
                    <Link className="link">Sign in</Link>

                </h4>
            </form>
        </div>
    )
}
