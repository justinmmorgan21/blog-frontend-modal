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
    // axios.get("http://localhost:3000/posts/1.json").then(response => {
    //   console.log(response.data);
    //   // setPosts(response.data);
    // })
    setIsPostsShowVisible(true);
    setcurrentPost(post);
  };

  const handleCreate = () => {
    axios.post("http://localhost:3000/posts.json", {
      title: "New One",
      body: "Here is some dummy text for funzies",
      image: "image1.com"
    }).then(response => {
      console.log(response.data);
    })
  }
  const handleUpdate = () => {
    axios.patch("http://localhost:3000/posts/2.json", {
      title: "CHANGED!!!!"
    }).then(response => {
      console.log(response.data);
    })
  }
  const handleDelete = () => {
    axios.delete("http://localhost:3000/posts/2.json").then(response => {
      console.log(response.data);
    })
  }

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <button onClick={handleIndex}>Post index</button>
      <button onClick={handleShow}>Post show</button>
      <button onClick={handleCreate}>Post create</button>
      <button onClick={handleUpdate}>Post update</button>
      <form></form>
      <button onClick={handleDelete}>Post delete</button>
      
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShow} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </main>
  );
}
