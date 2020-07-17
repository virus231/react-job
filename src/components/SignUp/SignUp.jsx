import React from 'react'
import { Grid, Row, Col, Container, Navbar, Dropdown, Jumbotron, Button } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup'

import './SignUp.scss';

import google from "../../assets/images/google.svg";
import facebook from "../../assets/images/facebook.svg";



const SignUp = () => {
    const ValidationSchema = yup.object().shape({
        checkbox: yup.bool()
            .required("Required!"),
        number: yup.string()
            .required('Phone number is required')
            .max(12)
            .min(3),
        //     .test('Phone test', 'Phone number must be valid', (val) => {
        //         val = val.replace(/[\s\-]/g, '');
        //         return val.match(/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/) != null;
        // }),
        name: yup.string()
            .required("Name is required")
            .max(50)
            .min(3),
        surname: yup.string()
            .required("Surname is required")
            .max(30)
            .min(3),
        password: yup.string().required("Must be required").max(28).min(8),
        repassword: yup.string().required("Not must be empty").test('passwords-match', 'Passwords must match ya fool', function (value) {
            return this.parent.password === value;
        }),
        acceptTerms: yup.bool().oneOf([true], 'Accept Terms & Conditions is required')

    })

    return (
        <section className="mt-5 sign">


            <Container className="mt-5">
                <Row className="mt-5">
                    <Col lg="2" className="mt-5">
                        <h3 className="mb-3 mt-5">
                            Кто вы?
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <Formik
                            initialValues={{
                                checkbox: true,
                                name: "",
                                surname: "",
                                number: "",
                                password: "",
                                repassword: "",
                                acceptTerms: false
                            }}
                            validationSchema={ValidationSchema}
                            onSubmit={fields => {
                                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                            }}

                        >

                            {({ touched, errors, status, isSubmitting }) => (
                                <Form className="w-100 d-flex flex-column justify-content-around">
                                    <div className="choice-var w-100 d-flex justify-content-around">
                                        <label>
                                            <Field
                                                name="checkbox"
                                                type="checkbox"

                                                className={`form-control ${
                                                    touched.checkbox && errors.checkbox ? "is-invalid" : ""
                                                    }`}
                                            />
                                                Я специалист!

                                        </label>


                                        <label>
                                            <Field
                                                name="checkbox2"
                                                type="checkbox"
                                                className={`form-control ${
                                                    touched.checkbox && errors.checkbox ? "is-invalid" : ""
                                                    }`}
                                            />
                                                Я заказчик!
                                        </label>
                                        <ErrorMessage
                                            component="div"
                                            name="checkbox"
                                            className="invalid-feedback"
                                        />

                                    </div>

                                    <h3 className="my-3">
                                        Регистрация
                                    </h3>
                                    <div className="form-group d-flex justify-content-around">
                                        <div className="left">
                                            <label htmlFor="name"> Введите ваше имя*</label>
                                            <Field
                                                type="text"
                                                name="name"
                                                placeholder="Иван"
                                                className={`form-control ${
                                                    touched.name && errors.name ? "is-invalid" : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="name"
                                                className="invalid-feedback"
                                            />

                                            <label htmlFor="surname">Введите вашу фамилию*</label>
                                            <Field
                                                type="text"
                                                name="surname"
                                                placeholder="Петров"
                                                className={`form-control ${
                                                    touched.surname && errors.surname ? "is-invalid" : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="surname"
                                                className="invalid-feedback"
                                            />

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

                                        <div className="right">
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

                                            <Field
                                                type="password"
                                                name="repassword"
                                                className={`form-control ${
                                                    touched.repassword && errors.repassword ? "is-invalid" : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="repassword"
                                                className="invalid-feedback"
                                            />

                                            <Field
                                                type="checkbox"
                                                name="acceptTerms"
                                                id="acceptTerms"
                                                className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                            <label
                                                htmlFor="acceptTerms"
                                                className="form-check-label">
                                                Accept Terms & Conditions
                                            </label>
                                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                                            <div>
                                                <button type="submit" className="btn btn-green px-5 py-3">
                                                    Опубликовать 
                                                </button>
                                            </div>
                                            <h3>
                                                Войти с помощью:
                                            </h3>
                                            <div className="d-flex justify-content-around">
                                                <a href="#">
                                                    <img src={google} alt="Google" />
                                                </a>
                                                <a href="#">
                                                    <img src={facebook} alt="Facebook" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                </Form>
                            )}
                        </Formik>

                    </Col>
                </Row>

            </Container>
        </section >
    );
}

export default SignUp;