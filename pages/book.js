import Head from "next/head";
import Header from "../components/pageHeader.js";
import HomeLink from "../components/homeLink.js";
import ModelsLink from "../components/modelsLink.js";
import ImageViewer from "../components/imageViewer.js";
import styles from "../styles/Book.module.css";

export default function Book() {
  return (
    <>
      <Header leftIcon={<HomeLink />} rightIcon={<ModelsLink />} />
      <ImageViewer />
    </>
  );
}
