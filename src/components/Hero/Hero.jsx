import { NavLink } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = ({ data }) => {
  return (
    <div id="home" className={[styles.hero]}>
      <div className={styles.hero_left}>
        <h1 className={styles.title}>{data.title}</h1>
        <img className={styles.mobile_image} src={data.image} alt={data.title} />

        <h2 className={styles.subtitle}>{data.subtitle}</h2>
        <p className={styles.description}>{data.description}</p>
        <NavLink to="./booking"><button className={styles.button_cta}>{data.calltoaction}</button></NavLink>
      </div>
      <div className={styles.hero_right}>
        <img className={styles.desktop_image} src={data.image} alt={data.title} />
      </div>
    </div>
  );
};

export default Hero;
