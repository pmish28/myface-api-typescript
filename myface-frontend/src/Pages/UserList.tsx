import useFetch from "../Hooks/useFetch";
import "../Styles/Userlist.scss";

interface UserApiResponse {
  results: Users[];
}

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

function UserList() {
  const { data, loading, error } = useFetch<UserApiResponse>(
    "http://localhost:3001/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;
  if (!data) return <p>Error: Data not found</p>;

  return (
    <div className="users">
      <ul className="usercontainer">
        {data.results.map((user, index) => (
          <li className="user" key={index}>
            <img className= "profileimage" src={user.profileImageUrl} />
            <p className="name"> {user.name}</p>
            <p className="username">{user.username}</p>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
}

export default UserList;
