import { useColorMode } from "@chakra-ui/react";
import React from "react";
import styles from "./switchcss.module.css";
const SwitchButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <label className={styles.switch}>
      <input type="checkbox" isChecked={isDark} onChange={toggleColorMode} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default SwitchButton;
