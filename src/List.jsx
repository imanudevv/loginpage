import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './List.css';

const List = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // handle logout → go back to login page
  const handleLogout = () => {
    navigate("/");
  };

  // fetch posts from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading posts...</p>;
  }

  return (
    <div className="list-container">
      <div className="header">
        <h1 className="title">Posts</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="grid">
        {posts.slice(0, 12).map((post) => (
          <div key={post.id} className="card">
            <h2 className="card-title">{post.title}</h2>
            <p className="card-body">{post.body.substring(0, 80)}...</p>
            <Link to={`/detail/${post.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
