import ProductGallery from '../components/carousel/CarouselReact';
import Input from '../components/inputfield';
import Header from '../components/header';
import ONnetwerklogo from "../assets/ONnetwerk.svg"


import '../App.css';

function Home(props) {
  const bladQuery = props.BladQuery
  return (
    <div className="App">

      <div className="ONntwk__main">
        <Header />
        <div className="ONntwk__inputcontainer">
        <img src={ONnetwerklogo} alt="ONlogo" className="ONntwk__logo" />
        <Input placeholder={"Zoek naar een magazine of infoblad"} linker={"search/"} ondertxt={"Laatst bekeken"}/>
        </div>
        <div className="ONntwk__carouselwrapper ">
          <ProductGallery />
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
