import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>

            <Link className={styles.logo} to="/">
                <img src='https://www.logodesign.net/logo/abstract-hand-with-paint-splashes-3121ld.png' alt={'MUSIC CATALOG'} />
            </Link>
            
            <div className={styles.authSection}>
                <Link to="/login">
                    <button>Sign in</button>
                </Link>
                <Link to="/register">
                    <button>Create account</button>
                </Link>
            </div>
            
        </header>
    )
}

export default Header;