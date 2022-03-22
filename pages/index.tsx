import type { NextPage } from "next";
import LoadingButton from "../components/common/LoadingButton.common";

const Home: NextPage = () => {
  return (
    <div className="main-v-container">
      <div className="max-w-[120px] h-auto px-2 py-1 shadow">
        <LoadingButton content={"loading"} />
      </div>
    </div>
  );
};

export default Home;
