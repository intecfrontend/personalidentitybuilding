import React from 'react'
import styled from 'styled-components';
import ONnetwerklogo from "../../assets/ONnetwerk.svg"
import eyes from "./eyeIcon.svg"


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
height: 700px;
margin: 40px 0px 0px 0px;
box-shadow:rgba(99, 99, 99, 0.7) 2px 2px 8px 0px;
background: rgba(	241,	242,	242, 1);
font-size: 26px;
font-family: "Barlow Condensed";
text-align:center;
color: #414042`;
const Bluetxt = styled.span`
color:   #1394d2;
margin: 0px 7px
`;
const ONlogo = styled.img`
width: 100px;
margin-top:20px;
`;
const TxtWrapper = styled.div`
display: flex;
justify-content: center;
margin-top:20px;
`;
const InputWrapper = styled.div`
font-family: sans-serif;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 40px;
background: red
width: 100%;
`;
const Ondernmgsno = styled.div`
display: flex;
justify-content: center;
font-weight: 600;
height: 65px;
position: relative;
margin: 5px 5px 5px 5px; 
transition: ease 0.2s all;
cursor: pointer;
&:hover {box-shadow:rgba(99, 99, 99, 0) 2px 2px 2px 0px};
`;
const Ondernmgsinput = styled.div`
display: flex;
align-items: center;
border-radius: 5px;
font-size: 24px;
font-weight: 400;
padding: 2px 10px 0px 10px;
height: 35px;
width: 175px;
margin: 10px 5px 10px 5px;
border:black solid 0.5px; 
transition: ease 0.2s all;
cursor: pointer;
&:hover {box-shadow:rgba(99, 99, 99, 0) 2px 2px 2px 0px};
`;
const Ondernmgsselect = styled.select`
display: flex;
align-items: center;
border-radius: 5px;
font-size: 24px;
font-weight: 400;
padding: 2px 10px 0px 10px;
height: 35px;
width: 185px;
border: none;
transition: ease 0.2s all;
background: rgba(	241,	242,	242, 1);
cursor: pointer;
/* z-index:999; */
&:hover {box-shadow:rgba(99, 99, 99, 0) 2px 2px 2px 0px};
`;
const Label = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 400;
color:   #1394d2;
position: absolute;
top: 0px;
left: 2px;
z-index: 999;
background: rgba(	241,	242,	242, 1);
transition: ease 0.2s all;
margin-left: 15px; padding: 0px 2px 0px 2px;
`;
const Label2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 400;
color:   #1394d2;
position: absolute;
top: 0px;
left: 205px;
z-index: 999;
background: rgba(	241,	242,	242, 1);
transition: ease 0.2s all;
margin-left: 15px; padding: 0px 2px 0px 2px;
`;
const BlackBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
background: black;
color: white;
font-size: 24px;
font-weight: 600;
padding: 2px 10px 0px 10px;
width: 383px;
height: 35px;
margin: 10px 5px 5px 10px;
transition: ease 0.2s all;
cursor: pointer;
&:hover {box-shadow:rgba(99, 99, 99, 0) 2px 2px 2px 0px};
`;



function bedankt() {
  return (
    <Container>
      <ONlogo src={ONnetwerklogo} alt="ONlogo" />

      <TxtWrapper>
        BEDANKT OM <Bluetxt>JOUW ACCOUNT </Bluetxt> TE BEVESTIGEN!
      </TxtWrapper>
      <br />
      <TxtWrapper>
        VUL HIERONDER NOG WAT<Bluetxt>GEGEVENS </Bluetxt>  VAN JE AAN
      </TxtWrapper>

      <InputWrapper>
        <Ondernmgsno>
          <Label>Taalvoorkeur*</Label>
          <Ondernmgsinput>
            <Ondernmgsselect>
              <option value="NL">Nederlands</option>
              <option value="FR">Français</option>
              <option value="EN">English</option>
              <option value="DE">Deutsch</option>
            </Ondernmgsselect>
          </Ondernmgsinput>

          <Label2>Gebruikersnaam</Label2>
          <Ondernmgsinput>
          </Ondernmgsinput>
        </Ondernmgsno>
        <Ondernmgsno>
          <Label>Voornaam</Label>
          <Ondernmgsinput>
          </Ondernmgsinput>
          <Label2>Naam</Label2>
          <Ondernmgsinput>
          </Ondernmgsinput>
        </Ondernmgsno>

        <Ondernmgsno>
          <Label>Geboortedatum</Label>
          <Ondernmgsinput>
          </Ondernmgsinput>
          <Label2>Telefoonnummer</Label2>
          <Ondernmgsinput>
          </Ondernmgsinput>
        </Ondernmgsno>

        <BlackBtn>
          GA VERDER
        </BlackBtn>
      </InputWrapper>

    </Container>
  )
}

export default bedankt