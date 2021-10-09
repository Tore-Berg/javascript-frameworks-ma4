import Head from "../components/layout/Head";
import Heading from "../components/Heading";
import Image from "next/image";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import styles from "../styles/Users.module.css";

export const getStaticProps = async () => {
  const res = await axios.get(BASE_URL);
  const data = res.data.results;
  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {
  return (
    <>
      <Head title="Results" />
      <Heading title="Random users api" />
      <div className={styles.results}>
        {users.map((user) => (
          <div key={user.login.uuid} className={styles.results__card}>
            <h2>{user.name.first}</h2>
            <Image
              src={user.picture.large}
              width="200"
              height="200"
              alt="user image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
