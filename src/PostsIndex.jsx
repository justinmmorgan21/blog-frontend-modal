export function PostsIndex(props) {
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <p>The name is {props.name}</p>
      {props.posts.map(post => (
        <div key={post.id}>
          <h3 className="title">{post.title}</h3>
          <p>{post.body}</p>
          <img src={post.image} />
        </div>
      ))}


    </div>
  );
}
