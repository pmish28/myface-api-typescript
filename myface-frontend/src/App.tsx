import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import UserDetails from './Pages/Users/UserDetails';
import PostList from './Pages/Postlist/Postlist';
import UserList from './Pages/Users/Userlist';
import Layout from './Pages/Layout';

export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/posts"
            element={<PostList />} />
          <Route path="/home"
            element={<UserDetails />} />
          <Route path="/users"
            element={<UserList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
