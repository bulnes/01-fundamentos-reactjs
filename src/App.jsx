import { Post } from "./Post";
import { Header } from "./components/Header";

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post author="John" content="Hello, world!" />
      <Post author="Jane" content="React is great!" />
    </div>
  )
}
