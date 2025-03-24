import React, { useState } from 'react'
import './Auth.css'
import Waves from '../Waves/Waves.jsx'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
const baseUrl = process.env.REACT_APP_BASE_URL;
const SignUp = () => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSend] = useState(false);
    const [inputData, setInputData] = useState({
        "Your Name": "",
        "email": "",
        "phone with ISD Code": "",
        "country": "",
        "password": ""
    })

    const sendOtp = async (e) => {
        try {
            e.preventDefault();
            let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (emailReg.test(inputData.email) === false) {
                return setErrors({ email: "Please input a valid email" });
            }
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
            let res = await fetch(`${baseUrl}/api/v1/auth/send-otp`, {
                method: "POST",
                body: JSON.stringify({
                    email: inputData.email,
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            }
            );
            res = await res.json();
            console.log("res", res);
            if (res.success) {
                setIsOtpSend(true);
                toast.success(res.message);
            }
        } catch (error) {
            console.log("error while sending otp");
            toast.error("something went wrong");
        }
    }

    const handlerChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputData((prevData) => ({
            ...prevData, [name]: value
        }))
        setErrors({ ...errors, [name]: "" })
    }

    const registerHandler = async (e) => {
        e.preventDefault();
        const id = toast.loading("Please wait...");
        try {
            let res = await fetch(`${baseUrl}/api/v1/auth/registration`, {
                method: "POST",
                body: JSON.stringify({
                    name: inputData['Your Name'],
                    email: inputData.email,
                    phoneNumber: inputData['phone with ISD Code'],
                    country: inputData.country,
                    password: inputData.password,
                    otp: otp
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            res = await res.json();
            if (res.success) {
                toast.dismiss(id);
                toast.success(res.message);
                navigate("/sign-in")
            }
            else if (!res.success) {
                toast.dismiss(id);
                toast.error(res.message);
            }
            console.log("res", res)
        } catch (error) {
            toast.dismiss(id);
            toast.error("something went wrong")
            console.log("error while user registration", error)
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
            {!isOtpSent && <div className='sign-up-container'>
                <h1>Sign-Up</h1>
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
                <button onClick={sendOtp}>Register</button>
                <p>Already Registered ? <Link to="/sign-in" style={{ color: "#FFD700" }}>sign-in</Link></p>
            </div>}
            {isOtpSent && <div className='sign-up-container'>
                <h1>Verify Email</h1>
                <p>We have sent otp to your email. Please check your email</p>
                <input type="string"
                    value={otp}
                    placeholder="Enter your otp"
                    onChange={(e) => setOtp(e.target.value)}
                ></input>
                <button onClick={registerHandler}>Submit</button>
            </div>}
        </div>
    </>
    )
}

export default SignUp
