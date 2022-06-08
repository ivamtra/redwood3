import { Link, routes } from '@redwoodjs/router'
import CommentsCell from 'src/components/CommentsCell'
import CommentForm from 'src/components/CommentForm'

const Article = ({ article }) => {
  return (
    <article>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">{article.body}</div>
      <div className="mt-12">
        <CommentForm postId={article.id} />
        <div className="mt-12">
          <CommentsCell postId={article.id} />
        </div>
      </div>
    </article>
  )
}

export default Article
