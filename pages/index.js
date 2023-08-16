import Header from "../components/Header/";
import Footer from "../components/Footer/";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home({ country }) {
  const { data: session } = useSession();
  return (
    <main>
      <Header country={country} />
      <Footer country={country} />
    </main>
  );
}
export async function getServerSideProps() {
  let data = await axios
    .get(`https://api.ipregistry.co/?key=${process.env.REGISTRY_API_KEY}`)
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "Brazil",
        flag: "https://www.kindpng.com/picc/m/130-1309316_file-brazilian-flag-round-svg-brazil-flag-round.png",
      },
    },
  };
}
