import React, {useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Main} from "../pages/main";
import {Contact} from "../pages/contact";
import {FAQ} from "../pages/faq";
import {AuthPage} from "../pages/adminauthpage";
import {Adminpanel} from "../pages/adminpanel";
import {Modify} from "../pages/modify";
import {Editpage} from "../pages/editpage";
import {Context} from "../context/admincontext";
import {Employees} from "../pages/employees";
import {Employeedit} from "../pages/employeedit";
import {Messages} from "../pages/messages";

export const useRoutes = (loggedIn) => {

    const [linkId, setLinkId] = useState('')

    if (loggedIn) {
        return (
            <Context.Provider value={{
                linkId, setLinkId
            }}>
                <Switch>
                    <Route path="/adminpanel" exact>
                        <Adminpanel />
                    </Route>
                    <Route path="/adminpanel/messages" exact>
                        <Messages />
                    </Route>
                    <Route path="/adminpanel/modify" exact>
                        <Modify />
                    </Route>
                    <Route path="/adminpanel/employees" exact>
                        <Employees />
                    </Route>
                    <Route path="/adminpanel/modify/:id">
                        <Editpage />
                    </Route>
                    <Route path="/adminpanel/employees/:id">
                        <Employeedit />
                    </Route>
                </Switch>
            </Context.Provider>
        );
    }

    return (
        <>
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
                    {loggedIn ? <Redirect from="/admin" to="/adminpanel" /> : <AuthPage />}
                </Route>
            </Switch>
        </>
    )
}