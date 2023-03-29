import LoginScreen from "./modules/Login/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={""} element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
