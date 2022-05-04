import React from "react";
import NavBar from "./components/navBar";
import Users from "./components/users";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UserPage from "./components/userpage";


function App() {
    return <>
    <NavBar/>
    <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/" exact component={Main}/>
    <Route path="/users/:userId" exact render={(props)=>(<UserPage users={Users} {...props} />)} />
    <Route path="/users" component={Users}/>
    </Switch>
    </>
}

export default App;
