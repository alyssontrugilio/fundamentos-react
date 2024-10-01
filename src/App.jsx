import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Post } from "./components/post/Post";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <br />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
