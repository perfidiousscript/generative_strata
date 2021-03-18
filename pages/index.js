import Head from "next/head";
import HomeLink from "../components/homeLink.js";
import BookLink from "../components/bookLink.js";
import ModelsLink from "../components/modelsLink.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="col-offset-2 col-md-10">
          <div className={styles.homeHeader}>GENERATIVE STRATA</div>
        </div>
      </div>
      <div className="pageBody row">
        <div className="offset-md-1 col-md-1">
          <BookLink />
        </div>
        <div className="col-md-8">
          <p> Some text here</p>
        </div>
        <div className="col-md-2">
          <ModelsLink />
        </div>
      </div>
    </>
  );
}
