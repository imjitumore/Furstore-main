import React, { useState ,useEffect } from "react";
import { Navbar } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowDownWideShort,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Cards } from "./Home";
import { Arrial_card } from "./Arrial";
import { IoGrid } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { CiGrid31 } from "react-icons/ci";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import bigsopa1 from "../assets/bigsopa1.jpg"
import bigsopa2 from "../assets/bigsopa2.jpg"
import bigsopa3 from "../assets/bigsopa3.jpg"
import bigsopa4 from "../assets/bigsopa4.jpg"
import bigchair3 from "../assets/bigchair1.jpg"
import bigchair1 from "../assets/bigchair3.jpg"
import bigchair2 from "../assets/bigchair2.jpg"
import bigchair4 from "../assets/bigchair4.jpg"
import bigflowerpot1 from "../assets/bigflowerpot1.jpg"
import bigflowerpot2 from "../assets/bigflowerpot2.jpg"
import bigflowerpot3 from "../assets/bigflowerpot3.jpg"
import bigflowerpot4 from "../assets/bigflowerpot4.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export const Collections = ({data}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling effect
    });
  };
  return (
    <>
      <Navbar />
      <Bookshelf />
      <Stocks />
      <Allproducts data={data}/>
      <Tags/>
      <Footer />
    </>
  );
};



function Bookshelf() {
  return (
    <>
      <div className="bookshelf_main bg-[#f5f5f5] sm:h-80 h-60 relative">
        <div className="center flex flex-col  absolute top-[40%] left-10">
          <h1 className="font-bold text-3xl ">BOOKSHELF</h1>
          <div className="text-[12px] flex gap-2 my-4">
            <FontAwesomeIcon icon={faHome} />
            <p className="">Home Bookshelf</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Stocks() {
  return (
    <>
      <div className="stock_main">
        <div className="filterBy flex items-center sm:mx-16 mx-6 my-5">
          <FontAwesomeIcon icon={faArrowDownWideShort} />
          <p className="text-2xl font-bold">FILTER BY</p>
        </div>
        <div className="hr sm:mx-16 my-6">
          <hr />
        </div>
        <div className=" sm:mx-14 mx-6 sm:flex grid grid-cols-4 sm:justify-center gap-2">
          <select className="slct sm:py-3 py-1 sm:text-md text-[12px]  sm:px-4  text-center">
            <option className="" value="">Availabitlity</option>
          </select>
          <select className="sm:py-3 py-1 sm:text-md text-[12px]  sm:px-4 px-2  text-center  slct">
            <option value="">Price</option>
          </select>
          <select className="sm:py-3 py-1 sm:text-md text-[12px]  sm:px-4 px-2  text-center slct">
            <option value="">Product Type</option>
          </select>
          <select className="sm:py-3 py-1 sm:text-md text-[12px]  sm:px-4 px-2  text-center slct">
            <option value="">More Filters</option>
          </select>
          <select className="sm:py-3 py-1 sm:text-md text-[12px]  sm:px-4 px-2  text-center slct">
            <option value="">Brand</option>
          </select>
          <select className="sm:py-3 py-1 sm:text-md text-[12px]  sm:px-4 px-2  text-center slct">
            <option value="color">Color</option>
          </select>
          <select className="sm:py-3 py-1 sm:text-md text-[12px]  sm:px-4 px-2  text-center slct">
            <option value="">Size</option>
          </select>
        </div>

        <button className="text-white bg-[#387581] sm:text-sm text-[13px] sm:py-3 sm:px-6 py-2 px-3 rounded-md my-4 sm:mx-14 mx-6">
          <FontAwesomeIcon icon={faTrash} /> CLEAR ALL
        </button>
      </div>
    </>
  );
}

function Allproducts(props) {
  const [value, setVal] = useState();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling effect
    });
  };
  return (
    <>
      <div className="stucture" >
        <div className="sorted_grid flex items-center justify-between pr-10">
          <select className="sel py-3 px-3 sm:mx-14 mx-1 my-4">
            <option value="">Sort By featured</option>
          </select>
          <div className="grid_boxes flex sm:text-3xl text-xl gap-3">
            <TfiLayoutGrid4Alt
              onClick={() => {
                setVal(1);
              }}
            />
            <BsFillGrid3X3GapFill onClick={() => setVal(3)} />
            <IoGrid onClick={() => setVal(2)} />
            <CiGrid31 onClick={() => setVal(0)} />
          </div>
        </div>
        <div
          className="grid sm:grid-cols-5 grid-cols-2" onClick={scrollToTop}
        >
          {props.data.map((val) => {
            return(
            <Link to={`/productsdetails/${val.name}`} key={val.id}>
              <Arrial_card
                image={val.image}
                name={val.name}
                price={val.price}
              />
            </Link>
          )})}
        </div>
      </div>
    </>
  );
};

