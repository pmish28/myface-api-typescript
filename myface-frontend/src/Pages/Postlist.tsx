import useFetch from "../Hooks/useFetch";
import { formatDate } from "date-fns";
import "../Styles/Postlist.scss";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";

interface PostsApiResponse {
  results: Post[];
}

interface Post {
  id: number;
  message: string;
  imageUrl: string;
  createdAt: Date;
  postedBy: PostUserModel;
  likedBy: PostUserModel[];
  dislikedBy: PostUserModel[];
}
interface PostUserModel {
  id: number;
  name: string;
  username: string;
  email: string;
}

function PostList() {
  const { data, loading, error } = useFetch<PostsApiResponse>(
    "http://localhost:3001/posts"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;
  if (!data) return <p>Error: Data not found</p>;
  return (
    <div className="postpage">
      <ul className="postcontainer">
        {data.results.map((post, index) => (
          <li className="post" key={index}>

            <div className="namewrapper">
              <p>{post.postedBy.name}</p>
              <img className ="likedislikeimg"src={like} />
              <p> {post.likedBy.length}</p>
              <img className ="likedislikeimg" src={dislike} />
              <p>{post.dislikedBy.length}</p>
            </div>

            <img className="postimage" src={post.imageUrl} />

            <div className="messagewrapper">
            <p>{post.message}</p>
            <p>{formatDate(post.createdAt, "dd-MM-yyyy")} </p>
            </div>
            
          </li>
        ))};
      </ul>
    </div>
  );
}

export default PostList;
