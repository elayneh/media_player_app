import "./App.css";
import Container from "./Components/Container";
import { ThemeProvider } from "styled-components";

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
}

export default App;
