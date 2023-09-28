import React from "react";
import blogData from "../data/blog";
import Header from "./Header.jsx";
import About from"./About";
import ArticleList from "./ArticleList";

console.log(blogData.name);

function App() {
  return (
    <div className="App">
      <Header  name={blogData.name}> </Header>
      <About  image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}
export default App;



