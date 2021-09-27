import type { NextPage } from "next";
import Image from "next/image";
import LandingHome from "../components/landingHome";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <Layout>
      <LandingHome />
    </Layout>
  );
};

export default Home;
