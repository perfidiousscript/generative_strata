import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ModelsLink() {
  return (
    <>
      <Link href="/models">
        <Image src="/icons/icon2.png" width={50} height={50} />
      </Link>
    </>
  );
}
