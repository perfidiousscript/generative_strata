import Head from "next/head";
import Header from "../components/pageHeader.js";
import HomeLink from "../components/homeLink.js";
import BookLink from "../components/bookLink.js";
import ObjectViewer from "../components/objectViewer.js";
import styles from "../styles/Model.module.css";

const objectSourceArray = ["GS_MAJOR", "GS_MEDIA", "GS_MINOR"];

function objectLoop() {
  let returnArray = [];
  objectSourceArray.forEach((object) =>
    returnArray.push(
      <div className="row" key={object}>
        <ObjectViewer title={object} />
        <br />
      </div>
    )
  );
  return returnArray;
}

export default function Book() {
  return (
    <>
      <Header leftIcon={<HomeLink />} rightIcon={<BookLink />} />
      <div className="container">{objectLoop()}</div>
    </>
  );
}
