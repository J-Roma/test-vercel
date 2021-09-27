import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LandingHome from "../components/landingHome";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="ecomerce with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingHome />
    </div>
  );
};

export default Home;
