import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Movie } from "../type";
import Thumbnail from "./Thumbnail";

interface RowProps {
   title: string;
   movies: Movie[];
}
const Row: React.FC<RowProps> = ({ title, movies }) => {
   const [offsetX, setX] = useState<number>(0);

   useEffect(() => {
      if (offsetX > 0) {
         setX(-3150);
      } else if (offsetX < -3150) {
         setX(0);
      }
   }, [offsetX]);

   return (
      <div className="w-full h-auto px-2 overflow-y-hidden  mt-4 mb-8 space-y-4 overflow-x-hidden min-h-40 ">
         <h2 className="ml-2 text-sm font-semibold  duration-200 cursor-pointer hover:text-white md:text-xl xl:text-3xl">
            {title}
         </h2>
         <div className="relative w-full group">
            <BiLeftArrow
               onClick={() => {
                  setX(offsetX + 200 * 4);
               }}
               className="z-10 absolute top-[calc(50%-18px)] transition opacity-0 cursor-pointer hover:scale-125 group-hover:opacity-100 left-2 h-9 w-9"
            />
            <motion.div
               animate={{
                  x: offsetX,
               }}
               transition={{
                  duration: 1,
                  ease: "easeInOut",
               }}
               className="flex items-center space-x-0.5  md:space-x-2.5 xl:space-x-5"
               layout
            >
               {movies?.map((movie) => (
                  <div key={movie.id}>
                     <Thumbnail movie={movie} />
                  </div>
               ))}
            </motion.div>
            <BiRightArrow
               onClick={() => {
                  setX(offsetX - 200 * 4);
               }}
               className="absolute top-[calc(50%-18px)] transition opacity-0 cursor-pointer hover:scale-125 group-hover:opacity-100 right-2 h-9 w-9"
            />
         </div>
      </div>
   );
};
export default Row;
