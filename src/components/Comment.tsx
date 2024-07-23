import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentsProps{
    content: string
    deleteComment: (comment:string) => void
}

export function Comment({content, deleteComment}:CommentsProps)
{

    //manipulação dos likes dos comentários
    const [likeCount, setLikeCount] = useState(0);

    function likeComment()
    {
        setLikeCount(
            (state)=>{
                return state + 1;
            }
        );
    }


    //função para deletar comentarios
    function deleteComments()
    {
        deleteComment(content)
    }


    return(
        <div className={styles.comment}>
            <Avatar notBorder src="https://github.com/AugustoRibeiro7.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Augusto Paiva Ribeiro</strong>
                            <time title='6 de Maio de 2024 às 21:10' dateTime="2024-06-06 21:10:30">Cerca de 1h atrás</time>
                            
                        </div>
                        <button title='Deletar comentário' onClick={deleteComments}><Trash size={24} /></button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={likeComment}>
                        <ThumbsUp />
                        Gostei <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}