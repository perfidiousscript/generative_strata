import Head from "next/head";
import styles from "../styles/Header.module.css";

export default function Header(props) {
  return (
    <>
      <div className="row">
        <div className={styles.header}>
          <div className="col-md-2">{props.leftIcon}</div>
          <div className="col-md-8">
            <div className={styles.headerText}>GENERATIVE STRATA</div>
          </div>
          <div className="col-md-2">{props.rightIcon}</div>
        </div>
      </div>
    </>
  );
}
