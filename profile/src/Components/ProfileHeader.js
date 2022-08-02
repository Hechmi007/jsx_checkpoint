import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import profilePic from '../profilePic.jpg'
const ProfileHeader = () => {
    let fullname='Dwayne The Rock'
    let email='DwayneJhonson@WWE.com'
    let role='Admin'
    
  
  return (
    
    <Container style={{padding:40}}>
      <Row>
        
        <Col  xs={6}><img src={profilePic} alt="profile photo" height={120} width={120} style={{float: 'left',
  marginLeft: '40px',
  margintop: '20px',
  
  borderRadius:'100%',
  overflow: 'hidden',
  borderColor:'green'}} /></Col>
        <Col ><h3>{fullname}</h3>
            <div style={{display:'flex'}}>
            <h6 style={{color:'blue'}}>{email}</h6><p> - {role}</p>
            </div>
        </Col>

      </Row>
      
    </Container>
  )
}

export default ProfileHeader