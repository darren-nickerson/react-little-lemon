import styles from "./About.module.css";
import Chef1 from "../../assets/images/chef1.jpg";
import Chef2 from "../../assets/images/chef2.jpg";
const About = () => {
  return (
 
      <div id="about" className={styles.about}>
        <div className={styles.left_side}>
          <h2>About</h2>
          <p>
              "Little Lemon is a cozy restaurant known for its modern
              lemon-themed decor and creative fusion menu. Signature dishes like
              Lemon Zest Salmon and Citrus Bliss Pasta are highlights. The
              vibrant atmosphere and community events make it a local favorite."
            </p>
        </div>
        <div className={styles.right_side}>
          <div className={styles.image_container_one}>
            <img src={Chef1} alt="" />
          </div>
          <div className={styles.image_container_two}>
            <img src={Chef2} alt="" />
          </div>
        </div>
      </div>
  );
};

export default About;
