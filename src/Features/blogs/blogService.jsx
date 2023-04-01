import axios from "axios";

const serverData = process.env.REACT_APP_ENDPOINT;

const getBlog = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${serverData}/blogs/user-blog`, config);

  return response.data;
};

const getSingle = async (blogId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `${serverData}/blogs/single/${blogId}`,
    config
  );

  return response.data;
};

const createBlog = async (blogData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${serverData}/blogs/create-one`,
    blogData,
    config
  );
  return response.data;
};

const updateBlog = async (blogId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${serverData}/blogs/update-user-blog/${blogId}`,
    config
  );
  return response.data;
};

const deleteBlog = async (blogId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `${serverData}/blogs/delete-user-blog/${blogId}`,
    config
  );
  return response.data;
};

const deleteAll = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `${serverData}/blogs/delete-user-blogs`,
    config
  );
  return response.data;
};

const blogService = {
  getBlog,
  getSingle,
  createBlog,
  updateBlog,
  deleteBlog,
  deleteAll,
};

export default blogService;
