import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import blog1 from "../assets/blog_1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog_3.jpg";
import blog4 from "../assets/blog_4.jpg";
import blog5 from "../assets/blog_5.jpg";
import blog6 from "../assets/blog_6.jpg";
import blog7 from "../assets/blog_7.jpg";
import blog8 from "../assets/blog_8.jpg";
import blog9 from "../assets/blog_9.jpg";
import blog10 from "../assets/blog_10.jpg";
import blog11 from "../assets/blog_11.jpg";
import blog12 from "../assets/blog_12.jpg";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const Blog = ({ data }) => {
  const [val, setval] = useState([
    {
      image: blog1,
      name: "Pellensque nunc condentum",
    },
    {
      image: blog2,
      name: "Aliquam vitae maximus justo",
    },
    {
      image: blog3,
      name: "Nullam consectetur lacus nec",
    },
  ]);

  const [value, setValue] = useState(false);
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  return (
    <>
      <div className="blogg">
        <Navbar />
        <div className="header text-center my-20">
          <h1 className="font-bold text-3xl ">NEWS</h1>
          <div className="text-[12px] flex gap-2 my-4 justify-center">
            <FontAwesomeIcon icon={faHome} />
            <p className="text-center">Home News</p>
          </div>
        </div>
        <div className="newses">
          {val.map((item) => {
            return <Temp data={data} image={item.image} name={item.name} />;
          })}
        </div>
        <div className="btns text-center my-5">
          <button
            onClick={() => {
              setValue(true);
              setval([
                {
                  image: blog1,
                  name: "Pellensque nunc condentum",
                },
                {
                  image: blog2,
                  name: "Aliquam vitae maximus justo",
                },
                {
                  image: blog3,
                  name: "Nullam consectetur lacus nec",
                },
              ]);
            }}
            className={`py-3 px-5 mx-3 rounded-[50%]  border-2 hover:bg-[#2B5E5D] hover:text-white ${
              value ? "active" : ""
            }`}
          >
            1
          </button>

          <button
            onClick={() => {
              setValue1(true);
              setval([
                {
                  image: blog4,
                  name: "Quisque dictum leo venenatis",
                },
                {
                  image: blog5,
                  name: "Aliquam vitae maximus justo",
                },
                {
                  image: blog6,
                  name: "Elementum orci sollicitudin non",
                },
              ]);
            }}
            className={`py-3 px-5 mx-3 rounded-[50%]  border-2 hover:bg-[#2B5E5D] hover:text-white ${
              value1 ? "active" : ""
            }`}
          >
            2
          </button>

          <button
            onClick={() => {
              setValue2(true);
              setval([
                {
                  image: blog7,
                  name: "Pellensque nunc condentum",
                },
                {
                  image: blog8,
                  name: "Elementum orci sollicitudin non",
                },
                {
                  image: blog9,
                  name: "Quisque dictum leo venenatis",
                },
              ]);
            }}
            className={`py-3 px-5 mx-3 rounded-[50%]  border-2 hover:bg-[#2B5E5D] hover:text-white ${
              value2 ? "active" : ""
            }`}
          >
            3
          </button>

          <button
            onClick={() => {
              setValue3(true);
              setval([
                {
                  image: blog10,
                  name: "Duis ipsum lorem cursus ferment",
                },
                {
                  image: blog11,
                  name: "Consectetur adipiscing elit",
                },
                {
                  image: blog12,
                  name: "Proin tincidunt ipsum nec",
                },
              ]);
            }}
            className={`py-3 px-5 mx-3 rounded-[50%]  border-2 hover:bg-[#2B5E5D] hover:text-white ${
              value3 ? "active" : ""
            }`}
          >
            4
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

function Temp(props) {
  return (
    <>
      {props.data.map((item) => {
        return (
          <Link to={`/blogdetails/${item.name}`} key={item.id}>
            <div className="card py-8 px-20">
              <div>
                <img className="" src={props.image} alt="props.image" />
              </div>
              <p className="text-xl font-bold py-3 ">{props.name}</p>
              <div className="flex  text-[#a1a1a1] gap-3 text-md py-2">
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
            </div>
          </Link>
        );
      })}
    </>
  );
}
