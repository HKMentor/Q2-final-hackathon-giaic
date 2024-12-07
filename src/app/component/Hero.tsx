import React from "react";
import Image from "next/image"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons'; // Apple Icon

const Hero = () => {
  const categories = [
    { 
      name: "Women's Fashion", 
      subcategories: ["Dresses", "Shoes", "Accessories", "Handbags"] 
    },
    { 
      name: "Men's Fashion", 
      subcategories: ["Shirts", "Shoes", "Watches", "Sunglasses"] 
    },
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="bg-white flex flex-col md:flex-row"> 
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-2 border-r-2 flex justify-center">
        <ul className="space-y-2">
          {categories.map((category, index) => (
            typeof category === "string" ? (
              <li key={index}>
                <a
                  href="#"
                  className="block p-2 rounded hover:bg-gray-200 text-gray-700"
                >
                  {category}
                </a>
              </li>
            ) : (
              <li key={index} className="relative group">
                <a
                  href="#"
                  className="block p-2 rounded hover:bg-gray-200 text-gray-700"
                >
                  {category.name}
                </a>
                {/* Dropdown */}
                <ul className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg rounded w-40 z-10">
                  {category.subcategories.map((sub, subIndex) => (
                    <li key={subIndex} className="border-b last:border-none">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 text-gray-600"
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )
          ))}
        </ul>
      </aside>

      {/* Main Banner */}
      <main className="w-full md:w-3/4 p-6 flex items-center justify-center">
        <div className="bg-black  text-white p-8  max-w-3xl flex items-center space-x-9 mr-8 mt-14">
          {/* Text Section */}
          <div>
            {/* Apple Icon */}
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faApple} className="text-3xl mr-2 h-10" />
              <h1 className="text-1xl ">iPhone 14 Series</h1>
            </div>

            <p className="text-4xl mt-2 font-bold  ">Up to 10%  off Voucher</p>

            {/* Button */}
            <button className=" hover:bg-purple-800 text-white  py-2 mt-4 rounded flex items-center">
             <u> Shop Now </u>
              <i className="bi bi-arrow-right ml-2"></i> {/* Arrow Icon */}
            </button>
          </div>

          {/* Image Section */}
          <div>
            <Image
              src="/images/heropic1.png" 
              alt="iPhone 14 Series"
              width={700}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
