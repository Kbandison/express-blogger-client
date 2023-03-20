const BlogCard = (props) => {
  const { blog } = props;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.text}</p>
      <p>Created: {blog.createdAt}</p>
    </div>
  );
};

export default BlogCard;
