import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ImageViewer.module.css";

export default function ImageViewer() {
  return (
    <div className="offset-md-2 col-md-8">
      <Image
        src="/images/EXTERIOR_ANGLE.png"
        layout="intrinsic"
        width={800}
        height={600}
      />
    </div>
  );
}
