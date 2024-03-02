import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Rafael Luz'
            content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa sequi, harum eveniet recusandae possimus maiores molestias ullam quo facilis labore quod, debitis dignissimos illo laboriosam assumenda minus, consequatur maxime accusantium.'
          />
          <Post 
            author='Renata Queiros'
            content='Um novo post muito legal'
          />
        </main>
      </div>
    </div>
  )
}
