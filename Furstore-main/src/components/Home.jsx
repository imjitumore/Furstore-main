import React from "react";
import "../style/home.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import bg from "../assets/background.jpg";
import { Navbar } from "./Navbar";
import { Arrial } from "./Arrial";
import { Products } from "./Products";
import { Testimonil } from "./Testimonil";
import { News } from "./News";
import { Footer } from "./Footer";
export const Home = ({dataa,setdata}) => {
  return (
    <>
      <Navbar />
      <div className="home_main">
        <div className="bgimg relative">
          <img src={bg} alt="" />
        </div>
        <div className="home_title text-center absolute top-20 flex flex-col justify-center w-full">
          <h1 className="home_title_text sm:text-5xl text-2xl text-[white] sm:pt-16">
            Modern Living Room
          </h1>
          <p className="home_lorem_text text-[white] sm:text-lg text-sm my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <Advertisement />
      <div className="Card_section sm:grid grid-cols-4  gap-5 mx-6 my-36 ">
        <Cards
          name="Extra Shipping"
          para="lorem ipsum dolor sit amet consectetur adipisicing sit amet consectetur adipisicing elit. "
        />
        <Cards
          name="Return Policy"
          para="lorem ipsum dolor sit amet sit amet consectetur adipisicing consectetur adipisicing elit. "
        />
        <Cards
          name="Payment Secured"
          para="lorem ipsum dolor sit sit amet consectetur adipisicing amet consectetur adipisicing elit. "
        />
        <Cards
          name="Money Back Guarantee"
          para="lorem ipsum dolor sit amet consectetur adipisicing sit amet consectetur adipisicing elit. "
        />
      </div>
      <Arrial dataa={dataa} setdataa={setdata}/>
      <Products />
      <Testimonil />
      <News />
      <Footer />
    </>
  );
};

const Advertisement = () => {
  return (
    <>
      <div className="adver_main w-full">
        <div className="adver_box grid sm:grid-cols-3 gap-4 my-8 mx-7">
          <div className="imgg relative">
            <img src={img1} alt="" />
            <div className="adver_one py-6 px-10 absolute top-4">
              <h1 className="adver_card_title sm:text-3xl text-xl font-bold">NEW PLANT</h1>
              <p>Get up to 40% off</p>
              <button className="bg-[black] text-white sm:py-2 py-1 sm:px-8 px-4 sm:my-10 my-2 sm:text-md text-sm cursor-pointer adver_card_btn">
                SHOP NOW
              </button>
            </div>
          </div>

          <div className="imgg relative">
            <img src={img2} alt="" />
            <div className="adver_two adver_one py-6 px-10 absolute top-4">
              <h1 className="adver_card_title sm:text-3xl text-xl font-bold text-white">
                CHAIN LAMP
              </h1>
              <p className="text-white">Get up to 60% off</p>
              <button  className="bg-[white] font-semibold sm:py-2 py-1 sm:px-8 px-4 sm:my-10 my-2 sm:text-md text-sm cursor-pointer adver_card_btn">
                SHOP NOW
              </button>
            </div>
          </div>

          <div className="imgg relative">
            <img src={img3} alt="" />
            <div className="adver_three adver_one py-6 px-10 absolute top-4">
              <h1 className="adver_card_title sm:text-3xl text-xl font-bold text-[black] ">
                NEW CHAIR
              </h1>
              <p>Get up to 40% off</p>
              <button  className="bg-[black] text-white sm:py-2 py-1 sm:px-8 px-4 sm:my-10 my-2 sm:text-md text-sm cursor-pointer adver_card_btn">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Cards = (props) => {
  return (
    <>
      <div className="cards_main text-center my-2">
        <div className="card_box w-full h-full border-2 py-6 px-2">
          <h1 className="card_text text-center text-xl py-3">{props.name}</h1>
          <p className="text-sm text-[#494848] py-2">{props.para}</p>
        </div>
      </div>
    </>
  );
};
