import React from "react";
import styles from "./Welcome.module.scss";
const Welcome = () => {
  return <div className={styles.welcome}>
<h1 className={styles.welcome__title}>
Welcome to the br amazing <br /> Kyrgyzstan!


</h1>
    <input className={styles.welcome__input} type="text" />

  </div>;
};

export default Welcome;