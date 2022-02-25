import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Layout></Layout>
        </div>
    );
};

export default Home;
