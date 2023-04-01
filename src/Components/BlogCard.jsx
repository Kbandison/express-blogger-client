const BlogCard = (props) => {
  const { blog } = props;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.text}</p>
      <p>Created: {new Date(blog.createdAt).toLocaleString("en-US")}</p>
      {blog.updatedAt && (
        <p>Updated: {new Date(blog.updatedAt).toLocaleString("en-US")}</p>
      )}
    </div>
  );
};

export default BlogCard;
