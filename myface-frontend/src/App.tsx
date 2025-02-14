import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/App.scss'
import Layout from './Pages/Layout';
import UserDetails from './Pages/UserDetails';
import PostList from './Pages/Postlist';
import UserList from './Pages/UserList';


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
