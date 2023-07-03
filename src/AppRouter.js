import React, { useContext, useEffect } from "react";
import {Routes, Route, useLocation} from 'react-router-dom'
import { authRoutes, routes } from "./routes";
import Main from "./pages/Main";
import { Context } from ".";
import { observer } from "mobx-react-lite";

function AppRouterComp() {
  const {user} = useContext(Context)
  console.log(user)
  return (
    <Routes>
        {routes.map(({route, Element}) => {
            return <Route key={route} path={route} element={<Element height={window.innerHeight}/>}/>
        })}
        {user.Auth ? authRoutes.map(({route, Element}) => {
            return <Route key={route} path={route} element={<Element height={window.innerHeight}/>}/>
        }) : ""}
        <Route path="*" element={<Main height={window.innerHeight}/>}/>
    </Routes>
  );
}
const AppRouter = observer(AppRouterComp)
export default AppRouter;
