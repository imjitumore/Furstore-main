import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Collections } from "./components/Collections";
import { ProductsDetails } from "./components/ProductsDetails";
import { ContactUs } from "./components/ContactUs";
import { Blog } from "./components/Blog";
import { BlogDetails } from "./components/BlogDetails";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Dashboard } from "./components/Dashboard";
import { Search } from "./components/Search";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });
  const [authMessage, setAuthMessage] = useState("");

  useEffect(() => {
    if (authMessage) {
      const timer = setTimeout(() => setAuthMessage(""), 3000); // Clear message after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [authMessage]);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      setAuthMessage("Please Login Your Account");
      notifyError();
      return <Navigate to="/login" />;
    }
    return children;
  };


  const [data, setData] = useState([]);
    const [blog, setBlog] = useState([]);
    const [dataa, setDataa] = useState([]);
  
    useEffect(() => {
      fetch("Data.json")
        .then((response) => response.json())
        .then((result) => setData(result));
  
      fetch("News.json")
        .then((response) => response.json())
        .then((result) => setBlog(result));
    }, []);
  
    useEffect(() => {
      const getProducts = async () => {
        const response = await fetch("https://furstorebackend.onrender.com/api/getProducts");
        const result = await response.json();
        setData(result.products);
      };
      getProducts();
    }, []);
    
    const notifyError = () => {
      toast.error('🚨 Please Login Your Account', {
        position: "top-middle",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })}


  return (

    <BrowserRouter>
      <ToastContainer/>
      {/* {authMessage && <div className="text-2xl font-bold  flex justify-center text-[red] py-2">{authMessage}</div>} */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections data={data} />} />
         <Route path="/productsdetails/:name" element={<ProductsDetails data={data} setdataa={setDataa} dataa={dataa} />} />
         <Route path="/contactus" element={<ContactUs />} />
         <Route path="/blog" element={<Blog data={blog} />} />
         <Route path="/blogdetails/:id" element={<BlogDetails data={blog} />} />
         <Route path="/search" element={<Search />} />
         <Route path="/cart" element={user ? <Cart dataa={dataa} /> : <Navigate to="/login" />} />
         <Route path="/checkout" element={user ? <Checkout dataa={dataa} /> : <Navigate to="/login" />} />

        {/* Protected Routes */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard setUser={setUser} />
            </ProtectedRoute>
          }
        />

        {/* Authentication */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
