import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BiInfoCircle, BiPlay } from "react-icons/bi";
import { baseUrl } from "../constant/movies";
import { Movie } from "../type";

interface BannerProps {
   NetflixOriginals: Movie[];
}
const Banner: React.FC<BannerProps> = ({ NetflixOriginals }) => {
   const [movie, setMovie] = useState<Movie | null>();

   const randomNumber = Number(
      (Math.random() * NetflixOriginals?.length).toFixed()
   );

   useEffect(() => {
      if (NetflixOriginals) {
         setMovie(NetflixOriginals[randomNumber]);
      }
   }, [NetflixOriginals]);

   console.log(`${baseUrl}${movie?.backdrop_path}`);

   return NetflixOriginals ? (
      <motion.div className="px-8 ">
         <div className="absolute h-[95vh]  w-screen -z-10 inset-0">
            <img
               className="bg-gradient-to-b w-full object-cover h-full from-transparent to-white"
               src={
                  `${baseUrl}${movie?.backdrop_path} ` ??
                  "https://image.tmdb.org/t/p/original/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg"
               }
            />
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-[#020611] "></div>
         </div>
         <div className="z-10 flex flex-col h-full pt-20 space-y-8 xl:justify-center md:pt-40">
            <motion.h1 className="">{movie?.title ?? "Dog"}</motion.h1>
            <motion.p className="max-w-xs text-xs lg:text-2xl lg:max-w-2xl md:text-lg md:max-w-lg text-shadow-lg">
               {movie?.overview ??
                  "An army ranger and his dog embark on a road trip along the Pacific Coast Highway to attend a friend's funeral."}
            </motion.p>
            <div className="flex flex-col space-y-4 ">
               <button className="btn-base max-w-[120px] flex items-center  justify-center  bg-white text-black">
                  <BiPlay className="text-2xl md:text-4xl " />
                  <div>Play</div>
               </button>
               <button className="btn-base max-w-[150px] bg-[gray]/70  flex items-center justify-center space-x-2">
                  <div>More Info</div>

                  <BiInfoCircle className="text-2xl md:text-3xl " />
               </button>
            </div>
         </div>
      </motion.div>
   ) : (
      <div>null</div>
   );
};
export default Banner;
