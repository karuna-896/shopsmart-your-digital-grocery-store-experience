import React from "react";
import "./Footer.css";
import { RiShoppingBasketFill, RiMapPin2Line } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhoneForwarded, MdOutlineMarkEmailRead } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import CreditCard from "../../../src/Assets/Images/payment.png";
import { useState } from "react";

const Footer = () => {
  const [message, setMessage] = useState();
  // const sendMessage = () => {
  //   window.location = `https://wa.me/7680018941?text=${message}`;
  // };
  return (
    <>
      <footer>
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>
                Shopsmart <i>{<RiShoppingBasketFill />}</i>
              </h3>
              <p>
                Fresh And Organic Delivery We Make Your Life Easy By Delivering
                Grocery, Fruits And Dairy Products
              </p>
              <div className="share">
                {/* <Link>
                  <i
                    onClick={() => {
                      window.location = `https://wa.me/7680018941?text=Say Hello..!!`;
                    }}
                  >
                    {<IoLogoWhatsapp />}
                  </i>
                </Link> */}
                {/* <a href="https://instagram.com/reddy_official_770">
                  <i>{<SlSocialInstagram />}</i>
                </a> */}
                {/* <Link to="">
                  <i>{<TiSocialTwitter />}</i>
                </Link> */}
                
              </div>
            </div>

            {/* Contact Section */}

            <div className="box">
              <h3>Contact Us </h3>
              <Link className="links">
                <i>
                  <MdPhoneForwarded />
                </i>
                +91 7680018941
              </Link>

              <a href="mailto:support@shopmart.com" className="links">
                <i>
                  <MdOutlineMarkEmailRead />
                </i>
                support@shopmart.com
              </a>

              <Link className="links">
                <i>
                  <RiMapPin2Line />
                </i>
                Vallur, Ongole, Andhra Pradesh, 523272
              </Link>
            </div>

            {/* Quick Link */}

            <div className="box">
              <h3>Quick Link </h3>
              <Link to="/" className="links">
                <i>
                  <AiOutlineArrowRight />
                </i>
                Home
              </Link>

              <Link to={"/"} className="links">
                <i>
                  <AiOutlineArrowRight />
                </i>
                Features
              </Link>

              <Link to="/products" className="links">
                <i>
                  <AiOutlineArrowRight />
                </i>
                Products
              </Link>

              <Link to="/reviews/all" className="links">
                <i>
                  <AiOutlineArrowRight />
                </i>
                Reviews
              </Link>
            </div>
            {/* Quick Chat */}
            <div className="box">
              <h3>Let's Chats </h3>
              <p>Type Message..!!</p>
              <input
                type="text"
                className="whats-message"
                placeholder="Enter Your Message..!!"
                onChange={(e) => setMessage(e.target.value)}
              />

              <button className="sendMsgBtn">
                Send
              </button>
              
            </div>
          </div>
          
        </section>
      </footer>
    </>
  );
};

export default Footer;
