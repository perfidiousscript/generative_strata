import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Icon.module.css";

export default function BookLink() {
  return (
    <>
      <div className={styles.icon}>
        <Link href="/book" passHref>
          <Image src="/icons/icon3.png" width={50} height={75} />
        </Link>
      </div>
    </>
  );
}
