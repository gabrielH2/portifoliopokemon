import React from 'react'
import { Card } from 'react-bootstrap'
import { Flag } from 'semantic-ui-react'
import me from '../images/cropped.png'

const TrainerStats = () => {
    return (
        <Card>
            <Card.Header style={{ textAlign: 'left' }}>Gabriel Machado</Card.Header>
            <Card.Body>
                <img src={me} alt='' style={{ borderRadius: '50%', width: '250px' }} />
                <Card.Title style={{ marginTop: '10px' }}></Card.Title>
                <span>
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png' style={{ borderRadius: '50%', width: '100px' }} alt='' />
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png' style={{ borderRadius: '50%', width: '100px' }} alt='' />
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' style={{ borderRadius: '50%', width: '100px' }} alt='' />
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png' style={{ borderRadius: '50%', width: '100px' }} alt='' />
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png' style={{ borderRadius: '50%', width: '100px' }} alt='' />
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png' style={{ borderRadius: '50%', width: '100px' }} alt='' />
                </span>
                <Card.Title style={{ marginTop: '10px' }}>Information</Card.Title>
                <Card.Text>
                    Nationality: Brasil <br />
                    Residence: Recife <br />
                    Education: Universidade Católica de Pernambuco<br />
                    Major: Web Development & Graphic Design<br />
                </Card.Text>
                <Card.Title>Contact Info</Card.Title>
                <Card.Text>
                    Phone: (81) 994567834<br />
                    Email: emailaletorio@hotmail.com
                </Card.Text>
            </Card.Body>
        </Card >
    )
}

export default TrainerStats