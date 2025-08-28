import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Detail = () => {
  const { id } = useParams();            // ✅ get post id from URL
  const navigate = useNavigate();        // ✅ navigation
  const [post, setPost] = useState({});  // ✅ one object, not array
  const [loading, setLoading] = useState(true);

  // handle logout → back to login
  const handleLogout = () => {
    navigate("/");
  };

  // fetch detail of single post
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching detail:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="loading">Loading post details...</p>;
  }

  return (
    <div className="detail-container">
      <div className="header">
        <h1 className="title">Post Detail</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="card">
        <h2 className="card-title">{post.title}</h2>
        <p className="card-body">{post.body}</p>
      </div>

      <button className="back-btn" onClick={() => navigate("/list")}>
        ← Back to List
      </button>
    </div>
  );
};

export default Detail;
