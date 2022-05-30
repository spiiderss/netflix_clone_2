/* eslint-disable react/react-in-jsx-scope */
import type { NextPage } from "next";
import { Suspense } from "react";

const Home: NextPage = () => {
  return (
    <Suspense fallback="loading...">
      <div className=" flex justify-center items-center w-full h-screen bg-[#4650b1]">
        <div className="text-4xl text-white">❄️ New Year is Coming! ❄️</div>
        <div></div>
      </div>
    </Suspense>
  );
};

export default Home;
