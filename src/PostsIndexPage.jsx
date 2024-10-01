import {useLoaderData} from 'react-router-dom';
import {useState} from 'react'
import {Modal} from './Modal.jsx'
import {PostsShow} from './PostsShow.jsx'

export function PostsIndexPage() {

  const posts = useLoaderData();

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setcurrentPost] = useState({});

  const handleShow = post => {
    setcurrentPost(post);
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="cards">
      {
        posts.map(post => (
          <div className="card" key={post.id}>
          <h3 className="title">{post.title}</h3>
          <p>{post.body}</p>
          <img src={post.image} />
          <button onClick={()=>handleShow(post)}>More Info</button>
        </div>
        ))
      }
      </div>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
