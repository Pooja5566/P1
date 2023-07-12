import React from "react";
import BlogForm from "./Firebase/BlogForm";
import BlogList from "./Firebase/BlogList";

const BlogPage = () => {
  return (
    <div>
      <BlogForm />
      <BlogList />
    </div>
  );
};

export default BlogPage;
