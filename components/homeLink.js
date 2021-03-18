import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function HomeLink() {
  return (
    <>
      <Link href="/">
        <Image src="/icons/icon.png" width={50} height={75} />
      </Link>
    </>
  );
}
