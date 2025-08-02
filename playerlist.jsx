import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player.jsx';
import players from '../players.js';

const PlayersList = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">FIFA Player Cards</h2>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
