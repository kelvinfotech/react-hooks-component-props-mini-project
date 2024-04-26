import React from "react";
import About from "../components/About";
import ArticleList from "../components/ArticleList";
import Article from "../components/Article";
import App from "../components/App";
import Header from "../components/Header";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList articles={blogData.posts} data-testid="article-list-component" />
      {blogData.posts.map((post) => (
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
      ))}
    </div>
  );
}

export default App;
