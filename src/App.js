import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <News />
      </ThemeProvider>
    </div>
  );
}

export default App;
