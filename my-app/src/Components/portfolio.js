import React  from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import data from './portfolio.json';

function Portfolio() {

  return (


  <section id='entries'>
    <Row xs={1} md={2} className="g-4">
        {data.map((project, idx) => (
          <Col key={idx}>
    <Card className="bg-dark text-white" id='card'>
      <Card.Img src={`public/assets/image/${project.image}`} alt="Card image" id="item-img" />
      <Card.ImgOverlay>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          <p>
          {project.description}
          </p>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>))}
    </Row>
    </section>
    );
        }


export default Portfolio;