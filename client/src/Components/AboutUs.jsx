import "./About.scss";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
export default function AboutUs() {
  return (
    <body>
      <div class="about">
        <div class="inner">
          <h1>About Us</h1>
          <p class="text">
            Spot's mission is to see each and every great pet with an equally
            great owner. By allowing an advanced search, we give you the power
            to find the pet of your dreams.
          </p>
        </div>
      </div>

      <div className="questions">
        <Container>
          <Col>FAQ's</Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                I've found a pet that I'm interested in, what's next?
              </Accordion.Header>
              <Accordion.Body>
                Click the "email shelter" button to start a conversation!
                Remember, this is just the start of the process, many shelters
                have an application that will take place after interest has been
                expressed.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How much will it cost?</Accordion.Header>
              <Accordion.Body>
                Pet adoption fees vary from shelter to shelter. These fees are
                based on training, spay/neuter, housing, veterinary/medical
                care. Get in contact with us and we'll assist you in the
                adoption process.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                I'm having technical issues with the site. Help?
              </Accordion.Header>
              <Accordion.Body>
                Please contact use using the contact page! We are ready and
                willing to assist each day.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Do I need to register?</Accordion.Header>
              <Accordion.Body>
                Yes, in order to search for a pet you will need to register.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </body>
  );
}
