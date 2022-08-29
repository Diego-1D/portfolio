import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/muiTheme";
import About from "./components/about";
import Experiences from "./components/experiences";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experiences />
      <Skills />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
