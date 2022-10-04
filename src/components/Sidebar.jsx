import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ86kDhi2KH9HPN3Dk1fh0Kwbh2POfiYtMZw&usqp=CAU"
        alt=""
      ></img>

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/44329442?v=4"
          alt=""
        />
        <strong>Naomi Iyama</strong>
        <span>Web developer</span>
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
