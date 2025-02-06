import React from "react";
import { Navbar } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faPinterest, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Footer } from "./Footer";

export const ContactUs = () => {
  return (
    <>
      <div className="Contact">
        <Navbar />
        <div className="header text-center sm:my-20 my-6">
          <h1 className="font-bold text-3xl ">CONTACT</h1>
          <div className="text-[12px] flex gap-2 my-4 justify-center">
            <FontAwesomeIcon icon={faHome} />
            <p className="text-center">Home Contact</p>
          </div>
        </div>
        <div className="map mx-auto text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30265.8699893308!2d73.92737538820802!3d18.51833621552668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722860600069!5m2!1sen!2sin"
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
        <div className="form grid sm:grid-cols-2 items-center mx-10 gap-8 my-10">
          <div className="left w-full">
            <h1 className="font-bold text-2xl  py-8">GET IN TOUCH</h1>
            <p className="text-sm py-4">
              Please enter the details of your requesst. A member of our support
              staff will respond as soon as possible.
            </p>

            <div className="inputs ">
              <div className="line1 sm:flex  w-full gap-5">
                <input className="my-2" type="text" placeholder="Your Name" />
                <input className="my-2" type="email" placeholder="Your Email" />
              </div>
              <div className="line2 my-2">
                <input type="number" placeholder="Your Number" />
                <br />
                <br />
                <textarea name="" id="" cols="20" rows="10" placeholder="Your Address"></textarea>
              </div>
            </div>
            <button className='news_btn my-6 rounded-lg sm:py-3 py-2 text-center bg-[#2B5E5D] text-white  transition duration-1000 sm:px-12 px-6 border-2 text-lg' >SUBMIT NOW</button>
          </div>

          <div className="right grid grid-cols-1  gap-6 sm:mx-12 ">
            <p><b>Address:</b> 123 Suspendis matti, Visaosang Building VST District, NY Accums, North American</p>
            <p><b>Email</b>: support@domain.com</p>
            <p><b>Call Us:</b> (012)-345-67890</p>
            <p><b>Opening time: </b> Our store has re-opened for shopping, exchanges every day 11am to 7pm</p>
            <div className="logo flex gap-2 text-2xl ">
            <FontAwesomeIcon className="bg-[#2B5E5D] px-2 py-2 text-white rounded-lg" icon={faFacebook}/>
            <FontAwesomeIcon className="bg-[#2B5E5D] px-2 py-2 text-white rounded-lg" icon={faWhatsapp}/>
            <FontAwesomeIcon className="bg-[#2B5E5D] px-2 py-2 text-white rounded-lg" icon={faInstagram}/>
            <FontAwesomeIcon className="bg-[#2B5E5D] px-2 py-2 rounded-lg text-white" icon={faTwitter}/>
            </div>
          </div>
         </div>
         <Footer/>
    </div>
    </>
  );
};
