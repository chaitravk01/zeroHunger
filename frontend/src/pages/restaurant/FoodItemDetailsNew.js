import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import FoodCard from "./FoodCard.js";
import "./Restaurant.css";
import Header from '../../components/header';
import Footer from '../../components/footer.js';
import { useEffect, useState } from 'react';
import Axios from 'axios';

const FoodItems = () => {

  const [foodItems, setFoodItems] = useState([]);  
  // const [image, setImage] = useState(""); 
  // const [productName, setProductName] = useState("");  
  // const [regularPrice, setRegularPrice] = useState("");   
  // const [discountRate, setDiscountRate] = useState("");  
  // const [discountedPrice, setDiscountedPrice] = useState("");  
  
  useEffect(() => {
    getAllFoodItems();
  }, []);
  
  const getAllFoodItems = () => {
      Axios.get("http://localhost:3000/api/AddProducts/all").then((response) => {
        console.log(response.data);      
        setFoodItems(response.data);
      });
  }

  return (
    <section className="foodcard" id="foodcards">   
      <Header/>
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Sales Food Items</h2>
              <p>Explore a wide variety of food items offered at discounted prices. Whether you’re looking for fresh ingredients, packaged meals, or specialty items, we have options that meet your needs and budget.</p>
              <p>Our mission is to reduce food waste by partnering with restaurants and grocery stores to provide you with high-quality items at fair prices. Every purchase helps in making food more accessible to those in need.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                  <Nav.Item>
                    <Nav.Link eventKey="first">All Items</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Fresh Produce</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Packaged Meals</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {foodItems.map((foodItem, index) => {
                        return (
                          <FoodCard
                            key={index}
                            {...foodItem}
                          />
                        )
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      <Col>
                        <p>Discover fresh fruits, vegetables, and herbs available at discounted prices. We partner with local farms and vendors to bring you the freshest produce in season. Quality guaranteed!</p>
                      </Col>
                      <Col>
                        <img src="/path/to/fresh-produce-image.jpg" alt="Fresh Produce" className="section-image" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      <Col>
                        <p>Looking for a convenient meal option? Check out our selection of pre-packaged meals that are ready to eat or easy to heat up. Perfect for busy individuals and families on the go.</p>
                      </Col>
                      <Col>
                        <img src="/path/to/packaged-meal-image.jpg" alt="Packaged Meals" className="section-image" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
      <img className="background-image-right" src="/path/to/background-image.jpg" alt="Background" />
    </section>
  )
}

export default FoodItems;
