import React from 'react'
import { Grid, Row, Col, Container, NavLink } from 'react-bootstrap';

import "./Profile.scss"

import photo from '../../assets/images/photo.png'
import agree from '../../assets/images/agree.svg'


const Profile = () => {

    const specialties = ["Няня", "Работа с детьми", "Дошкольное обучение"]

    return (
        <section className="profile d-flex align-items-center mt-5">
            <Container fluid className="mt-5">
                <Row className="mt-5 d-flex justify-content-between">
                    <Col md="2">
                        <div>
                            <img src={photo} alt="" />

                            <div>
                                <p className="special-title mt-5">
                                    Специальности:
                                </p>
                                <ul className="d-flex pl-0 flex-wrap special">
                                    {
                                        specialties.map((item, index) => (
                                            <li className="mr-2 mb-2 p-2 special-item" key={`${item}_${index}`}>
                                                {item}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="info">
                            <h4>
                                Василий Пупкин
                                <img src={agree} className="d-inline-block ml-3" alt="" />
                            </h4>
                            <h4>
                                Обо мне
                            </h4>
                            <p>
                                Предлагаю свои услуги: (авто)сопровождение ребенка с пн-пт, дневные прогулки с коляской. Киевлянка с киевской пропиской. Левый берег. Без вредных привычек.
                            </p>
                            <p>
                                Образование: учусь заочно на юридическом факультете в университете экономики и права, 3 курс, специальность "Право" (2020 год). Параллельно учусь на кафедре "Психология", спец. "Организационная психология", 3 курс (2020 год)
                            </p>
                            <h4>
                                Услуги  и цены
                            </h4>
                            <div className="d-flex flex-column align-items-start">
                                <span>Курьерская доставка — 200грн</span>
                                <span>Курьерская доставка — 200грн</span>
                                <span>Курьерская доставка — 200грн</span>
                                <span>Курьерская доставка — 200грн</span>
                            </div>



                        </div>
                    </Col>
                    <Col md="3">
                        <div>
                            <div className="text-center offer p-4">
                                <p>
                                    Для связи со специалистом заполните краткую форму с описанием работы и предложите работу специалисту!
                                </p>
                                <NavLink className="py-3 d-inline-block mt-3 px-5 btn btn-blue">
                                    Предложить работу
                                </NavLink>
                            </div>

                            <div className="numbers">
                                <h4>
                                    Контакты
                                </h4>
                                <p>
                                    +12345678910 — Viber, Telegram
                                </p>
                                <p>
                                    +12345678910
                                </p>
                            </div>

                            <div>
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
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Profile
