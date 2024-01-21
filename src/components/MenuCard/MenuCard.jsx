import styles from "./MenuCard.module.css";
import { LuBike } from "react-icons/lu";

const MenuCard = ({ data }) => {
  return (
    <article className={styles.menu_card}>
      <img src={data.image} alt="" />
      <header>
        <h3 className={styles}>{data.name}</h3>
        <h3 className={styles.price}> {data.price}</h3>
      </header>
      <div className={styles.content}>
        <p>{data.description}</p>
      </div>
      <footer>
        <h4>Order Online</h4>{" "}
        <div className={styles.bike_icon}><LuBike /></div>  
      </footer>
    </article>
  );
};
export default MenuCard;
