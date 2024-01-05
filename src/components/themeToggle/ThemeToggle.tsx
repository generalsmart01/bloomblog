"use client"

import Image from "next/image";
import styles from "./themetoggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)!;

 console.log(theme)

  return (
    <div className={styles.container} role="button">
      <Image src="/moon.png" alt="moon png" width={15} height={15} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="sun png" width={15} height={15} />
    </div>
  );
};

export default ThemeToggle;
