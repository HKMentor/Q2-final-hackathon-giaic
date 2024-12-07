import React from "react";
import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-white bg-black body-font mt-10">
      <div className="container px-28 py-20 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mr-44">
          {/* Exclusive Section */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-1">
            <h1 className="title-font text-white tracking-widest text-lg mb-3">
              <b>Exclusive</b>
            </h1>
            <nav className="list-none mb-10">
              <li className="mb-4">
                <a className="text-white hover:text-gray-300">Subscribe</a>
              </li>
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">
                  Get 10% off your first order
                </a>
              </li>
            </nav>
            <div className="relative sm:w-64 w- sm:mr-4 -mt-4">
              <div className="flex items-center bg-black bg-opacity-40 rounded border w-36 border-white">
              <AiOutlineSend className="text-white mx-1 cursor-pointer text-base " />
                <input
                  type="text"
                  placeholder="Enter your email"
                  id="footer-field"
                  name="footer-field"
               
                  className="flex-grow bg-transparent focus:outline-none text-gray-100 py-1 px-2 text-sm leading-4"
                />
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-1">
            <h1 className="title-font font-bold text-white tracking-widest text-lg mb-3">
              <b>Support</b>
            </h1>
            <nav className="list-none mb-10">
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">
                  ST 13, Sector 5A2, New Karachi.
                </a>
              </li>
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">
                  infohkmentor@gmail.com
                </a>
              </li>
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">
                  +88015-88888-9999
                </a>
              </li>
            </nav>
          </div>

          {/* Account Section */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-1">
            <h1 className="title-font font-bold text-white tracking-widest text-lg mb-3">
              <b>Account</b>
            </h1>
            <nav className="list-none mb-10">
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">
                  My Account
                </a>
              </li>
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">
                  Login / Register
                </a>
              </li>
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">Cart</a>
              </li>
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">
                  Wishlist
                </a>
              </li>
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">Shop</a>
              </li>
            </nav>
          </div>

          {/* Quick Link Section */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-1">
            <h1 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              <b>Quick Link</b>
            </h1>
            <nav className="list-none mb-10">
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">
                  Terms Of Use
                </a>
              </li>
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">FAQ</a>
              </li>
              <li className="mb-4">
                <a className="text-white hover:text-gray-300 text-sm">
                  Contact
                </a>
              </li>
            </nav>
          </div>

          {/* Download App Section */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-1">
            <h1 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              <b>Download App</b>
            </h1>
            <p className="mb-4 text-sm">Save $3 with App New User Only</p>
            {/* Google Play Store */}
            <div className="flex items-center mb-2 ml-20 -mt-4">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                width={80}
                height={60}
                className="-mt-8"
              />
              {/* QR Code */}
              <Image
                src="/images/qrcode.png"
                alt="QR Code"
                width={70}
                height={50}
                className="-ml-40 mt-3"
              />
            </div>
            {/* Apple Store */}
            <div className="flex items-center mb-2 ml-20 border-x border-y rounded-l w-20 -mt-12">
              <Image
                src="/images/apple.png"
                alt="Apple Store"
                width={23}
                height={10}
              />
              <h4 className="text-[10px]">AppleStore</h4>
            </div>
          </div>
        </div>

        {/* Border and Social Links */}
        <div className="mt-6 pt-4">
          <div className="container flex justify-end -mt-24 -ml-20 flex-wrap mx-auto">
            {/* Social Links */}
            <div className="flex space-x-6 justify-items-end">
              <a
                href="https://www.facebook.com/your-profile"
                target="_blank"
                className="text-gray-300 hover:text-blue-600"
              >
                <TiSocialFacebook />
              </a>
              <a
                href="https://www.facebook.com/your-profile"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <SlSocialTwitter />
              </a>
              <a
                href="https://www.instagram.com/your-profile"
                target="_blank"
                className="text-gray-300 hover:text-pink-500"
              >
                <SlSocialInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                className="text-gray-300 hover:text-blue-700"
              >
                <SlSocialLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black bg-opacity-75">
        <div className="container mx-auto text-center sm:flex-row flex-col">
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">
            @Hooria_Codehub 2024. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
