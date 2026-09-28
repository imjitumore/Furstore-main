import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import man from "../assets/man.png";

import {
  faUser,
  faBoxOpen,
  faHeart,
  faGear,
  faArrowRightFromBracket,
  faEnvelope,
  faPhone,
  faLocationDot,
  faLock,
  faChevronRight,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// ======================================================
// MAIN DASHBOARD
// ======================================================

export const Dashboard = ({ setUser, theme, setTheme }) => {
  const navigate = useNavigate();

  const [page, setPage] = useState("dashboard");
  const [user, setCurrentUser] = useState(null);

  // Get logged-in user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout
  const logout = () => {
    localStorage.removeItem("user");

    if (setUser) {
      setUser(null);
    }

    navigate("/");
  };

  const menuItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: faUser,
    },
    {
      id: "orderlist",
      name: "My Orders",
      icon: faBoxOpen,
    },
    {
      id: "wishlist",
      name: "Wishlist",
      icon: faHeart,
    },
    {
      id: "setting",
      name: "Settings",
      icon: faGear,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fc]">

      <Navbar />

      {/* ============================================= */}
      {/* PROFILE HEADER */}
      {/* ============================================= */}

      <div className="bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#374151] text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">

            {/* Profile Image */}

            <div className="relative">

              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-1 shadow-xl">

                <img
                  src={man}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />

              </div>

              {/* Online indicator */}

              <div className="
                absolute
                bottom-1
                right-1
                w-5
                h-5
                bg-green-500
                border-4
                border-[#1f2937]
                rounded-full
              " />

            </div>


            {/* User Information */}

            <div className="text-center sm:text-left flex-1">

              <p className="text-gray-300 text-sm mb-1">
                Welcome back 👋
              </p>

              <h1 className="text-2xl sm:text-3xl font-bold">

                {user
                  ? `${user.firstName || ""} ${user.lastName || ""}`
                  : "My Account"}

              </h1>


              {user?.email && (

                <p className="
                  text-gray-300
                  mt-2
                  flex
                  items-center
                  justify-center
                  sm:justify-start
                  gap-2
                ">

                  <FontAwesomeIcon icon={faEnvelope} />

                  {user.email}

                </p>

              )}

            </div>


            {/* Logout */}

            <button
              onClick={logout}
              className="
                flex
                items-center
                gap-2
                px-5
                py-2.5
                bg-red-500
                hover:bg-red-600
                rounded-lg
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                shadow-lg
              "
            >

              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
              />

              Logout

            </button>

          </div>

        </div>

      </div>


      {/* ============================================= */}
      {/* MAIN CONTENT */}
      {/* ============================================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">


          {/* ========================================= */}
          {/* SIDEBAR */}
          {/* ========================================= */}

          <aside className="lg:col-span-1">

            <div className="
              bg-white
              rounded-2xl
              shadow-sm
              border
              border-gray-100
              p-3
            ">

              <p className="
                text-xs
                font-bold
                text-gray-400
                uppercase
                px-4
                py-3
              ">
                My Account
              </p>


              <div className="space-y-1">

                {menuItems.map((item) => (

                  <button
                    key={item.id}
                    onClick={() => setPage(item.id)}
                    className={`
                      w-full
                      flex
                      items-center
                      justify-between
                      px-4
                      py-3
                      rounded-xl
                      transition-all
                      duration-300
                      group

                      ${
                        page === item.id
                          ? "bg-gray-900 text-white shadow-md"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }
                    `}
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className={`
                          w-9
                          h-9
                          rounded-lg
                          flex
                          items-center
                          justify-center

                          ${
                            page === item.id
                              ? "bg-white/10"
                              : "bg-gray-100 group-hover:bg-white"
                          }
                        `}
                      >

                        <FontAwesomeIcon
                          icon={item.icon}
                        />

                      </div>

                      <span className="font-medium">
                        {item.name}
                      </span>

                    </div>


                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className={`
                        text-xs
                        transition-transform

                        ${
                          page === item.id
                            ? "translate-x-1"
                            : "group-hover:translate-x-1"
                        }
                      `}
                    />

                  </button>

                ))}

              </div>

            </div>

          </aside>


          {/* ========================================= */}
          {/* PAGE CONTENT */}
          {/* ========================================= */}

          <main className="lg:col-span-3">

            {page === "dashboard" && (
              <UserDashboard
                user={user}
                setPage={setPage}
              />
            )}

            {page === "orderlist" && (
              <OrderList />
            )}

            {page === "wishlist" && (
              <WishList />
            )}

            {page === "setting" && (
              <Settings theme={theme} setTheme={setTheme} />
            )}

          </main>

        </div>

      </div>

    </div>
  );
};


