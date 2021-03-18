import Head from "next/head";
import HomeLink from "../components/homeLink.js";
import ModelsLink from "../components/modelsLink.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="homeHeader col-md-8 offset-md-2">GENERATIVE STRATA</div>
      </div>
      <div className="pageBody row">
        <div className="col-md-1">
          <HomeLink />
        </div>
        <div className="col-md-10">
          <p> Some text here</p>
        </div>
        <div className="col-md-1">
          <ModelsLink />
        </div>
      </div>
    </>
  );
}
