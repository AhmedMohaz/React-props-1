import React from 'react';
import { Card } from 'react-bootstrap';

const cardStyle = {
  margin: '1rem',
  border: '2px solid #eaeaea',
  boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
};

const Player = ({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown Country",
  jerseyNumber = 0,
  age = 0,
  image = "https://via.placeholder.com/300x200.png?text=No+Image",
  stats = { goals: 0, assists: 0, appearances: 0 }
}) => {
  const { goals, assists, appearances } = stats;

  return (
    <Card style={{ ...cardStyle, width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text><strong>Team:</strong> {team}</Card.Text>
        <Card.Text><strong>Nationality:</strong> {nationality}</Card.Text>
        <Card.Text><strong>Jersey #:</strong> {jerseyNumber}</Card.Text>
        <Card.Text><strong>Age:</strong> {age}</Card.Text>
        <hr />
        <h6>Stats:</h6>
        <ul style={{ paddingLeft: "1rem" }}>
          <li><strong>Goals:</strong> {goals}</li>
          <li><strong>Assists:</strong> {assists}</li>
          <li><strong>Appearances:</strong> {appearances}</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Player;
