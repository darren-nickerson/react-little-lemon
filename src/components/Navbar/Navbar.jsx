import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/images/logo.svg";
import { LuShoppingCart, LuMenu } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  if (!data) {
    return null; 
  }

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop navigation */}
      <nav className={styles.desktop}>
        <NavLink to="/#home">
          {" "}
          <div className={styles.logo}>
            <img src={Logo} alt="Logo Placeholder" />
          </div>
        </NavLink>{" "}
        <div className={styles.navlinks}>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={
                    location.pathname + location.hash === item.link
                      ? styles.active
                      : styles.not_active
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.icon}>
            <LuShoppingCart />
          </div>
        </div>
      </nav>

      {/* Mobile navigation */}
      <nav className={styles.mobile}>
        <div className={styles.topbar}>
          {/* Toggle button for mobile menu */}
          <div onClick={() => setIsOpen(!isOpen)} className={styles.icon}>
            <LuMenu />
          </div>

          {/* Logo */}
          <img className={styles.logo} src={Logo} alt="Logo Placeholder" />

          {/* Shopping Cart icon */}
          <div className={styles.icon}>
            <LuShoppingCart />
          </div>
        </div>

        {/* Mobile menu links */}
        {isOpen && (
          <div className={styles.navlinks}>
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  {/* NavLink with onClick to close the mobile menu */}
                  <NavLink
                    to={item.link}
                    onClick={closeMobileMenu}
                    className={
                      location.pathname + location.hash === item.link
                        ? styles.active
                        : styles.not_active
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
