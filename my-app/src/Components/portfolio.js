import React  from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import data from './portfolio.json';

function Portfolio() {

  return (

    <Row xs={1} md={2} className="g-4">
        {data.map((project, idx) => (
          <Col key={idx}>
    <Card className="bg-dark text-white">
      <Card.Img src={`../assets/image/${project.image}`} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <Card.Text>     </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>))}
    </Row>
    );
        }


export default Portfolio;