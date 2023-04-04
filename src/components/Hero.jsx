import React from 'react'
import { Col, Container, Row } from "reactstrap"
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import Subtitle from "../shared/Subtitle"
import '../styles/Home.css'

const Hero = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg="5">
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={"Do you know me?"}/>
            <img src={worldImg} alt="" />
            </div>
            <h1>Get Clean Code With <span className='highlight'>Frontend</span></h1>
            <p>Get Best Service With Better Development & Clean Coding</p>
          </div>
          </Col>
         <Col lg="2">
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
         </Col>
         <Col lg="3">
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls/>
          </div>
         </Col>
         <Col lg="2">
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
         </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Hero