import type { ReactNode } from "react";
import styles from "../styles/Card.module.css";



interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => (
  <div className={styles.card}>{children}</div>
);

export default Card;
