import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faHome, faTrash, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Cart = ({ dataa }) => {
  const[Qty,setQty] = useState(1)
  const[data,setData] = useState([])


  function Decrese()
  {
    if(Qty==1)
    {
      setQty(1)
    }
    else
    {
      setQty(Qty-1)
    }
  }

  function Increse(id)
  {
    dataa.map((item)=>{
      if(item.id===id)
      {
        setQty(Qty+1)
      }
    })
          
  }

  useEffect(()=>{
    fetch("Data.json").then((response)=>response.json()).then(result=>setData(result))
  })
  return (
    <>
      <Navbar />
      <div className="sm:my-10 py-2"><h1 className="font-bold text-3xl my-10 text-center">
        YOUR SHOPPING CART
      </h1>
      <div className="text-[12px] flex gap-2  justify-center">
        <FontAwesomeIcon icon={faHome} />
        <p className="text-center">Home Cart</p>
      </div></div>

      <div className="Cart-section sm:mx-20 gap-6 sm:flex">
        <div className="">
          <>
          <table className="border-2 w-full h-20 overflow-y-scroll">
            <thead>
              <tr className="border-b-2 text-lg bg-slate-300">
                <td></td>
                <td className="w- py-1">Product</td>
                <td className="w-28 text-center">Price</td>
                <td className="text-center sm:w-28 w-16">QTY</td>
                <td className="text-center sm:w-32 w-20">Total</td>
              </tr>
            </thead>
            {dataa.map((item) => {
          const price = Number(item.price).toFixed(2)
        return (
            <tbody>
              <tr className="border-b-2">
                <td className="mx-2 text-center"><button><FontAwesomeIcon  className="text-center" icon={faTrash}/></button></td>
                <td className="sm:flex gap-6 py-2 items-center  text-center"><img className="sm:w-20 w-24 " src={item.image} alt="" />{item.name}</td>
                <td className=" text-center">{price}</td>
                <td><div className="border-2 flex sm:justify-around justify-center sm:gap-0 gap-2"><button onClick={Decrese}>-</button><p>{Qty}</p><button onClick={()=>Increse(item.id)}>+</button></div></td>
                <td className="font-semibold text-center">{(item.price*Qty).toFixed(2)}</td>
              </tr>
            </tbody>
               );
              })}
          </table>
          <div className="flex gap-8 text-lg my-2 sm:mx-0 mx-4"><div className="w-full "><Link to={"/checkout"}><button className="text-[#2b5e5d] border-[#2b5e5d] border-2 w-full py-2 bg-white sm:text-lg  text-sm my-2 rounded-md">Proceed To Checkout</button></Link></div>
          <div className="w-full"><Link to={"/collections"}><button className="bg-[#2b5e5d] border-[#2b5e5d] w-full py-2 border-2 text-white sm:text-lg text-sm my-2 rounded-md">Continue To Shopping</button></Link></div></div>
          </>
     
          <div className="my-10">
            <div className="text-lg font-semibold">You may also like these products :</div>
            <div className="grid sm:grid-cols-4 grid-cols-2 text-center mx-2 gap-8 my-4 ">
              {data.slice(0,4).map((item,i)=>{
                return(
                  <>
                    <div>
                      <img src={item.image} alt="" />
                      <p className="py-2 font-semibold">{item.name}</p>
                      <p>{item.price}</p>
                    </div>
                  </>
                )
              })}
            </div>
          </div>

        </div>
        <div className="w-full sm:mx-0 px-6">
          <div className="text-[12px] font-semibold py-3 px-6 border-2">THERE ARE 4 ITEMS IN YOUR CART</div>
          <div className="border-x-2 border-b-2"><div className="bg-[#f2f2f2] py-4">
          <div className="px-4 "><p className="font-semibold text-sm">TOTAL:</p><p>{}</p></div>
          <div className="px-4 py-4 flex gap-2"><p className="font-semibold text-sm">SHOPPING:</p><p className="text-sm">Shipping & taxes calculated at checkout</p></div>
          <div className="flex px-4 my-4 ">
            <p className="text-[#59ba4e] font-bold">Congratulations! You've got free shipping!</p>
            <p><FontAwesomeIcon icon={faTruck}/></p>
          </div>
          <div className="flex gap-2 px-4"><p className="text-sm ">Free shipping for any orders above</p><p className="text-[#59ba4e] font-semibold">$200.00</p></div>
          <div className="px-4 mt-6"><p className="text-bold">Add a note to your order :</p></div>
          <div className="px-4"><textarea className="px-4  my-2" name="" id="" cols="20" rows="10" placeholder="Add Your Note Here :"></textarea></div>
          </div></div>
        </div>
      </div>


      <Footer />
    </>
  );
};
