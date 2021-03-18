import Head from "next/head";
import HomeLink from "../components/homeLink.js";
import BookLink from "../components/bookLink.js";
import ModelsLink from "../components/modelsLink.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="container">
          <div className="offset-md-1 col-md-11">
            <div className={styles.homeHeader}>GENERATIVE STRATA</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="offset-md-1 col-md-1">
          <BookLink />
        </div>
        <div className="col-md-8">
          <p className={styles.homeText}>
            Generative Strata is a machine written text first created using a
            set of basic probability functions, printed as a physical work, and
            later translated into a series of virtual objects. Each stage of
            Generative Strata operates within the random expanse of the
            machine’s will, attempting to experience the full po- tency of its
            medium. Documentation of its two primary modes are recorded here for
            public display.
          </p>
        </div>
        <div className="col-md-2">
          <ModelsLink />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerItem}>Original Text by Mike Corrao</div>
        <div className={styles.footerItem}>
          Digital Translation by Nick Raap
        </div>
        <div className={styles.footerItem}>Web Design by Nick Raap</div>
      </div>
    </>
  );
}
