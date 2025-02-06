import Reactc, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate()


  const notifySuccess = () => {
    toast.success('🦄 Wow! Operation successful!', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  
  const notifyError = () => {
    toast.error('🚨 Error occurred!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  async function signup() {
    const response = await fetch("https://furstorebackend.onrender.com/api/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password, fname, lname }),
    });
    const result = await response.json();
    if(response.ok)
    {
      navigate("/login")
      setEmail("")
      setPassword("")
      setFname("")
      setLname("")
    }
    else
    {
      toast.error(result.message)
    }
    console.log(result);
  }

  function handleSubmit() {
    signup();
  }
  return (
    <>
    <ToastContainer />
      <div>
        <p className="text-5xl my-14 font-semibold text-center">Account</p>
      </div>
      <div className=" sm:w-[50%] w-[65%] mx-auto">
        <p className="text-2xl font-semibold">Sign IN</p>
        <p>Insert your account information:</p>
        <div className="my-3">
          <input
            className="my-4"
            type="text"
            placeholder="Enter Your First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <br />
          <input
            className="my-4"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </div>
        <p className="text-sm font-semibold cursor-pointer my-2">
          Forgot Your Password ?
        </p>
        <p>
          If you have an account, please{" "}
          <Link to={"/"}>
            <span className="font-semibold text-[#727272] underline">
              Login Here
            </span>{" "}
          </Link>
        </p>
        <div className="flex justify-center my-3    ">
          <button
            className="product_btn  text-lg text-center border-2 border-[#2B5E5D] text-white  transition duration-1000 w-full rounded-lg  py-2 bg-[#2B5E5D] my-3"
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
};
