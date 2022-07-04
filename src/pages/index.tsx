/* eslint-disable react/react-in-jsx-scope */
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { useQuery } from "react-query";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import { requests } from "../utils/request";
const Home = (props: any) => {
   // fetch data
   const { data, isLoading } = useQuery(
      "movies",
      async () =>
         await Promise.all([
            fetch(requests.fetchNetflixOriginals).then(async (res) => ({
               fetchNetflixOriginals: await res.json(),
            })),
            fetch(requests.fetchTrending).then(async (res) => ({
               fetchTrending: await res.json(),
            })),
            fetch(requests.fetchTopRated).then(async (res) => ({
               fetchTopRated: await res.json(),
            })),
            fetch(requests.fetchActionMovies).then(async (res) => ({
               fetchActionMovies: await res.json(),
            })),
            fetch(requests.fetchComedyMovies).then(async (res) => ({
               fetchComedyMovies: await res.json(),
            })),
            fetch(requests.fetchHorrorMovies).then(async (res) => ({
               fetchHorrorMovies: await res.json(),
            })),
            fetch(requests.fetchRomanceMovies).then(async (res) => ({
               fetchRomanceMovies: await res.json(),
            })),
            fetch(requests.fetchDocumentaries).then(async (res) => ({
               fetchDocumentaries: await res.json(),
            })),
         ])
   );

   return (
      <motion.div className="relative h-screen bg-gradient-to-b  from-gray-900/10 to-[#010511] lg:h-[140vh] ">
         <NextSeo title="Home -Netflix" description=" some desc" />
         <Header />

         <main className="h-auto min-h-[95vh]  ">
            {isLoading ? (
               <div className=" w-full h-screen flex justify-center items-center">
                  <div className="font-base">Loading...</div>
                  <div className="w-10 h-10 rounded-full border-t-2 border-blue-400 animate-spin"></div>
               </div>
            ) : (
               <>
                  <Banner
                     NetflixOriginals={data?.[0].fetchNetflixOriginals.results}
                  />
                  <section className="h-full pb-12 mt-12 space-y-8 md:mt-24">
                     <Row
                        title="Trending Now"
                        movies={data?.[1].fetchTrending.results}
                     />
                     <Row
                        title="Top Rated"
                        movies={data?.[2].fetchTopRated.results}
                     />
                     <Row
                        title="Action Thrillers"
                        movies={data?.[3].fetchActionMovies.results}
                     />
                     {/* My List */}
                     {/* {list.length > 0 && <Row title="My List" movies={list} />} */}

                     <Row
                        title="Comedies"
                        movies={data?.[4].fetchComedyMovies.results}
                     />
                     <Row
                        title="Scary Movies"
                        movies={data?.[5].fetchHorrorMovies.results}
                     />
                     <Row
                        title="Romance Movies"
                        movies={data?.[6].fetchRomanceMovies.results}
                     />
                     <Row
                        title="Documentaries"
                        movies={data?.[7].fetchDocumentaries.results}
                     />
                  </section>
               </>
            )}
         </main>
      </motion.div>
   );
};

export default Home;
