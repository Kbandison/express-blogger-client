import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Bloglist from "./Pages/Bloglist";
import AddBlog from "./Pages/AddBlog";
import AddConfirm from "./Pages/BlogAddConfirm";
import DeleteOne from "./Pages/BlogDeleteConfirm";
import UpdateBlog from "./Components/UpdateBlog";
import DeleteAll from "./Pages/DeleteAllConfirm";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Bloglist />} />
          <Route path="/create-blog" element={<AddBlog />} />
          <Route path="/blog-added" element={<AddConfirm />} />
          <Route path="/blog-deleted" element={<DeleteOne />} />
          <Route path="/blogs-deleted" element={<DeleteAll />} />
          <Route path="/blog-update/:id" element={<UpdateBlog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
