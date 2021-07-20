import {BrowserRouter} from 'react-router-dom'
import {Navbar} from "./pages/navbar";
import {Footer} from "./pages/footer";
import {useState} from "react";
import {Context} from "./context/admincontext";
import {useRoutes} from "./routes/router";

function App() {

    const [loggedIn, setLoggedIn] = useState(false)
    const router = useRoutes(loggedIn)
    // const exit = () => {
    //     setLoggedIn(false)
    // }

    return (
        <Context.Provider value={{
            setLoggedIn
        }}>
            <BrowserRouter>
                {!loggedIn && <Navbar />}
                {router}
                {!loggedIn && <Footer />}
            </BrowserRouter>
        </Context.Provider>
    )
}

export default App;
