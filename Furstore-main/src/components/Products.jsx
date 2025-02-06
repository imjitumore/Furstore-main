import React, { useEffect, useState } from "react";
import { Arrial_card } from "./Arrial";
import flowerpot from "../assets/bigflowerpot1.jpg";
import flowerpot2 from "../assets/bigflowerpot2.jpg";
import flowerpot3 from "../assets/bigflowerpot3.jpg";
import whitepot from "../assets/bigflowerpot4.jpg";
import speaker from "../assets/bigsopa_2.jpg";
import amet from "../assets/bigamet2.jpg";
import cum from "../assets/bigcum1.jpg";
import lamp2 from "../assets/biglamp2.jpg";
import pot from "../assets/bigpot2.jpg";
import greenpot from "../assets/bigpot3.jpg";
import chair from "../assets/bigchair2.jpg";
import chair2 from "../assets/bigchair4.jpg";
import chair3 from "../assets/bigchair3.jpg";
import chair4 from "../assets/bigchair5.jpg";
import ushi2 from "../assets/bigushi2.jpg";
import table from "../assets/bigtable2.jpg";
import sopa from "../assets/bigsopa4.jpg";
import sopa2 from "../assets/bigsopa2.jpg";
import sopa3 from "../assets/bigsopa3.jpg";
import mainsopa from "../assets/bigsopa1.jpg";
import stonepot from "../assets/bigpot3.jpg";
import latkan2 from "../assets/biglatkan2.jpg";
import lamp3 from "../assets/biglamp3.jpg";
import kapat from "../assets/furtable2.jpg";
import plant2 from "../assets/bigflowerpot5.jpg";
import wati from "../assets/bigcum2.jpg";
import kapat2 from "../assets/furtable3.jpg";
import dori from "../assets/dori1.jpg";
import clock from "../assets/bigclock3.jpg";
import { Link } from "react-router-dom";

