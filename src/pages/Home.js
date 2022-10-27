import ProductGallery from '../components/carousel/CarouselReact';
import Input from '../components/inputfield';
import Header from '../components/header';
import ONnetwerklogo from "../assets/ONnetwerk.svg"
import Modal from "../compoModal/Modal"
import Verwelkommer from '../components/verwelkommersitem/verwelkommer';
import React, { useState } from 'react'

import '../App.css';
import { Link } from 'react-router-dom'

function Home(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const bladQuery = props.BladQuery
  const [open, setOpen] = useState(false)
  return (
    <div className="App">

      <div className="ONntwk__main">
        <Header />
        {console.log("setOpen" + open)}

        {modalOpen && 
        <div setOpenModal={setModalOpen} className="ONntwk__bluecover">
<Verwelkommer setOpenModal={setModalOpen}/>
        </div>
        }

        <button onClick={() => {
          setModalOpen(true);
        }} class="temporal" >temporalbtn
        </button>

        {/* <div className="ONntwk__bluecover">
          <Verwelkommer open={open} setOpen={setOpen}/>
        </div> */}

        <div className="ONntwk__inputcontainer">
          <img src={ONnetwerklogo} alt="ONlogo" className="ONntwk__logo" />
          <Input placeholder={"Zoek naar een magazine of infoblad"} ondertxt={"Laatst bekeken"} />
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
