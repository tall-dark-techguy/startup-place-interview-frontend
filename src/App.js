import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/" element={<Register />} exact />
      </Routes>
    </div>
  );
}

export default App;
