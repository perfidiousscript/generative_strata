import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function BookLink() {
  return (
    <>
      <Link href="/book">
        <Image src="/icons/icon3.png" width={50} height={75} />
      </Link>
    </>
  );
}
