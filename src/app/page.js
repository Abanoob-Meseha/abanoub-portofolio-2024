import { Fragment } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <Fragment>
      <div className={styles.backShape}></div>
      <div className={styles.homeContainer}>
        <img src='/badla4.jpg' className={styles.img}/>
        <div className={styles.info}>
          <h1 className={styles.name}> -- I'M ABANOUB MESEHA.</h1>
          <h1 className={styles.job}> WEB DEVELOPER</h1>
          <p>
            I'm a dynamic and enthusiastic junior fullstack 
            web developer with a flair for crafting clean 
            and efficient code. My journey into the world of 
            web development began with a deep curiosity and a 
            determination to turn ideas into reality.
          </p>
          <Link href={'/'}><span>More About Me</span> <FaArrowRight className={styles.icon}/></Link>
        </div>
      </div>
    </Fragment>
  );
}