export const Products = (props) => {

  const[hot,setHot]=useState()
  useEffect(()=>{

  },[hot])
  const [state1,setState1]=useState(
    [
      {
        images:sopa,
        name:"Fiamond Helo Stud Doneco",
        price:"$330"
      },
      {
        images:speaker,
        name:"Acamond Helo Stud Doneco",
        price:"$200"
      },
      {
        images:sopa2,
        name:"Diamond Helo Stud Doneco",
        price:"$230"
      },
      {
        images:sopa3,
        name:"Ciamond Helo Stud Doneco",
        price:"$230"
      }
    ]
  )

  const[state2,setState2]=useState(
   [
    {
      images:mainsopa,
        name:"Fiamond Helo Stud Doneco",
        price:"$330"
    }
   ]
  )

  const [state3,setState3]=useState(
    [
      {
        images:chair,
        name:"Fiamond Helo Stud Doneco",
        price:"$330"
      },
      {
        images:chair2,
        name:"Acamond Helo Stud Doneco",
        price:"$200"
      },
      {
        images:chair3,
        name:"Diamond Helo Stud Doneco",
        price:"$230"
      },
      {
        images:pot,
        name:"Ciamond Helo Stud Doneco",
        price:"$230"
      }
    ]
  )

  return (
    <>
      <div className="products_main my-20 text-center">
        <div className="products_title my-2">
          <h1 className="main_text text-center sm:text-5xl text-4xl my-4">Our Products</h1>
        </div>
        <div className="products_details w-full">
          <div className="navbar_ull text-center">
            <ul className="product_list flex justify-center w-full sm:gap-20  gap-6 my-12 sm:text-lg text-md cursor-pointer">
              <li>HOT</li>
              <li onClick={()=>{
                setState1(
                  [
                    {
                      images:chair,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    },
                    {
                      images:pot,
                      name:"Acamond Helo Stud Doneco",
                      price:"$200"
                    },
                    {
                      images:table,
                      name:"Diamond Helo Stud Doneco",
                      price:"$230"
                    },
                    {
                      images:whitepot,
                      name:"Ciamond Helo Stud Doneco",
                      price:"$230"
                    }
                  ]
                )

                setState2(
                  [
                    {
                      images:flowerpot,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    }
                  ]
                )

                setState3(
                  [
                    {
                      images:amet,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    },
                    {
                      images:cum,
                      name:"Acamond Helo Stud Doneco",
                      price:"$200"
                    },
                    {
                      images:lamp2,
                      name:"Diamond Helo Stud Doneco",
                      price:"$230"
                    },
                    {
                      images:greenpot,
                      name:"Ciamond Helo Stud Doneco",
                      price:"$230"
                    }
                  ]
                )
              }}
              >ARRIALS</li>
              <li onClick={()=>{
                setState1(
                  [
                    {
                      images:kapat2,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    },
                    {
                      images:kapat,
                      name:"Acamond Helo Stud Doneco",
                      price:"$200"
                    },
                    {
                      images:lamp3,
                      name:"Diamond Helo Stud Doneco",
                      price:"$230"
                    },
                    {
                      images:stonepot,
                      name:"Ciamond Helo Stud Doneco",
                      price:"$230"
                    }
                  ]
                )

                setState2(
                  [
                    {
                      images:lamp2,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    }
                  ]
                )

                setState3(
                  [
                    {
                      images:chair4,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    },
                    {
                      images:cum,
                      name:"Acamond Helo Stud Doneco",
                      price:"$200"
                    },
                    {
                      images:sopa3,
                      name:"Diamond Helo Stud Doneco",
                      price:"$230"
                    },
                    {
                      images:ushi2,
                      name:"Ciamond Helo Stud Doneco",
                      price:"$230"
                    }
                  ]
                )
              }}>
                TRENDING
              </li>
              <li onClick={()=>{
                setState1(
                  [
                    {
                      images:plant2,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    },
                    {
                      images:chair2,
                      name:"Acamond Helo Stud Doneco",
                      price:"$200"
                    },
                    {
                      images:wati,
                      name:"Diamond Helo Stud Doneco",
                      price:"$230"
                    },
                    {
                      images:mainsopa,
                      name:"Ciamond Helo Stud Doneco",
                      price:"$230"
                    }
                  ]
                )

                setState2(
                  [
                    {
                      images:clock,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    }
                  ]
                )

                setState3(
                  [
                    {
                      images:latkan2,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    },
                    {
                      images:dori,
                      name:"Acamond Helo Stud Doneco",
                      price:"$200"
                    },
                    {
                      images:flowerpot2,
                      name:"Diamond Helo Stud Doneco",
                      price:"$230"
                    },
                    {
                      images:flowerpot3,
                      name:"Ciamond Helo Stud Doneco",
                      price:"$230"
                    }
                  ]
                )
              }} 
              >SALE OFF</li>
            </ul>
          </div>

          <div className="products_center sm:flex w-full">
            <div className="product_one grid grid-cols-2 px-0 sm:w-[35%]">
              {
                state1.map((val)=>{
                  return(
                    <Arrial_card
                      image={val.images}
                      name={val.name}
                      price={val.price}
                  />
                  )
                })
              }
            </div>

            <div className="products_two flex justify-center sm:w-[30%]">
              {
                state2.map((val)=>{
                  return(
                    <Arrial_card
                      image={val.images}
                      name={val.name}
                      price={val.price}
                  />
                  )
                })
              }
            </div>
            <div className="product_three grid grid-cols-2 sm:w-[35%]">
            {
                state3.map((val)=>{
                  return(
                    <Arrial_card
                      image={val.images}
                      name={val.name}
                      price={val.price}
                  />
                  )
                })
              }
            </div>
          </div>
        </div>
        <Link to="/collections"><button className='product_btn text-lg text-center border-2 border-[#2B5E5D] hover:text-white  transition duration-1000 px-12 py-3 hover:bg-[#2B5E5D] my-16'>View More</button></Link>
      </div>
    </>
  );
};


