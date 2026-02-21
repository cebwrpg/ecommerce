import React,{useState} from "react";
import UserDetails from "../components/UserDetails.jsx";
import UserLayout from "../components/UserLayout.jsx";
import { registerUser } from "../api/UserApi.jsx";
import {Link} from "react-router-dom";
import "../styles/Login.css";
import { validateRegister } from "../components/Validation.jsx";

function Register(){

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [error,setError] = useState("");

const handleRegister = (e)=>{
    e.preventDefault();

        const errorMessage = validateRegister(firstName,lastName,email,password,confirmPassword);
        if(errorMessage){
            setError(errorMessage);
            return;
        }
        setError("");
        registerUser(firstName,lastName,email,password)
        .then((response)=>setError(response.data.message))
        .catch((error)=>setError.error(error));
    };
    return (
    <UserLayout title="Register Form">
        <UserDetails
        firstName = {firstName}
        setFirstName = {setFirstName}
        lastName = {lastName}
        setLastName = {setLastName}
        email = {email}
        setEmail = {setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword = {setConfirmPassword}
        />

        {error && <p className="error-message">{error}</p>}
        
        <button type = "button" onClick={handleRegister}>Register</button>
        <div className="AA"><p>Already have an account.?{" "}
        <Link to="/login" className="login-link">
        Login
        </Link>
        </p>
        </div>
    </UserLayout>
    );
}

export default Register;