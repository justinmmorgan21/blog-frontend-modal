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
      <form>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title"></input><br />
        <label htmlFor="body">Body: </label>
        <input type="text" id="body" name="body"></input><br />
        <label htmlFor="image">Image: </label>
        <input type="url"></input><br />
      
        <label htmlFor="submit"></label>
        <input type="submit" id="submit" name="submit"></input>

        

        <button id="clear" onClick={clear}>Clear</button>
      </form>
    </div>
  );
}
