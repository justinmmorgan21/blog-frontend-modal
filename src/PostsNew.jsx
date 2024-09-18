export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title"></input><br />
        <label htmlFor="body">Body: </label>
        <input type="textarea" id="body" name="body"></input><br />
        <label htmlFor="image">Image: </label>
        <input type="url"></input><br />
        <button>Submit</button>
      </form>
    </div>
  );
}
