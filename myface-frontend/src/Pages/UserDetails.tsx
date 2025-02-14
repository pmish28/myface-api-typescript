import useFetch from "../Hooks/useFetch";
import "../Styles/UserDetails.scss";
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
    <div className="home">
      <div className="profilewrapper">
      <img className = "myprofile" src={data.profileImageUrl}></img>
      <div className = "namewrapper">
      <p className="myname"> {data.name}</p>
      <p className= "myusername">{data.username}</p>
      </div>
      </div>
      <div className = "mycontainer">
      <h3> My Posts</h3>
      <ul className= "postsection">
        {data.posts.map((post, index) => (
          <li className="myposts"key={index}>
            <p> {formatDate(post.createdAt, "dd-MM-yyyy")}</p>
            <img src={post.imageUrl} />
            <p>{post.message}</p>
            {/*<p> Likes: {post.likes.length}</p>
            <p> Dislikes: {post.dislikes.length}</p>*/}
          </li>
        ))}
        ;
      </ul>
      <h3>My Likes</h3>
      <ul className="postsection">
        {data.likes.map((post, index) => (
          <li className="myposts" key={index}>
            <p> {formatDate(post.createdAt, "dd-MM-yyyy")}</p>
            <img src={post.imageUrl} />
            <p>{post.message}</p>
            {/*<p> Likes: {post.likes.length}</p>
            <p> Dislikes: {post.dislikes.length}</p>*/}
          </li>
        ))}
        ;
      </ul>
      <h3>My Dislikes</h3>
      <ul className="postsection">
        {data.dislikes.map((post, index) => (
          <li className="myposts" key={index}>
            <p> {formatDate(post.createdAt, "dd-MM-yyyy")}</p>
            <img src={post.imageUrl} />
            <p>{post.message}</p>
           {/* <p> Likes: {post.likes.length}</p>
            <p> Dislikes: {post.dislikes.length}</p>*/}
          </li>
        ))}
        ;
      </ul>
      </div>
    </div>
  );
}
export default UserDetails;
