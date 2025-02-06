import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { RxCross2, RxDropdownMenu } from "react-icons/rx";
import { faUser, faStar } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { CiHome, CiMedicalCross, CiSearch } from "react-icons/ci";
import { BiSolidCategory } from "react-icons/bi";
import { SiPowerpages } from "react-icons/si";
import { FaBloggerB } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BsFillCollectionFill } from "react-icons/bs";

export const Navbar = () => {
  const [btnval, setbtnval] = useState(false);
  const [Btnval, setBtnval] = useState(false);
  const [productName,setProductName] = useState("")
  const navigate = useNavigate()
  function search() {
    navigate(`/search?name=${productName}`);
  }
  const toggleSearchBar = () => {
    setBtnval(!Btnval); // Toggle between true and false
  };
  const closeSearchBar = () => {
    setBtnval(false); // Hide search bar
  };
  return (
    <>
      <div className="navbar_menu flex px-4 py-3 justify-between items-center">
        <div className="navbar_logo flex ">
          <button
            className="navbar_btn pr-2 sm:hidden"
            onClick={() => {
              setbtnval(!btnval);
            }}
          >
            {btnval ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
          <Link to="/">
            {" "}
            <img className="h-6" src={logo} alt="" />
          </Link>
        </div>
        <div className=" sm:text-lg text-sm  sm:block hidden">
          <ul className={"flex sm:gap-14 gap-6"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collections">Collection</Link>
            </li>
            <li>
              <Link to={"/productsdetails/Pot1"}>Products</Link>
            </li>
            <li>
              <Link to="/contactus">Other Pages</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar_logos flex sm:gap-12 gap-6 justify-end  items-center">
          <FontAwesomeIcon onClick={toggleSearchBar} className="cursor-pointer" icon={faMagnifyingGlass} />
          <Link to={"/dashboard"}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to={"/cart"}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
      <div
        className={`${
          btnval
            ? "sm:text-lg text-sm w-full bg-white my-2  py-10 px-16  transition-all duration-700 absolute z-10 sm:-left-full left-0"
            : "sm:text-lg text-sm bg-white my-4 mx-4 py-10 px-10 transition-all duration-700 absolute z-10 -left-full"
        }`}
      >
        <ul className="text-2xl w-full">
          <li className="my-5 w-full flex gap-2"><IoHome />
            <Link to="/">Home</Link>
          </li>
          <li className="my-5 flex gap-2"><BsFillCollectionFill />
            <Link to="/collections">Collection</Link>
          </li>
          <li className="my-5 flex gap-2"><BiSolidCategory/>
            <Link to={"/productsdetails/Pot1"}>Products</Link>
          </li>
          <li className="my-5 flex gap-2"><SiPowerpages />
            <Link to="/contactus">Other Pages</Link>
          </li>
          <li className="my-5 flex gap-2"><FaBloggerB />
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      <div className={`border-2 items-center transition-all duration-1000 px-10 w-full mx-auto absolute bg-white py-4 z-10 ${Btnval ? "top-0" : "top-[-300px]"}`}>
      <RxCross2 className="text-xl my-2" onClick={closeSearchBar}/>
        <div className="flex items-center  border-2 px-10">
          <CiSearch className="text-xl" />
          <input
            type="text"
            placeholder="Enter Your Keyword"
            className="px-10 w-full mx-auto border-none focus:outline-none"
            onChange={(e)=>setProductName(e.target.value)}
          />
          <button  onClick={search} className="cursor-pointer ">SEARCH</button>
        </div>
        
      </div>
    </>
  );
};
