import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import man from "../assets/man.png";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Dashboard = ({ setUser }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [page, setPage] = useState("dashboard");
  function logout() {
    const user = localStorage.removeItem("user"); // Remove user from localStorage
    setUser(user);
    navigate("/"); // Redirect to login page
  }
  return (
    <>
      <div>
        <Navbar />

        <div className="my-3">
          <div className="w-full flex justify-center ">
            <img src={man} className="h-24 flex justify-center" alt="" />
          </div>
          <p className="sm:text-2xl text-xl font-semibold text-center my-2">ACCOUNT</p>
          <div className="flex justify-center">
            {" "}
            <button
              className="border-2 sm:text-md text-sm text-white sm:px-7 px-7 py-2 rounded-lg bg-[red] font-semibold"
              onClick={logout}
            >
              LOGOUT
            </button>
          </div>
        </div>
        <div className="my-5">
          <ul className="sm:text-xl   cursor-pointer flex justify-around">
            <li onClick={() => setPage("dashboard")}>Dashboard</li>
            <li onClick={() => setPage("orderlist")}>Order List</li>
            <li onClick={() => setPage("wishlist")}>Wish List</li>
            <li onClick={() => setPage("setting")}>Settings</li>
          </ul>
        </div>
        <hr />
        <div className="sm:px-10 px-3">
          {page === "dashboard" ? (
            <UserDashboard />
          ) : page === "orderlist" ? (
            <OrderList />
          ) : page === "wishlist" ? (
            <WishList />
          ) : page === "setting" ? (
            <ChangePassword/>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

function UserDashboard() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse the stored user data
    }
  }, []);
  return (
    <>
      <div className=" my-1 sm:text-lg text-md">
        {user ? (
          <div>
            <div className="flex items-center border-b py-2 ">
              {" "}
              <p className="my-2 font-semibold w-40">First Name :</p>{" "}
              <p> {user.firstName}</p>
            </div>
            <div className="flex items-center border-b py-2 ">
              {" "}
              <p className="my-2 font-semibold w-40">Last Name :</p>{" "}
              <p> {user.lastName}</p>
            </div>
            <div className="flex items-center border-b py-2 ">
              {" "}
              <p className="my-2 font-semibold w-40">Email :</p>{" "}
              <p> {user.email}</p>
            </div>
            <div className="flex items-center border-b py-2 ">
              {" "}
              <p className="my-2 font-semibold w-40">Address :</p>{" "}
              <p> {""}</p>
            </div>
            <div className="flex items-center border-b py-2 ">
              {" "}
              <p className="my-2 font-semibold w-40">Contact :</p>{" "}
              <p> {""}</p>
            </div>
            
          </div>
        ) : (
          <p>No user data available.</p>
        )}
      </div>
    </>
  );
}

function OrderList() {
  return (
    <>
      <div>
        <p className="text-3xl  my-6 text-center">ORDER LIST</p>
      </div>
    </>
  );
}

function WishList() {

  const[wishlist,setWishlist]=useState([])
  console.log(wishlist)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if (user && user.email ){
      fetch(
        `https://furstorebackend.onrender.com/api/getWishlist/${user.email}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => setWishlist(data))
        .catch((error) => console.error("Error fetching watchlist:", error));
    } else {
      console.error("User not found in localStorage");
    }
  }, []);

  return (
    <>
        <p className="text-3xl  my-6 text-center">WISHLIST</p>
      <div className="grid sm:grid-cols-5 grid-cols-2">
        {wishlist.map((item)=>{
        return(<>
        <Link to={`/productsdetails/${item.name}`}>
         <div>
          <div className="relative group">
            <div className="flex justify-center items-center group overflow-hidden px-2">
              <img
                className="center_img text-center relative group-hover:scale-125 transition-all duration-300 w-full"
                src={item.image}
                alt={item.image}
              />
            </div>
          </div>
          <div className="py-1">
            <div className="star text-center py-2 text-[#Ffd700] justify-center flex text-sm gap-1">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalf} />{" "}
            </div>
            <p className="card_texts text-center text-lg">{item.name}</p>
            <p className="card_price text-center text-sm py-2">{item.price}</p>
          </div>
        </div>
        </Link>
        </>)
       })}
      </div>
    </>
  );
}

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userId = JSON.parse(localStorage.getItem("user")).userId;

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New Password does not match", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const response = await fetch(
        `https://furstorebackend.onrender.com/api/changepassword/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ currentPassword, newPassword }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to change password.");
      }
      alert("Password changed successfully.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="password-change-form text-white ">
        <div className="sm:text-3xl text-2xl  text-black mx-3  my-4   w-full text-center">
          CHANGE YOUR PASSWORD
        </div>
        <form className="mx-auto sm:px-4 px-14 py-2 w-[60%]" onSubmit={handlePasswordChange}>
          <div className="my-5 ">
            <label className="text-lg font-semibold  text-black">Current Password:</label>
            <br />
            <input
              className="text-black border-2 py-1 px-4 rounded-md font-semibold border-black"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              placeholder="Enter Current Password"
            />
          </div>
          <div>
            <label className="text-lg font-semibold text-black">New Password</label>
            <br />
            <input
              className="text-black border-2 py-1 px-4 rounded-md font-semibold border-black"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder="Enter New Password"
            />
          </div>
          <div className="my-5">
            <label className="text-lg font-semibold text-black">
              Confirm New Password:
            </label>
            <br />
            <input
              className="text-black border-2 py-1 px-4 rounded-md font-semibold border-black"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Please Confirm New Password"
            />
          </div>
          <button
            type="submit"
            className=" bg-[#f00072] text-white font-semibold px-4 py-2 rounded"
          >
            Change Password
          </button>
        </form>
      </div>
    </>
  );
}
