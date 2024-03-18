import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  // Muito bom Devon, parabéns!! 👏👏

  const publishedDateTitle = format(publishedAt, "dd 'de' MMMM 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publsishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreationNewComment(e) {
    e.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(e) {
    e.target.setCustomValidity("");
    setNewCommentText(e.target.value);
  }

  function handleNewCommentInvalid(e) {
    e.target.setCustomValidity("O comentário não pode ser vazio.");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleted = comments.filter(comment => comment !== commentToDelete);
    setComments(commentsWithoutDeleted);
  }

  // Variaveis auxiliares
  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasBorder />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          className={styles.date}
          title={publishedDateTitle}
          dateTime={publishedAt.toISOString()}
        >
          Publicado {publsishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ type, content }, index) => {
          if (type === "paragraph") {
            return <p key={index}>{content}</p>;
          }

          if (type === "link") {
            return (
              <p key={index}>
                <a href={content} target="_blank" rel="noreferrer">
                  {content}
                </a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreationNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback:</strong>

        <textarea 
          placeholder="Deixe um comentário" 
          name="comment" 
          value={newCommentText} 
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, key) => {
          return (
            <Comment 
              key={key} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
