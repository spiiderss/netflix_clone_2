import type { NextPage } from "next";
import { Suspense } from "react";

const Home: NextPage = () => {
  return (
    <Suspense fallback="loading...">
      <div className="main-v-container text-2xl ">some</div>
    </Suspense>
  );
};

export default Home;
