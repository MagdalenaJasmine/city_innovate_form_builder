import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormPage from "./FormPage";
import LoginForm from "./Login/LoginForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/form" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
