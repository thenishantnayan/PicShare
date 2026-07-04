import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CreatePost from "./pages/createpost";
import Feed from "./pages/feed";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect / to /create-post */}
        <Route path="/" element={<Navigate to="/create-post" replace />} />

        <Route path="/feed" element={<Feed />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;