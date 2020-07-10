import React from 'react'
import { Grid, Row, Col, Container } from 'react-bootstrap';

import footerLogo from "../../assets/images/footer-logo.svg"
import footerSpan from "../../assets/images/footer-span.svg"



import "./Footer.scss"

export default class Footer extends React.Component {
    render() {
        return (

            <footer className="footer ">
                <Container fluid className="">
                    <Row className="d-flex align-items-center mt-5 main-block">
                        <Col lg="2">
                            <img src={footerLogo} alt=""/>
                        </Col>
                        <Col lg="3">
                            <div className="social mb-4">
                                <p>Наш Емейл</p>
                                <a href="#" className="mb-5 d-inline-block">
                                    loremipsum@gmail.com
                                </a>
                            </div>
                            <div className="social">
                                <p>Cоц сети</p>
                                <div className="mb-2">
                                    <a href="#">
                                        <img className="mr-2 d-inline-block" src={footerSpan} alt=""/>
                                        loremipsum@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img className="mr-2 d-inline-block" src={footerSpan} alt=""/>
                                        loremipsum@gmail.com
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="2">
                            <nav className="nav-footer d-flex flex-column">
                                <a href="#">
                                    Главная
                                </a>
                                <a href="#">
                                    Найти исполнителя
                                </a>
                                <a href="#">
                                    Заказать
                                </a>
                                <a href="#">
                                    Мой профиль
                                </a>
                            </nav>
                        </Col>
                        <Col lg="2">
                            <nav className="nav-footer d-flex flex-column">
                                <a href="#">
                                    Главная
                                </a>
                                <a href="#">
                                    Найти исполнителя
                                </a>
                                <a href="#">
                                    Заказать
                                </a>
                                <a href="#">
                                    Мой профиль
                                </a>
                            </nav>
                        </Col>
                        <Col lg="2">
                            <div className="text-right write-us">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, beatae vel.</p>
                                <button className="btn btn-green px-5 py-3">
                                    Написать нам
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5 d-flex justify-content-center">
                        <Col lg="6" className="mt-2"> 
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus et elit venenatis hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>  
                        </Col>
                    </Row>
                    <Row className="text-center mb-5">
                        <Col lg="12">
                            <span className="text-center">
                                ® dolor sit amet 2020
                            </span>  
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}