import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=60&w=500&auto=format&fit=crop"
        alt=""
        loading="lazy"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/bulnes.png" />

        <strong>Bruno Bulnes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
