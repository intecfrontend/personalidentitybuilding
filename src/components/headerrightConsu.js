import React from 'react'
import "../App.css"
import amuna from "../assets/magitems/amuna.jpg"
import digit from "../assets/magitems/digit.svg"
import exit from "../assets/magitems/exit.svg"
import savelogo from "../components/MagazineItems/magazines_assets/savelogo.svg"

import styled from 'styled-components';
// import axios from 'axios'

const UitschuifConsu = styled.div`
width: 215px;
height: auto;
background:white;
box-shadow: rgba(99, 99, 99, 0.6) 2px 2px 4px 2px;
position:absolute;
z-index:999; 
padding: 5px 0px 0px 0px; 
top: 45px; 
left: calc(100vw - 268px);
border-radius: 0  0 5px 5px
`;
const Iddiv = styled.div`
width: 215px;
height: auto;
border-bottom:#1394d2 1px solid;
font-size:12px;
display: flex;
align-items: center;
`;
const Finaldiv = styled.div`
width: 215px;
height: auto;
font-size:12px;
display: flex;
align-items: center;
`;
const Fotoconsument = styled.img`
width: 45px;
height: 45px;
margin: 10px;
object-fit: cover;
border:black 1px solid;
font-size:10px;
border-radius: 50%
`;const LogoOndXs = styled.img`
width: 20px;
height: 20px;
border: white 10px solid;margin: 0px;
object-fit: cover;
font-size:10px;
border-radius: 50%
`;
const Logoconsument = styled.img`
width: 35px;
height: auto;
margin: 0px 5px 0px 3px;
object-fit: cover;
font-size:10px;
`;

function Headerright(props) {


  return (
    <>
      <div className="ONntwk__buttonHeaderwrapper ">
        <div className="ONntwk__bluecardbtn ONntwk__btncont">
          <div className="ONntwk__bluecardbtn ONntwk__regularbtn">ALLE NETWERKEN </div>
        </div>
        <div className="ONntwk__bluecardbtn ONntwk__btncontaanmelden">
          <div className="ONntwk__bluecardbtn ONntwk__regularbtn">
          Amuna V.
          <LogoOndXs src={amuna} alt="fotoconsument" />

          </div>
        </div>



        <UitschuifConsu>
          <Iddiv>
            <Fotoconsument src={amuna} alt="fotoconsument" />
            <div> <strong>Amuna Vercruysse</strong><br />
              am.vercruysse@idb.be</div>
          </Iddiv>
          <Iddiv>
            <Logoconsument src={savelogo} alt="savelogo" />
            <div> Opgeslagen infobladen<br />
              & magazines</div>
          </Iddiv>
          <Iddiv>
            <Logoconsument src={digit} alt="digit" />
            <div> Account beheren</div>
          </Iddiv>
          <Finaldiv>
            <Logoconsument src={exit} alt="exit" />
            <div> Afmelden</div>
          </Finaldiv>
        </UitschuifConsu>



        <select className="ONntwk__bluecardbtn ONntwk__taalbtn">
          <option className="ONntwk__taalOptie" value="NL">NL</option>
          <option className="ONntwk__taalOptie" value="FR">FR</option>
          <option className="ONntwk__taalOptie" value="EN">EN</option>
          <option className="ONntwk__taalOptie" value="DE">DE</option>
        </select>
      </div>
    </>
  )
}
export default Headerright