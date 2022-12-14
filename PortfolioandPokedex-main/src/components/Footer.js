import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container>
            <Navbar style={style} expand="lg" variant="light" bg="light">
               Gabriel Machado
            </Navbar>
        </Container>
    )
}

const style = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
}

export default Footer