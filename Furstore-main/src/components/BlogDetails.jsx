import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
export const BlogDetails = ({ data }) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  
  useEffect(() => {
    if (data.length > 0) {
      const findProduct = data.find((item) => item.id === parseInt(id));
      setProduct(findProduct);
    }
  }, [data, id]);

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Navbar/>
      <div>
        <h2 className="sm:text-3xl text-2xl text-center font-bold py-10">
          {product.name.toUpperCase()}
        </h2>
        <div className="text-center flex justify-center sm:mx-32">
          <img className="w-full" src={product.image} alt="" />
        </div>
        <div className="sm:mx-32 mx-6 sm:my-16 my-6">
          <p className="text-lg font-bold py-2">{product.name}</p>
          <p className="text-md py-3">
            Valentine’s Day 2021 has no choice but to unfold rather differently
            than usual, so we already know it will be one to remember.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim
            veniam libero lobortis in dictum velit luctus. Donec imperdiet
            tincidunt interdum.
          </p>
          <p className="text-md font-bold py-1">
            Here, we bring you a look-see:
          </p>
          <p className="text-md py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim
            veniam pulvinar dui viverra libero lobortis in dictum velit luctus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod, neque
            nibh pretium lorem, at ornare risus sem et risus. Curabitur pulvinar
            dui viverra libero lobortis in dictum velit luctus. Donec imperdiet
            tincidunt interdum
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim
            veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur ut iaculis arcu. Proin tincidunt, ipsum nec vehicula
            euismod, neque nibh pretium lorem, at ornare risus sem et risus.
            Curabitur pulvinar dui viverra libero lobortis in dictum velit
            luctus. Donec imperdiet tincidunt interdum
            <br />
            <br />
            Lorem sum dolor sit amet, consectetur adipisicing elit, do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod neque{" "}
          </p>
          <hr />
          <div className="flex  text-[#a1a1a1] gap-3 text-sm py-2">
            <p>September 18 2023 |</p>
            <p>Vinova Theme |</p>
            <p>0 Comments</p>
          </div>
          <hr />
        </div>
      </div>

      <div className="form sm:mx-32 mx-5 my-32">
        <div className="inputs ">
          <h1 className="text-2xl font-bold sm:my-4 my-2">SUBMIT COMMENT</h1>
              <div className="line1 sm:flex  w-full gap-5">
                <input className="sm:my-0 my-1" type="text" placeholder="Your Name" />
                <input className="sm:my-0 my-1" type="email" placeholder="Your Email" />
                <input className="sm:my-0 my-2" type="number" placeholder="Your Number" />
              </div>
              <br />
              <div className="line2">
                <textarea name="" id="" cols="30" rows="8" placeholder="Your Address"></textarea>
              </div>
            </div>
            <button className='news_btn my-6  rounded-lg py-3 text-center bg-[#2B5E5D] text-white  transition duration-1000 px-12 border-2 text-sm' >SEND MESSAGE</button>
      </div>
      <Footer/>
    </>
  );
};
