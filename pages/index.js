import Head from "next/head";
import BookLink from "../components/bookLink.js";
import ModelsLink from "../components/modelsLink.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-10">
            <div className={styles.homeHeader}>
              <p>GENER</p>
              <p>ATIVE</p>
              <p>STRATA</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <BookLink />
          </div>
          <div className="col-md-8">
            <p className={styles.homeText}>
              Generative Strata is a machine written text first created using a
              set of basic probability functions, printed as a physical work,
              and later translated into a series of virtual objects. Each stage
              of Generative Strata operates within the random expanse of the
              machine’s will, attempting to experience the full potency of its
              medium. Documentation of its two primary modes are recorded here
              for public display.
            </p>
          </div>
          <div className="col-md-2">
            <ModelsLink />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerItem}>Original Text by Mike Corrao</div>
        <div className={styles.footerItem}>Web Design by Samuel Moss</div>
        <div className={styles.footerItem}>
          Digital Translation by Nicholas Raap
        </div>
      </div>
    </>
  );
}
