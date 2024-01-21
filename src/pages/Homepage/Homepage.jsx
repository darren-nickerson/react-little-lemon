import React from "react";
import Hero from "../../components/Hero/Hero";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import MenuCard from "../../components/MenuCard/MenuCard";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import About from "../../components/About/About";
import styles from "./Homepage.module.css";
import { menuItems } from "../../data/MenuItems";
import { reviewData } from "../../data/ReviewData";
import { littleLemon } from "../../data/LittleLemon";

const Homepage = () => {
  return (
    <>
      <SectionContainer
        outerColor="var(--primary-color)"
        innerColor="var(--primary-color)"
        paddingTop="var(--size-100)"
        paddingBottom="var(--size-100)"
        tag="section"
      >
        <ul className={styles.hero_items}>
          {littleLemon.map((item) => (
            <li key={item.id}>
              <Hero data={item} />
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer
        outerColor="var(--border-color-light)"
        innerColor="var(--border-color-light)"
        paddingTop="var(--size-100)"
        paddingBottom="var(--size-100)"
        tag="section"
      >
        <div className={styles.title_row}>
          <h2 id="menu" className={styles.title}>Specials</h2>

          <button>Online Menu</button>
        </div>

        <ul className={styles.menu_items}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <MenuCard data={item} />
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer
        outerColor="var(--white-color)"
        innerColor="var(--white-color)"
        paddingTop="var(--size-100)"
        paddingBottom="var(--size-100)"
        tag="section"
      >
        <div className={styles.title_row}>
          <h2 className={styles.title}>Reviews</h2>
        </div>

        <ul className={styles.review_items}>
          {reviewData.map((item) => (
            <li key={item.id}>
              <ReviewCard data={item} />
            </li>
          ))}
        </ul>
      </SectionContainer>

 

<SectionContainer
        outerColor="var(--border-color-light)"
        innerColor="var(--border-color-light)"
        paddingTop="var(--size-100)"
        paddingBottom="var(--size-100)"
        tag="section"
      >        <About />
      </SectionContainer>
    </>
  );
};

export default Homepage;
