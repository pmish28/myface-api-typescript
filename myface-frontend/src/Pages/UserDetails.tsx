import { useEffect, useState } from "react";

interface UserPostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: Date;
}

export interface User {
    id: number;
    name: string;
    username: string;
    profileImageUrl: string;
    coverImageUrl: string;
    email: string;
    posts: UserPostModel[];
    likes: UserPostModel[];
    dislikes: UserPostModel[];
}

function UserDetails(){
    const [userDetail,setUserDetail] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/users/1")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Unable to Fetch Data")
                }
                return response.json();
            })
            .then(posts => {
                setUserDetail(posts);
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
                <p>User Details</p>
                <p> User Id:{userDetail.id}</p>
                <p> Name: {userDetail.name}</p>
                <img src = {userDetail.imageUrl}></img>   
                <ul>                         
                    Posts: {userDetail.posts.map((post)=>(
                                <li>
                                    {post.message}
                                </li>
                                ))};
                </ul>
                <ul>                         
                    Posts: {userDetail.likes.map((like)=>(
                                <li>
                                    {like.message}
                                </li>
                                ))};
                </ul>
                <ul>                         
                    Dislikes: {userDetail.dislikes.map((dislike)=>(
                                <li>
                                    {dislike.message}
                                </li>
                                ))};    
                </ul>
                  
            </div>
        );
    }
}

export default UserDetails;