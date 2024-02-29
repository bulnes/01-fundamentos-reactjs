import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/bulnes.png",
      name: "John",
      role: "Software Engineer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "paragraph",
        content: "👉 jane.design/doctorcare"
      },
      {
        type: "paragraph",
        content: "#novoprojeto #nlw #rocketseat"
      }
    ],
    publishedAt: new Date("2023-09-10"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/bulnes.png",
      name: "John 2",
      role: "Software Engineer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "paragraph",
        content: "👉 jane.design/doctorcare"
      },
      {
        type: "paragraph",
        content: "#novoprojeto #nlw #rocketseat"
      }
    ],
    publishedAt: new Date("2023-09-10"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
