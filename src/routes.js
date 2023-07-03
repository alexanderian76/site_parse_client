import { ABOUT_ROUTE, DEVELOP_ROUTE, EXAMPLES_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

import About from "./pages/About";
import Develop from './pages/Develop'
import Auth from './pages/Auth'
import Profile from "./pages/Profile";
import ParseExamples from "./pages/ParseExamples";

export const routes = [
    
  /*  {
        route: ABOUT_ROUTE,
        Element: About
    },*/
    {
        route: DEVELOP_ROUTE,
        Element: Develop
    },
    {
        route: LOGIN_ROUTE,
        Element: Auth 
    },
    {
        route: REGISTRATION_ROUTE,
        Element: Auth 
    },
    {
        route: EXAMPLES_ROUTE,
        Element: ParseExamples
    }

]


export const authRoutes = [
    
    {
        route: PROFILE_ROUTE,
        Element: Profile
    }

]