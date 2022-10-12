import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/" className={ navData => navData.isActive ? styles.active : styles.item }>Go to start page</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/content/" className={ navData => navData.isActive ? styles.active : styles.item }>Show music</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;