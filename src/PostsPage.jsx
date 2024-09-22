import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setcurrentPost] = useState({});
  
  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      setPosts(response.data);
    })
  }

  const handleShow = (post) => {
    setIsPostsShowVisible(true);
    setcurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndex, []);

  return (
    <main>      
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShow} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </main>
  );
}
