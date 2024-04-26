import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index} // Unique key attribute
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
