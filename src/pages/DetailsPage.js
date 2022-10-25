import React, { useState } from 'react'
import searchIcon from "../assets/search.png"
import { Link, useParams } from 'react-router-dom'
import HeaderInput from '../components/headerInput';
import MagazinesCardsContainer from '../components/MagazineItems/Item-magazineCont'
import MagazinesSideleft from '../components/MagazineItems/MagazinesSideleft'

function DetailsPage(props) {
  const [BladQuery, setBladQuery] = useState('');
  const params = useParams();

  const bladQuery = props.BladQuery;
  const ondertxt = props.ondertxt;
  // const [ondertxt, setOndertxt] = useState('Parent')
  const handleChange = event => {
    setBladQuery(event.target.value);

    console.log('value is:', event.target.value);
    console.log('value2 is:' + BladQuery);
  };
  return (
    <div className="App">

      {console.log("IDIDIDIDID4" + JSON.stringify(params.id))}

      <div className="ONntwk__main">
        <div className="ONntwk__mainVertical ">
          <HeaderInput />

          <div className="ONntwk__inputwrapper">
            <input
              name="BladQuery"
              onChange={handleChange}
              value={BladQuery}
              className="ONntwk__input" placeholder="Ternat" type="text" />
            <Link className="ONntwk__sidebutton" to="/magazines">


              <img src={searchIcon} alt="searchIcon" className="Nntwk__searchIcon" />
            </Link>
          </div>

          <div className="ONntwk__sidecardeswrap">
            <MagazinesSideleft />     

            <MagazinesCardsContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
