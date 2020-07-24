import React from 'react'
import { Grid, Row, Col, Container, NavLink } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup'

import "./LogIn.scss"

import google from "../../assets/images/google.svg";
import facebook from "../../assets/images/facebook.svg";




const LogIn = () => {
    const ValidationSchema = yup.object().shape({
        number: yup.string()
            .required('Phone number is required')
            .max(12)
            .min(3),
        //     .test('Phone test', 'Phone number must be valid', (val) => {
        //         val = val.replace(/[\s\-]/g, '');
        //         return val.match(/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/) != null;
        // }),
        password: yup.string().required("Must be required").max(28).min(8),

    })


    return (
        <section className="login mt-5">
            <Container className="mt-5">
                <Row className="mt-5">
                    <Col className="mt-5" md="12">
                        <Formik
                            initialValues={{
                                password: "",
                                number: ""
                            }}
                            validationSchema={ValidationSchema}
                            onSubmit={fields => {
                                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                            }}
                        >

                            {({ touched, errors, status, isSubmitting }) => (
                                <Form className="w-100 d-flex flex-column justify-content-around">
                                    <h3 className="my-5">
                                        Вход
                                    </h3>
                                    <div className="form-group d-flex justify-content-between align-items-center">
                                        <div className="left">
                                            <div className="mb-4">
                                                <label htmlFor="number">Введите ваш номер телефона*</label>
                                                <Field
                                                    type="number"
                                                    name="number"
                                                    placeholder="+380123456789 "
                                                    className={`form-control ${
                                                        touched.number && errors.number ? "is-invalid" : ""
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="number"
                                                    className="invalid-feedback"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="password"> Введите ваш пароль*</label>
                                                <Field
                                                    type="password"
                                                    name="password"
                                                    className={`form-control ${
                                                        touched.password && errors.password ? "is-invalid" : ""
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="password"
                                                    className="invalid-feedback"
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-green py-2">
                                                Готово
                                            </button>
                                            <div>
                                                <h3 className="mt-3">
                                                    Войти с помощью:
                                                </h3>
                                                <div className="social d-flex justify-content-around">
                                                    <a href="#" className="px-4 py-2 mr-3  d-flex align-items-center">
                                                        <img src={google} className="mr-3" alt="Google" />
                                                        Google
                                                    </a>
                                                    <a href="#" className="px-4 py-2  d-flex align-items-center">
                                                        <img src={facebook} className="mr-3" alt="Facebook" />
                                                        Facebook
                                                    </a>
                                                </div>
                                                <div className="text-center ">
                                                    <p>
                                                        <NavLink to="/signup">
                                                            Ещё не с нами?      Зарегистрируйтесь
                                                        </NavLink>
                                                    </p>
                                                    <p>
                                                        Забыли пароль?
                                                    </p>
                                                </div>
                                            </div>

                                            
                                        </div>
                                        <div class="no-acc">
                                            <h4>
                                                Нет аккаунта?
                                                Зарегестрируйтесь!
                                            </h4>
                                            <NavLink to="/qwe" className="btn btn-blue px-5 py-3">
                                                Зарегестрироваться
                                            </NavLink>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LogIn