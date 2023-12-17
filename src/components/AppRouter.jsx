import React from 'react';
import About from "../Pages/About";
import NavBar from "./NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import ListPage from "../Pages/ListPage";
import PersonalPage from "../Pages/PersonalPage";
const AppRouter = () => {
    return (
        <div className={"App"}>
            <NavBar></NavBar>
            <Routes>
                <Route path={"/"} element={<About></About>}></Route>
                <Route path={"/persons"} element={<ListPage></ListPage>}></Route>
                <Route path={"/persons/:id"} element={<PersonalPage></PersonalPage>}></Route>


            </Routes>
        </div>
    );
};

export default AppRouter;