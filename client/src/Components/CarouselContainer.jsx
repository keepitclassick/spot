import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CarouselContainer() {

  //layout for carousel
  return (
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={"./images/couplewithdog.jpg"}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/sometimes-the-smallest-things-take-up-the-most-space-in-your-heart-picture-id1282954895?b=1&k=20&m=1282954895&s=170667a&w=0&h=z24cgwYldvVTP_VC_Pr5F5ehNTF7iMgnpSEzrFFheUc="
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}
