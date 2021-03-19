import Head from "next/head";
import Header from "../components/pageHeader.js";
import HomeLink from "../components/homeLink.js";
import BookLink from "../components/bookLink.js";
import styles from "../styles/Book.module.css";

export default function Book() {
  return (
    <>
      <Header leftIcon={<HomeLink />} rightIcon={<BookLink />} />
    </>
  );
}
