import "./App.css";
import { ThemeProvider } from "styled-components";
import box from "./Components/box";

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <box />
    </ThemeProvider>
  );
}

export default App;
