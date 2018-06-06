import Link from 'next/link'

export default props =>
  <article>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
    {/* render the URL as /post/:id */}
    <Link href={{ pathname: '/async/post', query: { id: props.id } }} as={`/async/post/${props.id}`}>
      <a>Read more...</a>
    </Link>
  </article>
