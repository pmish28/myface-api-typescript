
import useFetch from "../../Utils/useFetch";
import { formatDate } from "date-fns";
import "./Postlist.scss";

interface PostsApiResponse {
    results: Post[];
}

interface Post{
    id: number;
    message: string;
    imageUrl: string;    
    createdAt: Date;
    postedBy: PostUserModel;
    likedBy: PostUserModel[]
    dislikedBy: PostUserModel[];
}
interface PostUserModel {
    id: number;
    name: string;
    username: string;
    email: string;
}


function PostList() {
const {data,loading,error}= useFetch<PostsApiResponse>("http://localhost:3001/posts");

if(loading)return<p>Loading...</p>;
if(error) return<p>Error:{error}</p>;
if (!data) return <p>Error: Data not found</p>;
return (
        <div>
        <ul className="postcontainer">
            {data.results.map((post,index) => (
                <li className = "post" key={index}>                            
                    <p> {formatDate(post.createdAt,"dd-MM-yyyy")}</p>
                    <img src = {post.imageUrl} />
                    <p>{post.message}</p>
                    <p>{post.postedBy.name}</p>
                    <p> Likes: {post.likedBy.length}</p>
                    <p> Dislikes: {post.dislikedBy.length}</p>
                </li>
            ))};

        </ul>
        </div>
        );
}

export default PostList;