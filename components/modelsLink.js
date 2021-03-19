import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Icon.module.css";

export default function ModelsLink() {
  return (
    <>
      <div className={styles.icon}>
        <Link href="/models" passHref>
          <Image src="/icons/icon2.png" width={50} height={75} />
        </Link>
      </div>
    </>
  );
}
