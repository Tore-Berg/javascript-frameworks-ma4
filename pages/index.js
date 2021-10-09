import Heading from "../components/Heading";
import Head from "../components/layout/Head";
import Link from "next/dist/client/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head title="Home" />
      <Heading title="Home-page" />
      <div className={styles.container}>
        <Link href="/results">
          <a className={styles.button}>Check results</a>
        </Link>
      </div>
      <div className="container"></div>
    </>
  );
};

export default Home;
