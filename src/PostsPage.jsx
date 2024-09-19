import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState } from "react";

export function PostsPage() {
  // let posts = [];
  const [posts, setPosts] = useState([]);
  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      // console.log(response.data);
      setPosts(response.data);
    })
  }

  return (
    <main>
      <PostsNew />
      <PostsIndex posts={posts} />
      <button onClick={handleIndex} >Get data</button>
    </main>
  );
}
