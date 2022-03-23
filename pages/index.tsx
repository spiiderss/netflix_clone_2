import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
const Home: NextPage = () => {
  return (
    <div className="main-v-container">
      <Header />
      <Navbar />
    </div>
  );
};

export default Home;
