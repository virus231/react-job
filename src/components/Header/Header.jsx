import React from "react";
import { Grid, Row, Col, Container, Navbar, Dropdown } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import "./Header.scss"
import logo from "../../assets/images/logo.svg";
import city from "../../assets/images/city.svg"



  
const Header = () => {
    const links = [
            { id: 1, link: "Главная", path: '/' },
            { id: 2, link: "Найти исполнителя", path: '/as'  },
            { id: 3, link: "Заказать", path: '/qwe'  },
            { id: 4, link: "Мой профиль",path: '/profile'  }
        ];
    

    return (
        <header className="header ">
            <Container fluid className="line">
                <Row className="d-flex justify-content-md-around align-items-center pt-3">
                    <Col xs lg="2">
                        <Navbar.Brand href="#">
                        <NavLink to="/">
                            <img src={logo} alt="Logo" />

                        </NavLink>
                        </Navbar.Brand>
                    </Col>

                    <Col lg="5" className="">
                        <nav className="nav d-flex justify-content-around">
                            {
                                links.map(item => (
                                    <NavLink key={item.id} className="nav__link" to={item.path}> {item.link} </NavLink>
                                ))
                            }
                        </nav>
                    </Col>

                    <Col lg="1" className="d-flex align-items-center justify-content-around">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic d-flex align-items-center">
                                <img src={city} alt="" className="mr-2"/>
                                Город
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Львов</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Киев</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Луцк</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </Col>

                    <Col lg="2" className="text-left">
                        <NavLink to="/login" className="btn btn-green px-5 py-3">
                            Вход
                        </NavLink>
                    </Col>
                </Row>
            </Container>

        </header>


    );
}

export default Header;