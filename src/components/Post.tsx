import { ChangeEvent, FormEvent, useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'


//interfaces
interface Author{
    name: string
    role: string
    avatarUrl: string
}

interface Content{
    type: 'paragraph' | 'link'
    content: string
}

export interface PostType{
    id: number
    author: Author
    content: Content[]
    publishAt: Date
}

interface PostProps{
    post:PostType
}

//COMPONENTE POST  
export function Post({post}:PostProps)
{
    //vetor de comentarios
    const [comments, setComments] = useState([
        "Muito bom esse projeto, parabens!!"
    ]);

    //texto dos novos comentarios
    const [newTextComment, setNewTextComment] = useState('');

    //formaação das horas
    const publishedDateFormatted = format(post.publishAt, "d 'de' LLLL 'às' HH:mm'h'",
        {locale:ptBR}
    )

    const publishDateRelativeToNow = formatDistanceToNow(post.publishAt, 
        {
            locale: ptBR,
            addSuffix:true
        }
    )

    //funções para manipular os comentários dos posts
    function createNewTextComment(event:ChangeEvent<HTMLTextAreaElement>)
    {
        setNewTextComment(event.target.value);
    }
    
    function createNewComment(event:FormEvent)
    {
        event.preventDefault()


        //criando novo comentario
        setComments([...comments, newTextComment])


        //limpando textarea de comentario
        setNewTextComment('');
    }

    function deleteComment(commentDelete: string)
    {
        const commentsWithoutDeletedOne = comments.filter(comment=>{
            return comment != commentDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newTextComment.length == 0;

    return(

        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishAt.toISOString()}>
                    {publishDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(content=>{
                    switch (content.type) {
                        case "paragraph":
                            return <p key={content.content}>{content.content}</p>
                            break;

                        case "link":
                            return <p key={content.content}>👉{' '}<a href="">{content.content} </a></p>
                            break;
                    
                        default:
                            break;
                    }
                })}
                
            </div>

            <form onSubmit={createNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment' 
                    placeholder='Deixe um comentário' 
                    value={newTextComment} 
                    onChange={createNewTextComment}

                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment =>{
                        return <Comment key={comment} content={comment} deleteComment={deleteComment} />
                    })
                }
            </div>
        </article>
    )
}