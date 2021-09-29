import React from "react";
import Cards from "../../components/cards";
import Layout from "../../components/layout";

const index = ({ newData }: any) => {
  return (
    <Layout>
      <div className="flex flex-col text-center w-full mt-20">
        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
          Prueba API Rick And Morty con SSG
        </h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {newData.map((item: any, id: number) => (
                <Cards
                  key={id + 1}
                  name={item.name}
                  status={item.status}
                  origin={item.origin.name}
                  location={item.location.name}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </section>
        {/* {newData[1].name} */}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    const newData = data.results;
    return {
      props: {
        newData,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default index;
