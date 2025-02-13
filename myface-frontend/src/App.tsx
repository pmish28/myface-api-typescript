import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import UserDetails from './Pages/Users/UserDetails';
import PostList from './Pages/Postlist/Postlist';
import UserList from './Pages/Users/Userlist';



export function App() {
  return ( 
  <Router>
    <div>
      <h1>This title is on every page!</h1>
      <nav>
        <Link to= "/posts">Posts</Link>
        <Link to= "/home">Home</Link>
        <Link to= "/users">Users</Link>

      </nav>
      <Routes>
          <Route path="/posts"
            element={<PostList/>}/>
          <Route path="/home"
            element={<UserDetails/>}/>
          <Route path="/users"
            element={<UserList/>}/>
         
      </Routes>
      </div>
  </Router>
  );
  }

export default App
