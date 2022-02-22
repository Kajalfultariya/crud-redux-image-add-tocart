import React, { useState } from "react";

import axios from "axios";

 function GetData() {
  const [posts, setPosts] = useState([]);

  const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    withCredentials: true,
    myCustomHeader: "fint vær idag"
  });

  const getPosts = async () => {
    try {
      //const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const res = await axiosInstance("/posts");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <button onClick={getPosts}>Get posts</button>
      {posts.map(post => (
        <p key={post.id}>{post.id}</p>
      ))}




      
    </div>
  );
}
export default GetData;
