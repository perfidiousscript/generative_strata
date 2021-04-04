import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  const [imageIndex, setImageIndex] = useState(0);

  function changeImage(val) {
    let imageSrcIndex = imageIndex;

    setImageIndex((imageSrcIndex += val) % imageSrcArray.length);
  }

  function advanceImage() {
    changeImage(1);
  }

  function reverseImage() {
    if (imageIndex === 0) {
      setImageIndex(imageSrcArray.length - 1);
    } else {
      changeImage(-1);
    }
  }

  return (
    <div className="container">
      <div className="col-md-12">
        <div className={styles.imageViewer}>
          <Image
            src={`/images/${imageSrcArray[imageIndex]}.png`}
            layout="intrinsic"
            width={1100}
            height={800}
          />
          <div className={styles.leftChevron} onClick={reverseImage}>
            &lt;
          </div>
          <div className={styles.rightChevron} onClick={advanceImage}>
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
}
