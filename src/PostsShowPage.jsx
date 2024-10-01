import {PostsShow} from "./PostsShow"
import {useLoaderData} from "react-router-dom";

export function PostsShowPage() {
  const post = useLoaderData();
  console.log("in show page: " + post);

  return (
    <div>
      <PostsShow  post={post}/>
    </div>
  );
}