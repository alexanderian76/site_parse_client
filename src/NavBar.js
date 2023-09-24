import React, { useContext, useEffect, useRef, useState } from "react";
import { Navbar, NavDropdown, Container, Nav, Button } from "react-bootstrap";
import { ABOUT_ROUTE, DEVELOP_ROUTE, EXAMPLES_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from "./utils/consts";
import {observer} from 'mobx-react-lite'
import {useLocation, useNavigate} from 'react-router-dom'
import { MAIN_ROUTE } from "./utils/consts";
import { Context } from "./index";
import leafLogo from './assets/green-leaf.png'
import { Link } from "react-router-dom";

function NavBarComp() {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
   // console.log(location)
    const [page, setPage] = useState('')
    const height = useRef(null);
    
    const {navbarHeight} = useContext(Context)

    const ButtonMailto = ({ mailto, label }) => {
        return (
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    };
   // navbarHeight.setHeight(window.innerHeight)
    useEffect(() => {navbarHeight.setHeight(height.current.offsetHeight); 
        //console.log(height.current)
    }, [])
    return(
        <Navbar ref={ref => {height.current = ref;}} fixed="top" expand='md' bg="dark" variant="dark">
            <div style={{marginLeft: '20%', display: 'flex', width: '100%'}}>
                <Navbar.Brand onClick={() => navigate(MAIN_ROUTE)}>
                <img src={leafLogo} width="25" height="25" alt="Leaf logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link active={location.pathname === '/'}  onClick={() => navigate(MAIN_ROUTE)} >Главная</Nav.Link>
                <Nav.Link active={location.pathname === '/develop' || location.pathname === '/develop/'} onClick={() => navigate(DEVELOP_ROUTE)} >Разработка</Nav.Link>
                {
                    <Nav.Link active={location.pathname === '/about' || location.pathname === '/about/'} onClick={() => navigate(ABOUT_ROUTE)} >О нас</Nav.Link>
                }
                {
                //    <Nav.Link active={location.pathname === '/examples' || location.pathname === '/examples/'}  onClick={() => navigate(EXAMPLES_ROUTE)} >Примеры парсинга</Nav.Link>
                }
                    {user.Auth ? <Nav.Link active={location.pathname === '/profile' || location.pathname === '/profile/'} onClick={() => navigate(PROFILE_ROUTE)} >Мои задачи</Nav.Link> : ""}
                </Nav>
                <Nav className="justify-content-end" style={{marginRight: 10}}>
                    <Navbar.Text>
                        <a style={{marginRight: 10, color: '#cccc'}}>Напишите нам: </a>
                        <ButtonMailto label="info@leaf-studio.ru" mailto="mailto:info@leaf-studio.ru"/>
                    </Navbar.Text>
                    {
                    //!user.Auth ? <Nav.Link style={{color: "white", marginLeft: 15}} className="btn btn-success" onClick={() => navigate(LOGIN_ROUTE)}>Войти</Nav.Link> : ""
                }
                </Nav>
                
                </Navbar.Collapse>
                
</div>
        </Navbar>
    )
}
const NavBar = observer(NavBarComp)
export default NavBar;