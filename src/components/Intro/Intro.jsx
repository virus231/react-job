import React from 'react';
import { Grid, Row, Col, Container, Navbar, Dropdown, Jumbotron, Button, NavLink } from 'react-bootstrap';
import Slider from "react-slick";

import './Intro.scss';

import introLogo from "../../assets/images/intro-logo.svg";
import spanG from "../../assets/images/span-g.svg";

import icon1 from "../../assets/images/how-icon-1.svg";
import icon2 from "../../assets/images/how-icon-2.svg";
import icon3 from "../../assets/images/how-icon-3.svg";
import person1 from "../../assets/images/person-1.png"


export default class Intro extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            cssEase: "linear"
        };

        const sliderItem = [
            { name: 'Василий Пупкин', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Por sit amet, consectetur adipiscing elit. Phasellus blandihasellus blandit risus et elit venenatis hendrerit...', },
            { name: 'No Name', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Por sit amet, consectetur adipiscing elit. Phasellus blandihasellus blandit risus et elit venenatis hendrerit...', },
            { name: 'Vandal01', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Por sit amet, consectetur adipiscing elit. Phasellus blandihasellus blandit risus et elit venenatis hendrerit...', },
            { name: 'Parazit', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Por sit amet, consectetur adipiscing elit. Phasellus blandihasellus blandit risus et elit venenatis hendrerit...', },
            { name: 'Perec', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Por sit amet, consectetur adipiscing elit. Phasellus blandihasellus blandit risus et elit venenatis hendrerit...', }
        ]


        return (
            <div>
                <section className="intro pt-5">
                    <Container fluid>
                        <Row className="mt-1">
                            <Col lg="4" className="mt-5 offset-lg-2">
                                <Jumbotron className="mt-5 intro-block text-left">
                                    <h1 className="mb-5">
                                        <NavLink to='/'>
                                            <img src={introLogo} alt="Logo Intro" />
                                        </NavLink>
                                    </h1>
                                    <p className="intro-block__subh text-center ">
                                        Онлайн-сервис заказа услуг
                                    </p>
                                    <p className="d-flex flex-column intro-block__adv mt-4">
                                        <span className="d-flex align-items-center">
                                            <img src={spanG} className="mr-3 mb-1" />
                                            Более 100 000 проверенных специалистов
                                        </span>
                                        <span className="d-flex align-items-center">
                                            <img src={spanG} className="mr-3 mb-1" />
                                            Личная статистика
                                        </span>
                                        <span className="d-flex align-items-center">
                                            <img src={spanG} className="mr-3 mb-1" />
                                            Удобство оповещения
                                        </span>

                                    </p>
                                    <p className="mt-4">
                                        <a href="#" className="px-4 py-3 btn btn-blue mr-3">
                                            Стать специалистом
                                        </a>
                                        <a href="#" className="px-4 py-3 btn btn-green ">
                                            Опубликовать задачу
                                        </a>
                                    </p>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="how pb-5 mt-5">
                    <Container fluid>
                        <Row>
                            <Col lg="12">
                                <h2 className="how-title text-center">
                                    Как это работает?
                            </h2>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center mt-5">
                            <Col lg="2">
                                <div className="how-item d-flex flex-column align-items-center">
                                    <img src={icon1} className="pb-3" alt="icon" />

                                    <span className="d-block">
                                        01
                                </span>

                                    <p className="text-center">
                                        Создайте учётную запись с помощью номера телефона.
                                </p>
                                </div>
                            </Col>
                            <Col lg="2">
                                <div className="how-item d-flex flex-column align-items-center">
                                    <img src={icon2} className="pb-3" alt="icon" />

                                    <span className="d-block">
                                        01
                                </span>

                                    <p className="text-center">
                                        Создайте учётную запись с помощью номера телефона.
                                </p>
                                </div>
                            </Col>
                            <Col lg="2">
                                <div className="how-item d-flex flex-column align-items-center">
                                    <img src={icon3} className="pb-3" alt="icon" />

                                    <span className="d-block">
                                        01
                                </span>

                                    <p className="text-center">
                                        Создайте учётную запись с помощью номера телефона.
                                </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="mt-5">
                    <Container fluid>
                        <Row className="mt-5 d-flex justify-content-center">
                            <Col lg="11" className="choice">
                                <div className="text-center choice-block">
                                    <p className="">
                                        Ищите проверенных специалистов или выгодные заказы с помощью сервиса “Название”
                                    </p>

                                    <div className="mt-5 d-flex justify-content-center">
                                        <a href="#" className="btn-white d-inline-block mr-5">
                                            Найти специалиста
                                    </a>
                                        <a href="#" className="btn-outline d-inline-block">
                                            Стать специалистом
                                    </a>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="slider mt-5">
                    <Container fluid>
                        <Row>
                            <Col lg="12" >
                                <h3 className="text-center mt-5">
                                    Мы рекомендуем!
                                </h3>
                            </Col>
                        </Row>
                        <Row className="mt-5 d-flex justify-content-center">
                            <Col lg="11">
                                <Slider {...settings}>
                                    {
                                        sliderItem.map((item, index) => (
                                            <div key={`${item}_${index}`}>
                                                <div className="slider-item">
                                                    <div className="d-flex mb-5">
                                                        <img src={person1} alt="person" />
                                                        <div className="ml-3">
                                                            <span>
                                                                {item.name}
                                                            </span>
                                                            <p>
                                                                {item.about}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="d-flex justify-content-around">
                                                        <div className="d-flex flex-column align-items-center">
                                                            <p>
                                                                Всего отзывов
                                                            </p>
                                                            <span>
                                                                0
                                                            </span>
                                                        </div>
                                                        <div className="d-flex flex-column align-items-center">
                                                            <p>
                                                                Всего отзывов
                                                            </p>
                                                            <span>
                                                                0
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="write mt-5">
                    <Container fluid className="mt-5">
                        <Row className="text-center mt-5">
                            <Col lg="12" className="mt-5">
                                <h3 className="mt-5">
                                    Напишите нам!
                                </h3>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Col lg="6" className="text-center">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus et elit venenatis hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </p>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Col lg="3" className="text-center">
                                <button className="btn btn-green py-3 px-5">
                                    Написать нам
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>

        );
    };
}
// export default Intro