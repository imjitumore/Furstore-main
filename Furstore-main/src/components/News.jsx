import React, { useEffect, useState } from "react";
import longsopa from "../assets/longsopa.png";
import pics1 from "../assets/pics1.png";
import pics2 from "../assets/pics2.png";
import pics3 from "../assets/pics3.png";
import pics4 from "../assets/pics4.png";
import pics5 from "../assets/pics5.png";
import pics6 from "../assets/pics6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export const News = () => {

  const[data,setData]=useState([])
   useEffect(()=>{
    fetch("News.json").then((response)=>{
        return response.json()
    })
    .then((result)=>{
        setData(result)
    })
   },[data])

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  return (

    <>
      <div className="news_main my-40 w-[90%]">
        <div className="main_text new_title sm:text-6xl text-5xl  text-center sm:my-20 my-10">
          Latest News
        </div>
        <div className="new_content">
        <Slider {...settings}>
            {data.map((item)=>{
              return(<>
               <Link to={`/blogdetails/${item.id}`} key={item.id}>
              <LatestNews
                img={item.image}
                date={"Sep 18 2020 - By Vinivo theme"}
                title={item.name}
                para={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae animi tenetur odio. Explicabo alias, Non quae animi tenetur odio. Explicabo alias, quibusdam dolores deleniti debitis esse."
                }
              />
              </Link>
              </>
              )
            })}
        </Slider>
        </div>
      </div>

      <div className="news_deal sm:grid grid-cols-2 py-10 sm:px-14 px-8 my-28 gap-20 bg-[#F5F5F5]">
        <div className="deal_left">
          <img src={longsopa} alt="" />
        </div>
        <div className="deal_right py-6">
          <p className="new__text sm:text-5xl text-4xl my-8">Deal Of The Day</p>
          <p className="news_lorem_text sm:text-xl text-lg my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptatum, numquam, delectus ea voluptates dignissimos laborum
            sequi nesciunt facilis ullam eveniet quo veritatis perferendis.
            Aperiam.
          </p>
          <button className="news_btn sm:my-6 rounded-lg py-3 text-center bg-[#2B5E5D] text-white  transition duration-1000 px-12 border-2 text-lg">
            Shop now
          </button>
        </div>
      </div>

      <Gallary />
    </>
  );
};

function LatestNews(props) {
  return (
    <>
        <div className="news grid sm:grid-cols-2 sm:px-10 px-6 gap-12">
            <div className="news_left">
              <img src={props.img} alt="" />
            </div>
            <div className="news_right">
              <p className="text-md my-3">{props.date}</p>
              <p className="text__news sm:text-4xl text-3xl sm:my-6 my-3">{props.title}</p>
              <p className="text_para sm:text-xl text-lg  my-4">{props.para}</p>
            </div>
          </div>
    </>
  );
}

function Gallary() {
  return (
    <>
      <div className="gallary_main my-28">
        <div className="main_text gallary_title sm:text-6xl text-4xl text-center my-14">
          Gram Gallery
        </div>
        <div className="gallery_pics grid sm:grid-cols-6 grid-cols-3 gap-6 px-4">
          <img src={pics1} alt="" />
          <img src={pics2} alt="" />
          <img src={pics3} alt="" />
          <img src={pics4} alt="" />
          <img src={pics5} alt="" />
          <img src={pics6} alt="" />
        </div>
      </div>
    </>
  );
}
