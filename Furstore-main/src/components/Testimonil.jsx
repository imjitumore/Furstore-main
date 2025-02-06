import React, { useEffect, useState } from 'react'
import man1 from "../assets/man1.png"
import man2 from "../assets/man2.png"
import man3 from "../assets/man3.png"
import { Arrial_card } from './Arrial'
import { Link } from 'react-router-dom'
import bigcum2 from "../assets/bigcum2.jpg"
import bigsopa2 from "../assets/bigsopa2.jpg"
import bigclock4 from "../assets/bigclock4.jpg"
import bigclock2 from "../assets/bigclock2.jpg"
import biglatkan2 from "../assets/biglatkan2.jpg"
import bigchair3 from "../assets/bigchair3.jpg"
import bigchair_2 from "../assets/bigchair_2.jpg"
import bigamet2 from "../assets/bigamet2.jpg"
import bigflowerpot1 from "../assets/bigflowerpot1.jpg"
import bigflowerpot2 from "../assets/bigflowerpot3.jpg"
import bigflowerpot3 from "../assets/bigflowerpot3.jpg"
import bigpot2 from "../assets/bigpot2.jpg"



export const Testimonil = () => {

  const [data,setData]=useState()
  

  const proData = [
      {
          "id":1,
          "image":bigcum2,
          "name":"Cum2",
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
          "image":bigclock4,
          "name":"Clock4",
          "price":"$70.23",
          "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
          "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
          "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
          "Quantity":"4"
      }
      ,
      {
          "id":4,
          "image":biglatkan2,
          "name":"Latkan2",
          "price":"$120.23",
          "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
          "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
          "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
          "Quantity":"7"
      }
      ,    {
          "id":5,
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
          "id":6,
          "image":bigamet2,
          "name":"Amet2",
          "price":"$200.23",
          "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
          "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
          "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
          "Quantity":"8"
      },
      {
          "id":7,
          "image":bigchair_2,
          "name":"Chair_2",
          "price":"$98.23",
          "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
          "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
          "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
          "Quantity":"5"
      }
      ,
      {
          "id":8,
          "image":bigflowerpot3,
          "name":"Flower pot3",
          "price":"$200.23",
          "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
          "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
          "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
          "Quantity":"8"
      }
      ,
      {
          "id":9,
          "image":bigpot2,
          "name":"Pot2",
          "price":"$70.23",
          "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
          "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
          "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
          "Quantity":"4"
      }
      ,
      {
          "id":10,
          "image":bigflowerpot1,
          "name":"Flower pot1",
          "price":"$120.23",
          "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
          "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
          "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
          "Quantity":"7"
      }
      ,    {
          "id":11,
          "image":bigclock2,
          "name":"Clock2",
          "price":"$98.23",
          "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
          "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
          "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
          "Quantity":"5"
      }
      ,
      {
          "id":12,
          "image":bigflowerpot2,
          "name":"Flower pot3",
          "price":"$200.23",
          "discription":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
          "Tags":"13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
          "Category":"Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
          "Quantity":"8"
      }
  ]

    
  
  return (
    <>
  
        <div className="testimonals_main my-20">
        <div className="testimonal_title my-20">
            <h1 className='main_text sm:text-6xl text-5xl text-center sm:my-10 my-4'>Testimonilas</h1>
        </div>
        <div className="testimonal_center grid sm:grid-cols-3 gap-10 mx-8 ">
        <Testimonilas profile={man1} name={"Rushi Godke"} positon={"CEO of Coding cloud"} quote={`"`} lorem={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laboriosam!"}/>
        <Testimonilas profile={man2} name={"Natasha Chohan "} positon={"HR in CC"} quote={`"`} lorem={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laboriosam!"}/>
        <Testimonilas profile={man3} name={"Sam Kharat"} positon={"Associate Manager"} quote={`"`} lorem={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laboriosam!"}/>    
        </div>
        </div>
        <br />
        <div className="Flash_details my-20">
            <div className="flash_title  text-center sm:my-20 my-10 ">
                <p className=' sm:text-6xl text-5xl main_text' >Flash Deals</p>
            </div>
           <div>
           <div className="flash_main" >
           {proData.map((val) => {     
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
            </div>
           </div>
        </div>
    </>
  )
}

function Testimonilas(props)
{
  return(
    <>
      <div className="testimonials_main grid grid-cols-2 shadow-lg shadow-[#aca7a7] sm:py-12 ">
        <div className="testi_left">
          <img className='text-center pl-12 my-2' src={props.profile} alt="" />
          <p className="testi_name text-xl text-center">{props.name}</p>
          <p className='text_pos text-center py-2' >{props.positon}</p>
        </div>

        <div className="testi_right py-10">
          <p className="text-4xl text-center">{props.quote}</p>
          <p className="testi_lorem text-md text-center py-1">{props.lorem}</p>
        </div>
      </div>
    </>
  )
}