// ======================================================
// USER DASHBOARD
// ======================================================

function UserDashboard({ user, setPage }) {

  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      return;
    }

    const loggedUser = JSON.parse(storedUser);

    if (!loggedUser?.email) {
      return;
    }

    fetch(
      `http://localhost:5000/api/getWishlist/${loggedUser.email}`
    )
      .then((response) => response.json())
      .then((data) => {

        if (Array.isArray(data)) {
          setWishlistCount(data.length);
        }

      })
      .catch((error) => {
        console.error("Error fetching wishlist:", error);
      });

  }, []);


  return (

    <div className="space-y-6">


      {/* ============================================= */}
      {/* TITLE */}
      {/* ============================================= */}

      <div>

        <h2 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h2>

        <p className="text-gray-500 mt-1">
          Manage your account and preferences.
        </p>

      </div>


      {/* ============================================= */}
      {/* REAL DATA CARD */}
      {/* ============================================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


        {/* Wishlist */}

        <div
          onClick={() => setPage("wishlist")}
          className="
            bg-white
            rounded-2xl
            border
            border-gray-100
            p-5
            shadow-sm
            hover:shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            cursor-pointer
          "
        >

          <div className="flex justify-between items-start">

            <div>

              <p className="text-gray-500 text-sm">
                Wishlist
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {wishlistCount}
              </h3>

            </div>


            <div className="
              w-12
              h-12
              bg-red-50
              text-red-500
              rounded-xl
              flex
              items-center
              justify-center
            ">

              <FontAwesomeIcon
                icon={faHeart}
              />

            </div>

          </div>


          <p className="text-gray-500 text-sm mt-4">
            Saved products
          </p>

        </div>


        {/* Account */}

        <div
          onClick={() => setPage("setting")}
          className="
            bg-white
            rounded-2xl
            border
            border-gray-100
            p-5
            shadow-sm
            hover:shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            cursor-pointer
          "
        >

          <div className="flex justify-between items-start">

            <div>

              <p className="text-gray-500 text-sm">
                Account
              </p>

              <h3 className="text-xl font-bold mt-3">
                Settings
              </h3>

            </div>


            <div className="
              w-12
              h-12
              bg-gray-100
              text-gray-700
              rounded-xl
              flex
              items-center
              justify-center
            ">

              <FontAwesomeIcon
                icon={faGear}
              />

            </div>

          </div>


          <p className="text-gray-500 text-sm mt-4">
            Manage your account
          </p>

        </div>

      </div>


      {/* ============================================= */}
      {/* PERSONAL INFORMATION */}
      {/* ============================================= */}

      <div className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        shadow-sm
      ">

        <div className="px-6 py-5 border-b">

          <h3 className="text-xl font-bold text-gray-900">
            Personal Information
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            Your account information
          </p>

        </div>


        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">


          {/* First Name */}

          {user?.firstName && (

            <InfoItem
              icon={faUser}
              label="First Name"
              value={user.firstName}
            />

          )}


          {/* Last Name */}

          {user?.lastName && (

            <InfoItem
              icon={faUser}
              label="Last Name"
              value={user.lastName}
            />

          )}


          {/* Email */}

          {user?.email && (

            <InfoItem
              icon={faEnvelope}
              label="Email"
              value={user.email}
            />

          )}


          {/* Contact */}

          {user?.contact && (

            <InfoItem
              icon={faPhone}
              label="Contact"
              value={user.contact}
            />

          )}


          {/* Address */}

          {user?.address && (

            <InfoItem
              icon={faLocationDot}
              label="Address"
              value={user.address}
            />

          )}

        </div>

      </div>


      {/* ============================================= */}
      {/* ACCOUNT QUICK ACTION */}
      {/* ============================================= */}

      <div className="
        bg-gray-900
        text-white
        rounded-2xl
        p-6
        flex
        flex-col
        sm:flex-row
        items-start
        sm:items-center
        justify-between
        gap-4
      ">

        <div>

          <h3 className="text-lg font-bold">
            Want to update your password?
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            Keep your account secure.
          </p>

        </div>


        <button
          onClick={() => setPage("setting")}
          className="
            bg-white
            text-gray-900
            px-5
            py-2.5
            rounded-lg
            font-semibold
            hover:bg-gray-100
            transition
            whitespace-nowrap
          "
        >
          Account Settings
        </button>

      </div>

    </div>

  );
}


// ======================================================
// INFO ITEM
// ======================================================

