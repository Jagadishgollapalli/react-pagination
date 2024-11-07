import React, { useState } from "react";
import "./Api.css";

function Posts({ posts, getData, currentPage, postsPerPage }) {

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={getData}>
        Get Posts
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post, id) => {
            return (
              <tr>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Posts;
