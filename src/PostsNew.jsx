
export function PostsNew(props) {
  function clear() {
    const titleInput = document.getElementById("title");
    const bodyInput = document.getElementById("body");
    titleInput.value = "";
    bodyInput.value = "";
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreate(params);
  }
  
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"></label>
        <input type="text" id="title" name="title" placeholder="Title"></input><br />
        <label htmlFor="body"></label>
        <textarea type="text" rows="4" id="body" name="body" placeholder="Post Content"></textarea><br />
        <label htmlFor="image"></label>
        <input type="text" id="image" name="image" placeholder="Image"></input><br />
        <input type="file"></input><br />
        <label htmlFor="submit"></label>
        <button type="submit" id="submit" name="submit">Submit</button>

        <button id="clear" onClick={clear}>Clear</button>
      </form>
    </div>
  );
}
