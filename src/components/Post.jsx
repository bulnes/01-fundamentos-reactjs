import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/bulnes.png" />
          <div className={styles.authorInfo}>
            <strong>John Doe</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time className={styles.date} dateTime="2021-09-10">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>👉 jane.design/doctorcare</p>

        <p>#novoprojeto #nlw #rocketseat</p>
      </div>
    </article>
  );
}
