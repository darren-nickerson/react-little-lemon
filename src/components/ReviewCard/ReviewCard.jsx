import styles from "./ReviewCard.module.css";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ data }) => {
  const starsRender = data.stars.map((color, index) => (
    <FaStar key={index} style={{ color }} />
  ));

  return (
    <div className={styles.review_card}>
      <header className={styles.card_header}>
        <img src={data.image} alt={data.id} />
        <div>
          <h3>{data.name}</h3>
          <div className={styles.starContainer}>{starsRender}</div>
        </div>
      </header>
      <div className={styles.content}>
        <p>{data.review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
