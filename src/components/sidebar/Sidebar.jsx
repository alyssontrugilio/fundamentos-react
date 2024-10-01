import { PencilLine } from "phosphor-react";
import { Avatar } from "../avatar/Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1623520333087-62b8793e3d23?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image de capa"
        className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/AlyssonTrugilio.png" />
        <strong>Alysson Silva</strong>
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
