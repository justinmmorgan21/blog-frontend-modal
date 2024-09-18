export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="cards">
        {props.posts.map(post => (
        <div className="card" key={post.id}>
          <h3 className="title">{post.title}</h3>
          <p>{post.body}</p>
          <img src={post.image} />
        </div>
        ))}
      </div>
    </div>
  );
}
