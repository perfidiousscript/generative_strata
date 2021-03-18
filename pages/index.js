import Head from "next/head";
import HomeLink from "../components/homeLink.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="homeHeader col-md-8 offset-md-2">GENERATIVE STRATA</div>
      </div>
      <div className="pageBody">
        <HomeLink />
      </div>
    </>
  );
}
