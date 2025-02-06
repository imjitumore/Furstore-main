import React, { useEffect, useState } from "react";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import one from "../assets/one.png";
import two from "../assets/two.png";
import { Link } from "react-router-dom";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Arrial = ({dataa,setdataa}) => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("Cards.json")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setCard(result);
      });
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    arrow:false
  };

  const img = [
    {
      image: slide1,
    },
    {
      image: slide2,
    },
    {
      image: slide3,
    },
  ];

  return (
    <>
      <div className="arrial_main">
        <div className="arrial_title text-center sm:my-20 my-10">
          <h1 className="main_text text-5xl ">New Arrial</h1>
        </div>
        <div className="arrial_center sm:flex h-full">
          <div className="arrial_slider sm:w-[40%] w-full h-full">
            <Slider {...settings}>
              {img.map((item, i) => {
                return <img className="" src={item.image} alt="" />;
              })}
            </Slider>
          </div>
          <div className="arrial_cards w-full grid grid-cols-3 sm:my-0 my-10">
            {card.map((item) => {
              return (
                <Link to={`/productsdetails/${item.name}`}>
                  <Arrial_card
                  dataa={dataa}
                  setdataa={setdataa}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="arrial_bottom grid sm:grid-cols-2 my-32">
          <div className="arrial_one mx-3  sm:my-0 my-8">
            <div className="center relative">
              <img src={one} alt="" />
              <p className="arrial_two_text sm:text-4xl text-2xl absolute top-20 px-10">
                SIDE TABLE
              </p>
              <p className="arrial_two_textt cursor-pointer absolute top-28 px-10">
                Discovery now
              </p>
            </div>
          </div>
          <div className="arrial_two mx-3 ">
            <div className="center relative">
              <img src={two} alt="" />
              <p className=" sm:text-4xl text-2xl arrial_two_text absolute top-20 px-10">
                HANGING LIGHT
              </p>
              <p className="arrial_two_textt cursor-pointer absolute top-28 px-10">
                Discovery now
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export function Arrial_card(props,{dataa , setdataa}) {
  const [val, setVal] = useState(false);
  useEffect(() => {
    setVal(1);
  });

  function getData(item)
  {
    setdataa([...dataa,item])
  }

  const [value, setValue] = useState(false);
  return (
    <>
      <div className="card_main px-1 w-full h-full">
        <div className={`${val == 1 ? "GIRD" : ""} w-full h-full`}>
          <div className="relative group">
            <div className="flex justify-center items-center group overflow-hidden px-2">
              <img
                className="center_img text-center relative group-hover:scale-125 transition-all duration-300 w-full"
                src={props.image}
                alt={props.image}
              />
            </div>
            <button
            onClick={()=>setdataa()}
              className={` absolute text-sm top-[3%] transition-all duration-500 bg-slate-900 text-white py-2 px-2 w-24 left-1/2 translate-x-[-50%] rounded-lg scale-0 group-hover:scale-100`}>
              Add To Cart
            </button>
          </div>
          <div className="py-1">
            <div className="star text-center py-2 text-[#Ffd700] justify-center flex text-sm gap-1">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalf} />{" "}
            </div>
            <p className="card_texts text-center text-lg">{props.name}</p>
            <p className="card_price text-center text-sm py-2">{props.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
