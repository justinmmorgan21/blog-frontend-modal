export function PostsNew() {
  function clear() {
    const titleInput = document.getElementById("title");
    const bodyInput = document.getElementById("body");
    titleInput.value = "";
    bodyInput.value = "";
  }
  
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form method="POST" action="http://localhost:3000/posts.json">
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title"></input><br />
        <label htmlFor="body">Body: </label>
        <input type="text" id="body" name="body"></input><br />
        <label htmlFor="image">Image: </label>
        <input type="text" id="image" name="image"></input><br />
      
        <label htmlFor="submit"></label>
        <button type="submit" id="submit" name="submit">Submit</button>

        

        <button id="clear" onClick={clear}>Clear</button>
      </form>
    </div>
  );
}
