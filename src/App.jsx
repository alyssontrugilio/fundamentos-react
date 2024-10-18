import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Post } from "./components/post/Post";

import styles from "./App.module.css";

import "./global.css";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AlyssonTrugilio.png',
      name: 'Alysson Trugilio',
      role: 'Desenvolvedor Junior'
    },
    content : [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },


  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Desenvolvedor Senior'
    },
    content : [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },

];



function App() {
  console.log(post);
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {post.map(post => {
       return  (
         <Post 
         author= {post.author}
         content= {post.content}
         publishedAt={post.publishedAt}
         />
       )
         })}
        
        </main>
      </div>
    </div>
  );
}

export default App;
