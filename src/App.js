import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
