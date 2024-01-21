import React from 'react';
import styles from './ErrorPage.module.css';
import { NavLink } from 'react-router-dom';
export default function ErrorPage() {
  return (
    <div className={styles.error_page_container}>
      <h1>404 Error: Page not found.</h1>
      <NavLink to="/"><button>Return to homepage</button></NavLink>
    </div>
  );
}
