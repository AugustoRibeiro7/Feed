import {Post, PostType} from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl:'https://github.com/AugustoRibeiro7.png',
      name:"Augusto Ribeiro",
      role:"Web Developer"
    },
    content:[
      { type: 'paragraph', content: 'Fala galeraa'},
      {type: 'paragraph', content:'Acabei de upar mais um projetin monstro, to aprendendo muito.🫨'},
      {type: 'link', content:'augusto.portfolio/dataforge'}
    ],
    publishAt: new Date('2023-07-02 23:30:00')
  },
  {
    id: 2,
    author:{
      avatarUrl:'https://media.licdn.com/dms/image/D4E03AQFCF8iTG6Bsaw/profile-displayphoto-shrink_800_800/0/1665228195361?e=1726099200&v=beta&t=eys8Up8dRp1htHXytODHR4k-OVXHpLw13f_H0HjtM_c',
      name:"Paola Izabela",
      role:"Psicologa"
    },
    content:[
      { type: 'paragraph', content: 'Olá,'},
      {type: 'paragraph', content:'Conteúdo novo sobre bases morfologicas'},
      {type: 'link', content:'paola.psico/basesmorfologicas'}
    ],
    publishAt: new Date('2024-06-07 21:00:00')
  }
]
export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post =>{
            return (
              <Post 
                key={post.id} 
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
    
  )
}

