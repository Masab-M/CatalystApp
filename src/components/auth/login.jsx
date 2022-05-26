import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import LoginImg from '../../assets/images/loginImg.svg'
import './auth.css'
export default function login() {
    return (
        <div className='LoginPage'>
            <div className="loginMain">
                <Container fluid>
                <Row>
                    <Col md={6} sm={12}>
                    <div className="logincontent">
                        <div className="logo">
                            <h3>CATALYST</h3>
                        </div>
                        <div className="formContent">
                        <div className="headContent">
                            <h2>LOGIN</h2>
                            <p>Enter Your Credentials To Access Your Account</p>
                        </div>
                        <form action="" className="loginForm">
                            <div className="form-group">
                                <label htmlFor="emailField">Your Email</label>
                                <input type="text" name="emailField" id="emailField" />
                            </div>
                            <div className="form-group">
                                <div className="passlabel">
                                <label htmlFor="">Password</label>
                                <a href="#">Forgot Password?</a>
                                </div>
                                <input type="password" name="passField" id="passField" />
                            </div>
                            <div className="form-group rememberme">
                                <input type="checkbox" name="remember" id="remember" />
                                <label htmlFor="remember">Remember Me</label>
                            </div>
                            <div className="loginsubmit">
                                <a href="#">Login</a>
                            </div>
                        </form>
                        </div>
                        
                    </div>
                    </Col>
                    <Col className='d-none d-sm-none d-md-block'>
                        <div className="loginImg">
                            <img src={LoginImg} className="img-fluid" alt="" />
                        </div>
                    </Col>
                </Row>
                </Container>

            </div>
        </div>
    )
}
