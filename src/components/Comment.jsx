import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/rafaellladm.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Luz</strong>
              <time title="05 de Março ás 22:35" dateTime="2024-03-05 22:35:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}