function InfoItem({ icon, label, value }) {

  return (

    <div className="
      flex
      items-center
      gap-4
      p-4
      rounded-xl
      bg-gray-50
      hover:bg-gray-100
      transition
    ">

      <div className="
        w-11
        h-11
        rounded-xl
        bg-white
        shadow-sm
        flex
        items-center
        justify-center
        text-gray-700
      ">

        <FontAwesomeIcon
          icon={icon}
        />

      </div>


      <div className="min-w-0">

        <p className="
          text-xs
          text-gray-400
          uppercase
          font-semibold
        ">
          {label}
        </p>

        <p className="
          font-medium
          text-gray-800
          break-all
        ">
          {value}
        </p>

      </div>

    </div>

  );
}


// ======================================================
// ORDER LIST
// ======================================================

function OrderList() {

  /*
    We are NOT adding dummy orders here.

    Later we will connect your real Order API.
  */

  return (

    <div>

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          My Orders
        </h2>

        <p className="text-gray-500 mt-1">
          Track and manage your orders.
        </p>

      </div>


      {/* Empty state because order API is not connected yet */}

      <div className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        shadow-sm
        p-12
        text-center
      ">

        <div className="
          w-20
          h-20
          mx-auto
          rounded-full
          bg-gray-100
          text-gray-500
          flex
          items-center
          justify-center
          text-3xl
          mb-5
        ">

          <FontAwesomeIcon
            icon={faBoxOpen}
          />

        </div>


        <h3 className="text-xl font-bold">
          No orders yet
        </h3>

        <p className="text-gray-500 mt-2">
          Your orders will appear here once you place an order.
        </p>

      </div>

    </div>

  );
}


// ======================================================
// WISHLIST
// ======================================================

