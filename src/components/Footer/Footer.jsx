import SectionContainer from "../SectionContainer/SectionContainer";
import styles from "./Footer.module.css";
import FooterLogo from "../../assets/images/small_logo.png";

const Footer = ({data}) => {
  return (
    <SectionContainer
      outerColor="var(--white-color)"
      innerColor="var(--white-color)"
      paddingTop="var(--size-120)"
      paddingBottom="var(--size-120)"
      tag="footer"
    >
      <div className={styles.footer_container}>
        <div className={styles.footer_logo}>
          <img src={FooterLogo} alt="Little Lemon Logo" />
        </div>

        {/* Little Lemon Section */}
        <div>
          <h3>Little Lemon</h3>
          <ul>
            {data
              .filter((link) => link.category === "Little Lemon")
              .map((link) => (
                <li key={`little-lemon-${link.label}`}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3>Contact</h3>
          <ul>
            {data
              .filter((link) => link.category === "Contact")
              .map((link) => (
                <li key={`contact-${link.label}`}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3>Social Media</h3>
          <ul>
            {data
              .filter((link) => link.category === "Social Media")
              .map((link) => (
                <li key={`social-media-${link.label}`}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Footer;
