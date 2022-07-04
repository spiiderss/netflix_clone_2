import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { baseUrl } from "../constant/movies";
import { Movie } from "../type";
interface ThumbnailProps {
   movie: Movie;
}
const Thumbnail: React.FC<ThumbnailProps> = ({ movie }) => {
   const [showDetail, setShowDetail] = useState<boolean>(false);
   const isMobile = useMediaQuery({
      query: "(min-width: 1280px)",
   });

   console.log(isMobile);

   const imgUrl =
      `${baseUrl}${movie?.backdrop_path} ` ??
      "https://image.tmdb.org/t/p/original/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg";

   return (
      <motion.div
         whileHover={{
            minWidth: isMobile ? "600px" : "400px",
         }}
         transition={{
            duration: 0.4,
            ease: "easeInOut",
         }}
         className={` w-auto  h-28 xl:h-44
 flex ${showDetail && "border border-red-400 p-1 space-x-2"} `}
         animate={{
            minWidth: isMobile ? "300px" : "200px",
         }}
         onMouseEnter={() => {
            setShowDetail(true);
         }}
         onMouseLeave={() => {
            setShowDetail(false);
         }}
      >
         <img
            src={imgUrl}
            alt=""
            className=" min-w-[200px]xl:min-w-[300px] duration-300 ease-out bg-cover cursor-pointer "
         />

         <AnimatePresence>
            {showDetail && (
               <motion.div className="flex flex-col items-center h-full w-full">
                  <motion.div>
                     {movie.original_title ?? movie.original_name}
                  </motion.div>
                  <motion.div>{movie.overview.slice(0, 15)}...</motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>
   );
};
export default Thumbnail;
