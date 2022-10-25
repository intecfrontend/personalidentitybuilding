import React, { useState } from 'react'
import '../App.css';
import searchIcon from "../assets/search.png"
import { Link } from 'react-router-dom'

function Inputfield(props) {
  const [BladQuery, setBladQuery] = useState('');
  const bladQuery = props.BladQuery;
  const ondertxt = props.ondertxt;
  const placeholder = props.placeholder;
  const linker = props.linker;
  // const [ondertxt, setOndertxt] = useState('Parent')


  console.log('value3 is:' + (JSON.stringify(bladQuery)));


  const handleChange = event => {
    setBladQuery(event.target.value);

    console.log('value is:', event.target.value);
    console.log('value2 is:' + BladQuery);
  };


  return (
    <>
      <div className="ONntwk__inputwrapperhome">
        <input
          name="BladQuery"
          onChange={handleChange}
          value={BladQuery}
          className="ONntwk__input" placeholder="Kies" type="text" />
        <Link className="ONntwk__sidebutton" to={`${linker}${BladQuery}`}>


          <img src={searchIcon} alt="searchIcon" className="Nntwk__searchIcon" />
        </Link>
      </div>
      <div className="ONntwk__laatst">{ondertxt}</div>
    </>
  )
}

export default Inputfield