function WishList() {

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {

      setLoading(false);

      return;
    }


    const user = JSON.parse(storedUser);


    if (!user?.email) {

      setLoading(false);

      return;
    }


    fetch(
      `http://localhost:5000/api/getWishlist/${user.email}`
    )
      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch wishlist");
        }

        return response.json();

      })
      .then((data) => {

        if (Array.isArray(data)) {
          setWishlist(data);
        } else {
          setWishlist([]);
        }

      })
      .catch((error) => {

        console.error(
          "Error fetching wishlist:",
          error
        );

      })
      .finally(() => {

        setLoading(false);

      });

  }, []);


  return (

    <div>


      {/* ============================================= */}
      {/* TITLE */}
      {/* ============================================= */}

      <div className="
        flex
        flex-col
        sm:flex-row
        justify-between
        sm:items-end
        gap-3
        mb-6
      ">

        <div>

          <h2 className="text-2xl font-bold">
            My Wishlist
          </h2>

          <p className="text-gray-500 mt-1">
            Products you saved for later.
          </p>

        </div>


        {!loading && (

          <span className="
            bg-red-50
            text-red-500
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
            w-fit
          ">

            {wishlist.length}{" "}
            {wishlist.length === 1
              ? "Item"
              : "Items"}

          </span>

        )}

      </div>


      {/* ============================================= */}
      {/* LOADING */}
      {/* ============================================= */}

      {loading && (

        <div className="
          bg-white
          rounded-2xl
          p-12
          text-center
          border
          border-gray-100
        ">

          <p className="text-gray-500">
            Loading wishlist...
          </p>

        </div>

      )}


      {/* ============================================= */}
      {/* EMPTY WISHLIST */}
      {/* ============================================= */}

      {!loading && wishlist.length === 0 && (

        <div className="
          bg-white
          rounded-2xl
          border
          border-gray-100
          p-12
          text-center
        ">

          <div className="
            w-20
            h-20
            mx-auto
            rounded-full
            bg-red-50
            text-red-500
            flex
            items-center
            justify-center
            text-3xl
            mb-5
          ">

            <FontAwesomeIcon
              icon={faHeart}
            />

          </div>


          <h3 className="text-xl font-bold">
            Your wishlist is empty
          </h3>

          <p className="text-gray-500 mt-2">
            Products you add to your wishlist will appear here.
          </p>

        </div>

      )}


      {/* ============================================= */}
      {/* REAL WISHLIST PRODUCTS */}
      {/* ============================================= */}

      {!loading && wishlist.length > 0 && (

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-5
        ">

          {wishlist.map((item, index) => (

            <Link
              to={`/productsdetails/${item.name}`}
              key={item._id || index}
            >

              <div className="
                bg-white
                rounded-2xl
                overflow-hidden
                border
                border-gray-100
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                group
              ">


                {/* PRODUCT IMAGE */}

                <div className="
                  h-56
                  bg-gray-50
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  relative
                ">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-full
                      h-full
                      object-contain
                      p-5
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />


                  {/* Heart */}

                  <div className="
                    absolute
                    top-3
                    right-3
                    w-9
                    h-9
                    bg-white
                    rounded-full
                    shadow
                    flex
                    items-center
                    justify-center
                    text-red-500
                  ">

                    <FontAwesomeIcon
                      icon={faHeart}
                    />

                  </div>

                </div>


                {/* PRODUCT INFORMATION */}

                <div className="p-4">


                  {/* Rating */}

                  <div className="
                    flex
                    gap-1
                    text-yellow-400
                    text-sm
                    mb-2
                  ">

                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalf} />

                  </div>


                  {/* Name */}

                  <h3 className="
                    font-semibold
                    text-gray-800
                    truncate
                  ">
                    {item.name}
                  </h3>


                  {/* Price */}

                  <div className="
                    flex
                    items-center
                    justify-between
                    mt-3
                  ">

                    <p className="text-xl font-bold">
                      ₹{item.price}
                    </p>


                    <span className="
                      text-sm
                      text-gray-400
                      group-hover:text-black
                      transition
                    ">
                      View →
                    </span>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      )}

    </div>

  );
}


// ======================================================
// SETTINGS
// ======================================================

function Settings({ theme, setTheme }) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Appearance</h2>
        <p className="mt-1 text-gray-500">Choose how Furstore looks for you.</p>
      </div>

      <div className="max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">Dark Mode</h3>
            <p className="text-sm text-gray-500">
              {theme === "dark" ? "Enabled for a comfortable viewing experience." : "Disabled (light mode active)."}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 ${
              theme === "dark" ? "bg-[#0f172a]" : "bg-gray-300"
            }`}
            aria-label="Toggle theme"
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-all duration-300 ${
                theme === "dark" ? "translate-x-9" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      <ChangePassword />
    </div>
  );
}

// ======================================================
// CHANGE PASSWORD
// ======================================================

function ChangePassword() {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const storedUser = localStorage.getItem("user");

  const userId = storedUser
    ? JSON.parse(storedUser).userId
    : null;


  const handlePasswordChange = async (e) => {

    e.preventDefault();


    if (newPassword !== confirmPassword) {

      toast.error("New Password does not match", {
        position: "top-center",
        autoClose: 2000,
      });

      return;
    }


    try {

      const response = await fetch(
        `http://localhost:5000/api/changepassword/${userId}`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            currentPassword,
            newPassword,
          }),
        }
      );


      const result = await response.json();


      if (!response.ok) {

        throw new Error(
          result.message ||
          "Failed to change password."
        );

      }


      toast.success(
        "Password changed successfully!",
        {
          position: "top-center",
          autoClose: 2000,
        }
      );


      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (error) {

      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
      });

    }

  };


  return (

    <>

      <ToastContainer />


      <div>

        <div className="mb-6">

          <h2 className="text-2xl font-bold">
            Account Settings
          </h2>

          <p className="text-gray-500 mt-1">
            Manage your account security.
          </p>

        </div>


        <div className="
          bg-white
          rounded-2xl
          border
          border-gray-100
          shadow-sm
          p-6
          max-w-2xl
        ">


          {/* Header */}

          <div className="
            flex
            items-center
            gap-4
            mb-7
          ">

            <div className="
              w-12
              h-12
              rounded-xl
              bg-gray-100
              flex
              items-center
              justify-center
              text-gray-700
            ">

              <FontAwesomeIcon
                icon={faLock}
              />

            </div>


            <div>

              <h3 className="text-lg font-bold">
                Change Password
              </h3>

              <p className="text-sm text-gray-500">
                Keep your account secure.
              </p>

            </div>

          </div>


          {/* Form */}

          <form
            onSubmit={handlePasswordChange}
            className="space-y-5"
          >

            <PasswordInput
              label="Current Password"
              value={currentPassword}
              setValue={setCurrentPassword}
              placeholder="Enter current password"
            />


            <PasswordInput
              label="New Password"
              value={newPassword}
              setValue={setNewPassword}
              placeholder="Enter new password"
            />


            <PasswordInput
              label="Confirm New Password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              placeholder="Confirm new password"
            />


            <button
              type="submit"
              className="
                w-full
                sm:w-auto
                px-6
                py-3
                bg-gray-900
                hover:bg-black
                text-white
                rounded-xl
                font-semibold
                transition
                hover:shadow-lg
              "
            >
              Change Password
            </button>

          </form>

        </div>

      </div>

    </>

  );
}


// ======================================================
// PASSWORD INPUT
// ======================================================

function PasswordInput({
  label,
  value,
  setValue,
  placeholder,
}) {

  return (

    <div>

      <label className="
        block
        text-sm
        font-semibold
        text-gray-700
        mb-2
      ">
        {label}
      </label>


      <input
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required
        className="
          w-full
          px-4
          py-3
          border
          border-gray-200
          rounded-xl
          outline-none
          focus:border-gray-900
          focus:ring-2
          focus:ring-gray-900/10
          transition
        "
      />

    </div>

  );
}