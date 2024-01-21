import { navLinks } from "../../data/NavLinks";
import Navbar from "../Navbar/Navbar";
import SectionContainer from "../SectionContainer/SectionContainer";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <SectionContainer outerColor="white" innerColor="white">
        <Navbar data={navLinks} />
      </SectionContainer>
    </header>
  );
};

export default Header;
