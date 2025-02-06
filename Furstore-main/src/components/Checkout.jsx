import React, { useEffect, useState } from "react";
import visa from "../assets/visa.svg";
import dot2 from "../assets/Dot2.svg";
import discover from "../assets/discover.svg";
export const Checkout = ({ dataa }) => {
console.log(dataa)
    const [data, setData] = useState([])

    useEffect(() => {
        setData([...dataa])
    }, [dataa])
  return (
    <>
      <div>
        <p className="text-2xl py-4 px-16 font-semibold fixed border-2 w-full bg-white">Venam Furstore</p>
        <hr />
        <div className="grid sm:grid-cols-2 w-full ">
          <div className="sm:px-20 px-6  my-20  sm:w-[115%] w-full  ">
            <label
              className="text-xl  font-semibold py-2  my-1"
              htmlFor="CONTACT"
            >
              Contact :
            </label>
            <br />
            <input
              className=" w-full my-2"
              type="text"
              placeholder="Email or Mobile Phone Number"
            />
            <br />
            <br />
            <label
              className="text-xl  font-semibold py-2 my-3"
              htmlFor="Delivery"
            >
              Delivery :
            </label>
            <br />
            <select
              className="w-full border-2 rounded-lg px-4 py-3 sm:my-3 my-2"
              name=""
              id=""
            >
              <option value="">Country</option>
              <option value="">India</option>
              <option value="">France</option>
              <option value="">United States</option>
            </select>
            <div className="flex  sm:gap-6 gap-4 sm:my-3 my-2">
              <input type="text" placeholder="First Name(Optional)" />{" "}
              <input type="text" placeholder="Last Name" />
            </div>
            <input
              className="sm:my-3 my-2"
              type="text"
              placeholder="Adrress"
              name=""
              id=""
            />
            <input
              className="sm:my-3"
              type="text"
              placeholder="Apratment, Suite, etc. (Optinal)"
              name=""
              id=""
            />
            <div className="sm:flex gap-6 sm:my-3">
              <input className="sm:my-2 my-2" type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input className="sm:my-0 my-2" type="text" placeholder="Zip Code" />
            </div>

            <div className="my-16">
              <label
                className="text-xl font-semibold py-2 my-6"
                htmlFor="Delivery"
              >
                Payment :
              </label>
              <p>All Transactions are secure and encrypted</p>

              <div className="w-full border-2 my-4 rounded-lg">
                <div className="flex justify-between py-4 px-4 border-b-2  bg-[#f1f1f1]">
                  <p className="font-semibold">Credit card</p>
                  <div className="flex gap-2">
                    <img src={visa} alt="" />
                    <img src={dot2} alt="" />
                    <img src={discover} alt="" />
                  </div>
                </div>
                <div className="mx-6 my-2 py-2">
                  <input type="number" placeholder="Card Number" />
                  <div className="sm:flex gap-6 my-4">
                    <input className="sm:my-0 my-2"
                      type="number"
                      placeholder="Expiration date (MM/YY)"
                    />
                    <input className="sm:my-0 my-2" type="number" placeholder="Security Code" />
                  </div>
                  <input
                    className="px-6"
                    type="text"
                    placeholder="Name on Card"
                  />
                  <button className="text-xl py-3 rounded-lg bg-[#2B5A89] text-white font-semibold w-full border-2 my-4">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <p className="text-sm my-1">All rights reserved Vinova Furstore</p>
          </div>
          
          <div className="bg-[#ffffff] sm:fixed border-l-2 sm:top-20 h-full right-0 sm:w-[43%]" >
            <p className="text-xl mx-16 my-4 ">Products</p>
            {data.map((item) => {
            return (
              <>
                <div key={item.id} className="flex justify-around h-28  items-center">
                  <img
                    className="h-24 border-2 rounded-lg "
                    src={item.image}
                    alt=""
                  />{" "}
                  <p className="text-lg font-semibold">{item.name}</p>{" "}
                  <p className="text-[orange] font-semibold">${item.price}</p>
                </div>
              </>
            );
          })}
             <div className="mx-16 my-6"><p className="text-xl font-semibold">Total :</p></div>
          </div>
   
        </div>
      </div>
    </>
  );
};
