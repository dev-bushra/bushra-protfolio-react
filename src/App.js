import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import WorkPage from './components/WorkPage';
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <SoundBar />
      <AnimatePresence exitBeforeEnter>
        <Switch  location={location} key={location.pathname}>
          <Route exact path="/home" component={Main}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/work" component={WorkPage}/>
        </Switch>
      </AnimatePresence>
    </ThemeProvider>
  </>
}

export default App
