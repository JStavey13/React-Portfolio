import gravado from "../image/Gravado.jpeg"
import PandaCritic from "../image/PandaCritic.jpeg"
import SubsTracker from "../image/substracker.jpeg"
import React  from 'react';
import {Row, Card} from 'react-bootstrap';



function Portfolio() {

  return (


  <section id='entries'>
    <Row xs={1} md={2} className="g-4"
    style={{
      marginBottom: "10px",
      marginTop: "10px",
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto"
    }}>
    <div class="col">    
    <Card className="bg-dark text-white" id='card'>
      <img class="image" src={gravado} alt="Gravado screenshot" id="item-img" ></img>
      <Card.ImgOverlay class="card-overlay">
        <a href="https://github.com/ColeWaggoner/07-08-GravadoP1"><Card.Title>Gravado</Card.Title></a>
        <Card.Text>
          <p>
          Looking for a new restaurant or recipe? Gravado has you covered!
          </p>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>

    <div class="col">
    <Card className="bg-dark text-white" id='card'>
      <img class="image" src={PandaCritic} alt="PandaCritic screenshot" id="item-img" ></img>
      <Card.ImgOverlay class="card-overlay">
        <a href="https://github.com/ColeWaggoner/07-08-GravadoP1"><Card.Title>PandaCritic</Card.Title></a>
        <Card.Text>
          <p>
          Keep track of what foods you've tried, and find your new favorite spot.
          </p>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
    </Row>


    <Row xs={1} md={2} className="g-4"
    style={{
      marginBottom: "80px",
      marginTop: "10px",
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      <div class="col">
    <Card className="bg-dark text-white" id='card'>
      <img class="image" src={SubsTracker} alt="project" id="item-img" ></img>
      <Card.ImgOverlay class="card-overlay">
        <a href="https://github.com/ColeWaggoner/07-08-GravadoP1"><Card.Title>SubsTracker</Card.Title></a>
        <Card.Text>
          <p>
          Never lose track of your subscriptions, or your budget, again!
          </p>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
    

    </Row>
    </section>
    );
        }


export default Portfolio;