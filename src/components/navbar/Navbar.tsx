import Image from "next/image";
import styles from "./navbar.module.css"
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
    return ( 
        <header className={styles.container}>
           <div className={styles.social}>
            <Image src="/facebook.png" alt="facebook logo png" width={24} height={24} />
            <Image src="/instagram.png" alt="facebook logo png" width={24} height={24} />
            <Image src="/tiktok-icon-png.png" alt="facebook logo png" width={24} height={24} />
            <Image src="/youtube-square-logo.png" alt="facebook logo png" width={24} height={24} /> 
            </div> 
           <div className={styles.logo}>
            <Image src="/brandlogo.png" alt="bloomblog logo" width={120} height={50} />
            </div> 
           <div className={styles.links}>
            <ThemeToggle />
            <Link href="/" />Homepage
            <Link href="/" />About
            <Link href="/" />Contact
            <AuthLinks />
            </div> 
           <div className={styles.dashboard}></div> 
        </header>
     );
}
 
export default Navbar;