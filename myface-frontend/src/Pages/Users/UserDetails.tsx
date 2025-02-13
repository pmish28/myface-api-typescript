import useFetch from "../../Utils/useFetch";
import { formatDate } from "date-fns";

 interface Users {
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
 
 interface UserPostModel {
     id: number;
     message: string;
     imageUrl: string;
     createdAt: Date;
 }
 


function UserDetails() {
  const { data, loading, error } = useFetch<Users>("http://localhost:3001/users/1");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;
  if(!data) return <p>Data not found!</p>
   
  return (
    <div>
      <img src={data.profileImageUrl}></img>
      <p>{data.name}</p>
      <p>{data.username}</p>
      <ul>
        <p>My Posts</p>
        {data.posts.map((post, index) => (
          <li key={index}>
            <p> {formatDate(post.createdAt, "dd-MM-yyyy")}</p>
            <img src={post.imageUrl} />
            <p>{post.message}</p>
            <p>{post.id}</p>
            {/*<p> Likes: {post.likes.length}</p>
            <p> Dislikes: {post.dislikes.length}</p>*/}
          </li>
        ))}
        ;
      </ul>
      <ul>
        <p>My Likes</p>
        {data.likes.map((post, index) => (
          <li key={index}>
            <p> {formatDate(post.createdAt, "dd-MM-yyyy")}</p>
            <img src={post.imageUrl} />
            <p>{post.message}</p>
            <p>{post.id}</p>
            {/*<p> Likes: {post.likes.length}</p>
            <p> Dislikes: {post.dislikes.length}</p>*/}
          </li>
        ))}
        ;
      </ul>
      <ul>
        <p>My Dislikes</p>
        {data.dislikes.map((post, index) => (
          <li key={index}>
            <p> {formatDate(post.createdAt, "dd-MM-yyyy")}</p>
            <img src={post.imageUrl} />
            <p>{post.message}</p>
            <p>{post.id}</p>
           {/* <p> Likes: {post.likes.length}</p>
            <p> Dislikes: {post.dislikes.length}</p>*/}
          </li>
        ))}
        ;
      </ul>
    </div>
  );
}
export default UserDetails;
