import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/createpost";
import Feed from "./pages/feed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;