import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Bloglist from "./Pages/Bloglist";
import AddBlog from "./Pages/AddBlog";
import AddConfirm from "./Pages/BlogAddConfirm";
import DeleteOne from "./Pages/BlogDeleteConfirm";
import UpdateBlog from "./Components/UpdateBlog";
import DeleteAll from "./Pages/DeleteAllConfirm";
import BlogPage from "./Pages/BlogPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Bloglist />} />
        <Route path="/create-blog" element={<AddBlog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/blog-added" element={<AddConfirm />} />
        <Route path="/blog-deleted" element={<DeleteOne />} />
        <Route path="/blogs-deleted" element={<DeleteAll />} />
        <Route path="/blog-update/:id" element={<UpdateBlog />} />
        <Route path="/user-login" element={<LoginPage />} />
        <Route path="/user-signup" element={<SignUpPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
