import "./App.css";
// import Container from "./Components/Container";
import { ThemeProvider } from "styled-components";

const theme = {};

function App() {
  return <ThemeProvider theme={theme}>{/* <Container /> */}
  <h1>
    MEDIA PLAYER APP

    </h1></ThemeProvider>;
}

export default App
