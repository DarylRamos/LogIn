import "./App.css";
import LogIn from "./pages/LogIn";
import LoggedIn from "./pages/LoggedIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import accounts from "./accounts.json";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, []);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<LogIn />} />
          <Route path="/authenticated" element={<LoggedIn />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
