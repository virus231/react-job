import React from 'react'
import { Grid, Row, Col, Container, Navbar, Dropdown, Jumbotron, Button } from 'react-bootstrap';
import {Formik, Field, Form} from 'formik'
import * as yup from 'yup'

import './SignUp.scss';



const SignUp = () => {
    return (
        <section className="mt-5">
            <Container className="mt-5">
                <Row className="mt-5">
                    <Col lg="2" className="mt-5">
                        <h3 className="mt-5">
                            Кто вы?
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <div className="choice">
                            <Formik
                                initialValues={{
                                    specialist: true
                                }}

                                onSubmit={(data, {setSubmitting}) => {
                                    setSubmitting(true);
                                    console.log('submit: ', data);
                                    setSubmitting(false)
                                }}

                            >
                                {({ values, isSubmitting }) => (
                                    <Form>
                                        <Field
                                            name="specialist"
                                            type="checkbox"
                                        />

                                        <Field
                                            name="customer"
                                            type="checkbox"
                                        />
                                        
                                    </Form>
                                )}

                                
                                
                            </Formik>
                            
                            

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SignUp;