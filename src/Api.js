import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

export default function Api() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  const getData = () => {
    axios.get(API_URL).then((response) => {
      // console.log(response.data);
      setLoading(true);
      setPosts(response.data);
    });
  };


  const paginate = (number) => {
    setCurrentPage(number);
  }

  return (
    <React.Fragment>
      <div className="container">
        <Posts posts = {posts} getData={getData} currentPage={currentPage} postsPerPage={postsPerPage}/>
        <Pagination totalPosts={posts.length} currentPage={currentPage} postsPerPage={postsPerPage} paginate={paginate} loading={loading}/>
      </div>
    </React.Fragment>
  );
}