function Tags()
{
  return(
    <>
      <div className="Tags px-10 bg-[#f5f5f5] py-10 w-full sm:block hidden">
        <p className="text-sm font-bold py-2">TAGS</p>
        <div className="btns text-sm flex w-full justify-evenly gap-2 py-8">
        <button className="border-2 px-3 py-2 rounded-md bg-[white] hover:bg-[#387581] hover:text-white w-full">13.7'x6.3'x4'</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">23.7'x12.3'x8'</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">28.7'x16.3'x10'</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">Black</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">Blue</button>
        <button className="border-2 px-3 py-2 w-full rounded-md hover:bg-[#387581] hover:text-white bg-[white]">Gray</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">Orange</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">Pink</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">Red</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">White</button>
        </div>
        <h1 className="font-bold text-2xl py-5">BOOKSHELF</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ipsum eu quam blandit maximus. Donec at lacus lacus. Donec ultricies lacus libero, fermentum mollis velit accumsan ac. Morbi in nunc erat. Sed a ligula tristique mi aliquam pellentesque. Ut malesuada nisl eros, ut sollicitudin ex mattis quis. Praesent cursus a augue ac placerat. Nam mattis mi ac dui suscipit egestas. Vestibulum lorem libero, feugiat dapibus urna id, gravida varius tellus. Nam sed congue quam. Sed sit amet libero augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et efficitur ante. Vestibulum quis volutpat felis, volutpat ornare nunc. Vivamus ac aliquam justo. Mauris ultrices posuere velit, eu elementum mauris.
        <br /> Phasellus vitae egestas orci. Pellentesque mi ex, vestibulum nec neque mollis, ultricies mollis elit. Sed purus elit, aliquet at erat id, efficitur vehicula velit. Fusce tristique lectus a velit finibus, sed facilisis odio placerat. Ut quis efficitur mi, quis porttitor ipsum. Phasellus euismod est vitae neque consectetur, nec laoreet enim pharetra. Aliquam non sem sit amet nunc consectetur ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed orci non magna consectetur viverra. Suspendisse at lectus lacus. Suspendisse eget ultricies mi. Pellentesque rutrum porta lorem, ac interdum nisl faucibus at. Aliquam turpis metus, aliquam at bibendum scelerisque, posuere blandit urna. Nunc sit amet lacus purus. In mattis laoreet purus eget pulvinar. Quisque non enim mollis, ultricies quam efficitur, efficitur nunc.</p>        
      </div>

      <div className="card grid sm:grid-cols-3 gap-3 py-10 mx-10">
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
        </div>
    </>
  )
}

export function RelatedProducts() {
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling effect
    });
  };
  const dataa = [
    {
        "id":1,
        "image":bigsopa1,
        "name":"Sopa1",
        "price":"$98.23",
        "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
        "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
        "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
        "Quantity":"5"
    }
    ,
    {
        "id":2,
        "image":bigsopa2,
        "name":"Sopa2",
        "price":"$200.23",
        "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
        "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
        "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
        "Quantity":"8"
    }
    ,
    {
        "id":3,
        "image":bigsopa3,
        "name":"Sopa3",
        "price":"$70.23",
        "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
        "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
        "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
        "Quantity":"4"
    }
    ,
    {
        "id":4,
        "image":bigsopa4,
        "name":"Sopa4",
        "price":"$120.23",
        "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
        "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
        "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
        "Quantity":"7"
    }
    ,    {
        "id":5,
        "image":bigchair1,
        "name":"Chair1",
        "price":"$98.23",
        "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
        "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
        "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
        "Quantity":"5"
    }
    ,
    {
        "id":6,
        "image":bigchair2,
        "name":"Chair2",
        "price":"$200.23",
        "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
        "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
        "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
        "Quantity":"8"
    },
    {
        "id":7,
        "image":bigchair3,
        "name":"Chair3",
        "price":"$98.23",
        "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
        "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
        "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
        "Quantity":"5"
    }
    ,
    {
        "id":8,
        "image":bigchair4,
        "name":"Chair4",
        "price":"$200.23",
        "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
        "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
        "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
        "Quantity":"8"
    }
    ,
    {
        "id":9,
        "image":bigflowerpot1,
        "name":"Flower pot1",
        "price":"$70.23",
        "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
        "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
        "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
        "Quantity":"4"
    }
    ,
    {
        "id":10,
        "image":bigflowerpot4,
        "name":"Flower pot4",
        "price":"$120.23",
        "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
        "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
        "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
        "Quantity":"7"
    }
    ,    {
        "id":11,
        "image":bigflowerpot2,
        "name":"Flower pot2",
        "price":"$98.23",
        "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
        "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
        "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
        "Quantity":"5"
    }
    ,
    {
        "id":12,
        "image":bigflowerpot3,
        "name":"Flower pot3",
        "price":"$200.23",
        "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
        "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
        "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
        "Quantity":"8"
    }
];

const settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768, // sm screens (e.g., tablets and below)
      settings: {
        slidesToShow: 2,  // Show 2 slides on smaller screens
        slidesToScroll: 2, 
        infinite: true,
      }
    },
    {
      breakpoint: 430, // xs screens (e.g., mobile)
      settings: {
        slidesToShow: 2,  // Show 1 slide on extra small screens
        slidesToScroll: 2, 
        infinite: true,
      }
    }
  ]
};
  
  return (
    <>
      <div className=" my-32">
        <div className="flash_title  text-center my-5 ">
          <p className=" text-3xl main_text">Related Products</p>
        </div>
        <div>
          <div className=" py-6 my-8  w-full" onClick={scrollToTop}>
          <Slider {...settings}>
            {dataa.map((val) => {     
              return (
                <Link to={`/productsdetails/${val.name}`}>
                
                <Arrial_card
                  key={val.id}
                  image={val.image}
                  name={val.name}
                  price={val.price}
                />
                </Link>
              );
            })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}