import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Icon.module.css";

export default function HomeLink() {
  return (
    <>
      <div className={styles.icon}>
        <Link href="/" passHref>
          <Image src="/icons/icon.png" width={40} height={50} />
        </Link>
      </div>
    </>
  );
}
