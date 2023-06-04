import Image from "next/image";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
export async function getStaticProps() {
  const url = "http://localhost:5000/api/achievements";
  const response = await fetch(url);
  return {
    props: {
      data: await response.json(),
    },
  };
}

export default function Main({ data }) {
  return (
    <>
      <Navbar />
      <UserProfile />
      <div className="container mx-auto sm:max-w-2xl lg:max-w-4xl">
        {data.map((d) => {
          return (
            <div className="flex  p-4 border-2 border-black  rounded-lg bg-whiteish my-5  transition-opacity duration-500 ease-in-out hover:opacity-75 px-4 sm:px-6 lg:px-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold">{d.title}</h2>
                <p className="text-gray-600">{d.disc}</p>
              </div>
              <div className="ml-4">
                <Image
                  src={`http://localhost:5000/${d.photo}`}
                  width={250}
                  height={200}
                  className="w-40 h-40 rounded-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
