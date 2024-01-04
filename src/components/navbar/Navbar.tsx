import styles from "./navbar.module.css"

const Navbar = () => {
    return ( 
        <header className={styles.container}>
           <div className={styles.social}></div> 
           <div className={styles.logo}></div> 
           <div className={styles.links}></div> 
           <div className={styles.dashboard}></div> 
        </header>
     );
}
 
export default Navbar;