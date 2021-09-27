import Navbar from "./navbar";
import Head from "next/head";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="ecomerce with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
