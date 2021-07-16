import {Contact} from "./pages/contact"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Main} from "./pages/main";
import {Navbar} from "./pages/navbar";
import {Footer} from "./pages/footer";
import {FAQ} from "./pages/faq";
import {AuthPage} from "./pages/adminauthpage";
import {useState} from "react";
import {Context} from "./context/admincontext";
import {Messages} from "./pages/messages";

function App() {

    const [loggedIn, setLoggedIn] = useState(false)
    console.log(loggedIn)
    const exit = () => {
        console.log(loggedIn.current)
        setLoggedIn(false)

    }


    if (loggedIn === true) {
        return (
            <div>
                <Messages />
            </div>
        )
    }

    return (
        <Context.Provider value={{
            setLoggedIn
        }}>
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
                    <Route path="/admin" exact>
                        <AuthPage />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </Context.Provider>
    )
}

export default App;
