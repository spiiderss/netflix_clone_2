import Link from "next/link";
import React, { useEffect, useState } from "react";

import { AiFillBell, AiOutlineSearch } from "react-icons/ai";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
   const [isScrolled, setScrolled] = useState<boolean>(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);
   return (
      <header
         className={`flex items-center transition-all duration-150 justify-between w-full px-4 py-3 space-x-2 md:py-6 md:space-x-10 md:px-8 lg:px-12 ${
            isScrolled && "bg-[#141414]"
         }`}
      >
         <div className="flex space-x-8 ">
            <img
               src="https://rb.gy/ulxxee"
               width={100}
               height={100}
               className="object-contain cursor-pointer"
            />

            <ul className="hidden space-x-4 md:flex">
               <li className="headerLink">Home</li>
               <li className="headerLink">TV shows</li>
               <li className="headerLink">Movies</li>
               <li className="headerLink">New & Popular</li>
               <li className="headerLink">My List</li>
            </ul>
         </div>
         <div className="flex items-center space-x-8">
            <AiOutlineSearch />
            <p className="hidden">Kids</p>
            <AiFillBell />

            <Link href="/account">
               <img
                  src="https://rb.gy/g1pwyx"
                  alt=""
                  className="rounded cursor-pointer"
               />
            </Link>
         </div>
      </header>
   );
};
export default Header;
