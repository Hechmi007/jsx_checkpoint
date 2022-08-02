import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  

const ProfileBody = () => {

  return (
    <Container>
      <Row>
        <Col><h1>Profile Details</h1></Col>

      </Row>
      <Row>
        <Col>Username</Col>
        <Col>TheRockIsCooking</Col>
      </Row>
      <Row>
        <Col>E-mail</Col>
        <Col>DwayneJhonson@WWE.com</Col>
      </Row>
      <Row>
        <Col>Password</Col>
        <Col>BigFat2022</Col>
      </Row>
      <Row>
        <Col>Full Name</Col>
        <Col>Dwayne Jhonson</Col>
      </Row>
      <Row>
        <Col>Title</Col>
        <Col>Admin</Col>
      </Row>
      <Row>
        <Col>Language</Col>
        <Col>English</Col>
      </Row>
      </Container>

  );
}

export default ProfileBody