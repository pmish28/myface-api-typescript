
import { useEffect, useState } from "react";

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

function Postlist() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/posts")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Unable to Fetch Data")
                }
                return response.json();
            })
            .then(posts => {
                setPosts(posts);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
    }, []);

    if (loading)
        return (
            <p>
                Loading...
            </p>
        );
    else if (error) {
        return (
            <p>
                Error: {error}
            </p>
        );

    }
    else {

        return (
            <div>
                <p>PostList</p>
                <ul>
                    {posts.results.map((post,index) => (
                        <li key={index}>
                            <p> Post Id:{post.id}</p>
                            <p> Date: {post.createdAt}</p>
                            <img src = {post.imageUrl} />
                            <p> Post message: {post.message}</p>
                            <p>{post.postedBy.name}</p>
                            <p> Liked By: {post.likedBy.map((likes)=>likes.name)}</p>
                            <p> Disliked By: {post.dislikedBy.map((dislikes)=>dislikes.name)}</p>

                        </li>
                    ))}

                </ul>
            </div>
        );
    }
}

export default Postlist;