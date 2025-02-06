import { Link, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Search = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const [productName, setProductName] = useState("");
  


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("name");
    setProductName(name);
  }, [location.search]);

  useEffect(() => {
    if (productName) {
      fetch("https://furstorebackend.onrender.com/api/search", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name: productName }),
      })
        .then((res) => res.json())
        .then((data) => setData(data));
        console.log(data)
    }
  }, [productName]);
  
  return (
    <>
      <Navbar />
      <div className="text-white mt-10 px-4 w-full">
        <h1 className="text-black sm:text-3xl text-2xl font-semibold px-4">Searched Items</h1>
        <div className="sm:my-8 my-5 text-white relative group grid sm:grid-cols-5 grid-cols-2 ">

        {data.map((item) => {
          return (
            <>
            <Link to={`/productsdetails/${item.name}`}>
              <div className="flex flex-col w-full cursor-pointer rounded-lg px-2 text-center my-3">
                <div className="group overflow-hidden">
                  <img
                    className=" w-full hover:scale-110 transition-all duration-300 ease-in-out`"
                    src={item.image}
                    alt={item.image}
                  />
                </div>
                <div className="star text-center py-2 text-[#Ffd700] justify-center flex text-sm gap-1">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalf} />{" "}
            </div>
                <p className="font-semibold text-wrap py-2 text-black">
                  {item.name}
                </p>
                <p className="text-sm text-black">{item.price}</p>
              </div>
              </Link>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
};
