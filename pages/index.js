import Head from "next/head";
import Navbar from "../components/Navbar";
import Counter from "../components/Counter";
import { connect } from "react-redux";

const Home = (props) => {
  console.log(props);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Navbar />
      <Counter />
    </div>
  );
};
export default Home;
