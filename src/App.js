import {Contact} from "./pages/contact"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Main} from "./pages/main";
import {Navbar} from "./pages/navbar";
import {Footer} from "./pages/footer";
import {FAQ} from "./pages/faq";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Switch>
              <Route path="/" exact>
                  <Main />
              </Route>
              <Route path="/contact" exact>
                  <Contact />
              </Route>
              <Route path="/faq" exact>
                  <FAQ />
              </Route>
          </Switch>
          <Footer />
      </BrowserRouter>
  )
}

export default App;
