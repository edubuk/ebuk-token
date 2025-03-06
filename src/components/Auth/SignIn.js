import React, { useState } from 'react'
import './Auth.css'
import Waves from '../Waves/Waves.jsx'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth.js';
const baseUrl = process.env.REACT_APP_BASE_URL;
const SignIn = () => {
    const [errors, setErrors] = useState({});
    const [auth , setAuth] = useAuth();
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        "email": "",
        "password": ""
    })

    const handlerChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputData((prevData) => ({
            ...prevData, [name]: value
        }))
        setErrors({ ...errors, [name]: "" })
    }

    const loginHandler = async(e) => {
        e.preventDefault();
        let newErrors = {};

        Object.keys(inputData).forEach((key) => {
            if (!inputData[key].trim()) {
                newErrors[key] = "This field is required";
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors); 
            return;
        }
        try {
            let res = await fetch(`${baseUrl}/api/v1/auth/login`,{
                method:"POST",
                body:JSON.stringify({
                    email:inputData.email,
                    password:inputData.password
                  }),
                headers:{
                    "Content-Type": "application/json",
                    "Authorization":auth.token
                }
            })
            res = await res.json();
            if(res.success)
            {
                toast.success(res.message);
                setAuth({...auth,user:res.user,token:res.token});
                localStorage.setItem("auth", JSON.stringify(res))
                navigate("/")
            }
            else if(!res.success)
            {
                toast.error(res.message);
            }
            console.log("res",res)
        } catch (error) {
            toast.error("something went wrong")
            console.log("error while user registration",error)
        }
    }


    return (<>
        <div className='auth-container'>
            <Waves
                lineColor="#008888"
                backgroundColor="transparent"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
                style={{ position: "absolute", top: 0, left: 0, zIndex: "-1000", opacity: 0.5 }}
            />
            {/* <img src={logo}></img> */}
            <div className='sign-up-container'>
                <h1>Sign-In</h1>
                {
                    Object.keys(inputData).map((key) => (
                        <>
                            <input type={key === "password" ? "password" : "text"}
                                name={key}
                                value={inputData[key]}
                                placeholder={key.charAt(0).toUpperCase() + key.slice(1) + "*"}
                                onChange={handlerChange}
                                className={errors[key] ? "error-input" : ""}
                            ></input>
                            {errors[key] && <span className="error-message">{errors[key]}</span>}
                        </>
                    ))
                }
                <button onClick={loginHandler}>Login</button>
                <p>Not Registered ? <Link to="/sign-up" style={{ color: "#FFD700" }}>sign-up</Link></p>
            </div>
        </div>
    </>
    )
}

export default SignIn
