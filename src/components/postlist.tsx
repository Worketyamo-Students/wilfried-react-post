/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 18/09/2024 - 15:47:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/09/2024
    * - Author          : Hp
    * - Modification    : 
**/
import  { useState, useEffect } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/post');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message); 
        setLoading(false); 
      }
    };

    fetchPosts();
  }, []); 

  if (loading) {
    return <p >Chargement...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div className='bg-red-600'>
      <h1 className='text-[2rem]'>Liste des posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;