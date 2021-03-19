import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Glyphicon } from "react-bootstrap";
import styles from "../styles/ImageViewer.module.css";
const imageSrcArray = [
  "EXTERIOR_ANGLE",
  "EXTERIOR_FLAT",
  "MAJOR_1",
  "MAJOR_2",
  "MEDIA_1",
  "MEDIA_2",
  "MINOR_1",
  "MINOR_2",
];

export default function ImageViewer() {
  const [imageSrc, setImageSrc] = useState(imageSrcArray[0]);

  return (
    <div className="offset-md-2 col-md-8">
      <Image
        src={`/images/${imageSrc}.png`}
        layout="intrinsic"
        width={800}
        height={600}
      />
      <div className={styles.leftChevron}>&lt;</div>
      <div className={styles.rightChevron}>&gt;</div>
    </div>
  );
}
