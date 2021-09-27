import React from "react";
import Cards from "../../components/cards";
import Layout from "../../components/layout";

const index = () => {
  return (
    <Layout>
      <div className="flex flex-col text-center w-full mt-20">
        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
          Prueba API Rick And Morty API con SSR
        </h1>
      </div>
      <Cards />
    </Layout>
  );
};

export default index;
