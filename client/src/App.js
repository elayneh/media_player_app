import "./App.css";
import Store from "./Components/box";
import { ThemeProvider } from "styled-components";

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Store />
    </ThemeProvider>
  );
}

export default App;
