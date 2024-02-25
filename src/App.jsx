import { Post } from './Post'
import { Header } from './components/Header'

import './styles.css'

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Rafael Luz" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita voluptatem porro sint! Aspernatur, iure minus eos quia laudantium accusantium nisi adipisci quaerat est quae veritatis porro quos blanditiis aut."
      /> 
      <Post 
        author="Marquinhos" 
        content="Melhor curso!"
      />
    </div>
  )
}
