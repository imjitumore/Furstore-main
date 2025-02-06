import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./Footer";

export const Blog = ({ data }) => {
  return (
    <>
      <Navbar />
              <h1 className="font-bold text-3xl sm:my-10 my-6 text-center">NEWS</h1>
              <div className="text-[12px] flex gap-2  justify-center">
                <FontAwesomeIcon icon={faHome} />
                <p className="text-center">Home News</p>
              </div>
        {data.map((val,i) => {
          return (
            <>
            <div key={i}>
            <div className="sm:my-20 my-10 sm:mx-28 mx-4" >
                <div className="">
                 <div className=""><img src={val.image} alt="" /></div>
                  <p className="text-md font-bold my-4">{val.name}</p>
                </div>
                <div className="flex  text-[#a1a1a1] gap-3 sm:text-md text-sm py-2 sm:mx-0">
                <p>September 18 2023 |</p>
                <p>Vinova Theme |</p>
                <p>0 Comments</p>
              </div>
              <hr />
              <p className="text-md py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                tenetur quod, asperiores distinctio rerum neque incidunt! Sequi
                rerum quibusdam deleniti. A beatae adipisci nam inventore
                possimus asperiores sunt ipsam accusamus quis animi?
              </p>
                <Link to={`/blogdetails/${val.id}`}>
                  <button className="news_btn my-2 rounded-lg py-3 text-center bg-[#2B5E5D] text-white  transition duration-1000 sm:px-12 px-6 border-2 text-md">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
              
            </>
          );
        })}
      <Footer/>
    </>
  );
};
