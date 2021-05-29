import React, {useState, useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css"
import { Card, Container } from 'react-bootstrap';
import axios from "axios";
import ReactStars from 'react-rating-stars-component'




const photos = [
{
name: "RedMi 9C",
price: "ZMW 3,595.00",
url: "https://res.cloudinary.com/dvcydkq8a/image/upload/v1615558895/urc3hpgrpvnwzvyzm295.jpg"
},
{
name: "TECNO Spark 5 Pro",
price: "ZMW 2,585.00",
url: "https://res.cloudinary.com/dvcydkq8a/image/upload/v1615558555/j6y1zgcyo0tihi29fvwi.jpg"
},
{
name: "Tecno Pour Voir 4",
price: "ZMW 2,750",
url: "https://res.cloudinary.com/dvcydkq8a/image/upload/v1615558265/lf1wdzl5utli5ubxsdvx.jpg"
},
{
name: "Tecno Spark 4 Phone",
price: "ZMW 2,265", 
url: "https://res.cloudinary.com/dvcydkq8a/image/upload/v1615557914/cd6tofmca1s991mxohna.jpg"
},
{
name: "Samsung Galaxy S21 Ultra 5G",
price: "ZMW 25,650", 
url: "https://res.cloudinary.com/dvcydkq8a/image/upload/v1615499494/dd71rchz3wy46wp1iqoc.jpg"
},
{
  name: "HP ProBook 450",
  price: "ZMW 6,500.00", 
  url: "https://res.cloudinary.com/dvcydkq8a/image/upload/v1613932479/dffewkwxvrld0t8qgavf.jpg"
},
{
    name: "MacBook Air 13",
    price: "ZMW 33,950.00", 
    url: "https://res.cloudinary.com/dvcydkq8a/image/upload/v1613931986/fkqk36j1djshgz6uier0.jpg"
},
{
      name: "HP Laptop 250 G7",
      price: "ZMW 16,810.00", 
      url: "https://res.cloudinary.com/dvcydkq8a/image/upload/v1613931362/qu8sujhc6yrpsigz9fqg.jpg"
},
{
        name: "Dell Latitude 7400",
        price: "ZMW 33,950.00", 
        url: "https://res.cloudinary.com/dvcydkq8a/image/upload/v1613932596/qh9kejivs5gg71zrtaaa.jpg"
},
{
          name: "HP Envy X360",
          price: "ZMW 28,950.00", 
          url: "https://res.cloudinary.com/dvcydkq8a/image/upload/v1615500538/m3nnkjnaeezvp3jteu6m.jpg"
}          
]

const App = () => {

  const ratingChanged = (rating) => {
    alert(`you have given ${rating} star rating for this product`)
  };

  const [products, setProducts] = useState([])

  useEffect(()=>{
  fetchProd();
  }, []);

  const fetchProd = async () => {
    const response = await axios.get(`https://blankchequeapi.herokuapp.com/products?name=phone`);
    const data = response.data
          setProducts(data)
  };

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 6,
arrows: true,
slidesToScroll: 1,
cssEase: "linear", 
responsive: [
  {
      breakpoint: 1024,
      settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
      }
  },
  {
      breakpoint: 600,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1
      }
  },
  {
      breakpoint: 480,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1
      }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
}
return (
<Container fluid>
<div className="App" style={{padding: 24}}>
<Slider {...settings}>
{products.map((product) => {
return(
<div>
<Card border="light" style={{ width: '10rem' }} key={product._id}>
  <Card.Img variant="top" src={product.productImage} />
  <ReactStars size={30} count={5} isHalf={true} onChange={ratingChanged}/>
  <Card.Body>
    <Card.Title><h6>{product.name}</h6>
</Card.Title>
    <Card.Text> <span>ZMW: </span>  
    {product.price}
    </Card.Text>
  </Card.Body>
  </Card>
</div>
)
})}
</Slider>
</div>
</Container>
);
}

export default App;