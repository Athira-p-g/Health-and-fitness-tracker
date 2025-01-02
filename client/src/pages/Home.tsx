import React from "react";
import styles from "./Home.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Home = () => {
  return (
    <div>
      {/* Navigation Section
      <div className="flex items-center justify-between h-[70px]">
        <img
          className="ml-[60px] p-[5px]"
          src="src\assests\home\—Pngtree—fitness logo logo_7771764.png"
          alt=""
          width="70"
        />
        <div className="ml-[120px] mt-[-60px] font-gill-sans">
          <span className="text-[#c7a9e8] text-[20px] font-bold">Flex</span>
          <span className="text-[#a294f9] text-[18px] font-bold">Fit</span>
        </div>
        <div className="flex justify-end gap-[40px] mt-[-30px] mr-[60px]">
          <img src="generative.png" alt="" width="35px" />
          <img src="src\assests\home\profile.jpg" alt="" width="35px" />
        </div>
      </div> */}

      {/* Banner Section */}
      <div className={styles.banner}>
        <div className="font-gill-sans text-white text-[30px] ml-[710px] absolute top-[150px]  my-10">
          <p>
            "Empower Your Body, Transform Your Life <br />
            Your Fitness Journey Starts Here."
          </p>
          <button className="bg-[#ddd] font-gill-sans font-bold border-none text-gray-800 px-[15px] py-[5px] rounded-[30px] mt-[40px]">
            GET STARTED
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <h2 className="font-gill-sans text-white text-center mt-[50px]">
        TESTIMONIALS
      </h2>
      <div className="flex justify-around flex-wrap my-[20px] px-[20px].">
        <div className="bg-[#a294f9] rounded-[10px] shadow-md w-[240px] m-[10px] p-[20px] text-center">
          <img
            src="src\assests\home\test1.jpg"
            alt="User   1"
            className="w-[200px] h-[200px] mb-[10px]"
          />
          <h3 className="font-gill-sans my-[5px] font-bold text-lg">
            Shink Mink
          </h3>
          <p className="font-gill-sans text-[#555]">
            "This is a fantastic service! Highly recommend to everyone."
          </p>
        </div>
        <div className="bg-[#a294f9] rounded-[10px] shadow-md w-[240px] m-[10px] p-[20px] text-center">
          <img
            src="src\assests\home\test2.jpg"
            alt="User   2"
            className="w-[200px] h-[200px] mb-[10px]"
          />
          <h3 className="font-gill-sans my-[10px] font-bold text-lg">
            Jay Cutler
          </h3>
          <p className="font-gill-sans text-[#555]">
            "Amazing experience! Will definitely use it again."
          </p>
        </div>
        <div className="bg-[#a294f9] rounded-[10px] shadow-md w-[240px] m-[10px] p-[20px] text-center">
          <img
            src="src\assests\home\test4.png"
            alt="User   3"
            className="w-[200px] h-[200px] mb-[10px]"
          />
          <h3 className="font-gill-sans my-[10px] font-bold text-lg">
            Nigga Bob
          </h3>
          <p className="font-gill-sans text-[#555]">
            "A game changer! I can't believe how easy it was."
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#1f1f1f] p-[20px] footer">
        <div className="flex flex-wrap justify-between">
          <div className="flex-1 m-[10px] min-w-[200px]">
            <h4 className="text-[#343a40] mb-[10px]">Fit Kayo</h4>
            <p className="my-[10px]">
              A108 Adam Street <br />
              New York, NY 535022
            </p>
            <p>
              Phone: +1 5589 55488 55 <br />
              Email: info@example.com
            </p>
          </div>
          <div className="footer-col">
            <h5 className="footer-title">Useful Links</h5>
            <div className="footer-links">
              <p>
                <span className="green">.</span> Home
              </p>
              <p>
                <span className="green">.</span> About Us
              </p>
              <p>
                <span className="green">.</span> Services
              </p>
              <p>
                <span className="green">.</span> Terms of Service
              </p>
            </div>
          </div>
          <div className="footer-col">
            <h5 className="footer-title">Our Services</h5>
            <div className="footer-links">
              <p>
                <span className="green">.</span> Workout
              </p>
              <p>
                <span className="green">.</span> Diet
              </p>
              <p>
                <span className="green">.</span> Personal Consultants
              </p>
              <p>
                <span className="green">.</span> Shopping
              </p>
            </div>
          </div>
          <div className="footer-col">
            <h5 className="footer-title">Follow Us</h5>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="social-icons">
              <span className="text-white">
                <FaFacebookF />
              </span>
              <span>
                <FaXTwitter />
              </span>
              <i className="fa-brands fa-instagram ic"></i>
              <i className="fa-brands fa-linkedin ic"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
