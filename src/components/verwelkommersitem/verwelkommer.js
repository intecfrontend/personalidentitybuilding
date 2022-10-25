import React from 'react'
import styled from 'styled-components';
import ONnetwerklogo from "../../assets/ONnetwerk.svg"
import eyes from "./eyeIcon.svg"
import closeX from "./closeX.svg"
import { Link } from 'react-router-dom'


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
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
margin-left: 7px
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
const BtnWrapper = styled.div`
font-family: sans-serif;
display: flex;
justify-content: center;
margin-top: 40px;
`;
const InputWrapper = styled.div`
font-family: sans-serif;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 40px;
`;
const WhiteBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
background:   white;
/* border:#1394d2 solid 1px;  */
border:black solid 1px; 
border-radius: 5px;
font-size: 10px;
font-weight: 600;
color: #1394d2;
width: 140px;
height: 25px;
margin: 5px;
box-shadow:rgba(99, 99, 99, 0.7) 2px 2px 2px 0px;
transition: ease 0.2s all;
cursor: pointer;
&:hover {box-shadow:rgba(99, 99, 99, 0) 2px 2px 2px 0px};
`;
const BlueBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
background:   #1394d2;
border-radius: 5px;
font-size: 10px;
font-weight: 600;
color: white;
width: 140px;
height: 25px;
margin: 5px;
box-shadow:rgba(99, 99, 99, 0.7) 2px 2px 2px 0px;
transition: ease 0.2s all;
cursor: pointer;
&:hover {box-shadow:rgba(99, 99, 99, 0) 2px 2px 2px 0px};
`;
const Ondernmgsno = styled.div`
display: flex;
align-items: center;
font-weight: 600;
width: 340px;
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
width: 320px;
height: 35px;
position: relative;
margin: 5px;
border:black solid 0.5px; 
transition: ease 0.2s all;
cursor: pointer;
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
top: 2px;
z-index: 999;
background: rgba(	241,	242,	242, 1);
transition: ease 0.2s all;
margin-left: 15px; padding: 0px 2px 0px 2px;
`;
const SubLabel = styled.div`
display: flex;
justify-content: flex-end;
font-size: 14px;
color:   #1394d2;
margin-top: -15px;
width: 97%;
z-index: 999;
transition: ease 0.2s all;
`;
const BlackBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
background: black;
color: white;
font-size: 24px;
font-weight: 400;
padding: 2px 10px 0px 10px;
width: 320px;
height: 35px;
margin: 30px 5px 5px 5px;
transition: ease 0.2s all;
cursor: pointer;
&:hover {box-shadow:rgba(99, 99, 99, 0) 2px 2px 2px 0px};
`;
const SubLabelcenter = styled.div`
display: flex;
justify-content: center;
font-size: 14px;
color:   #1394d2;
width: 100%;
z-index: 999;
transition: ease 0.2s all;
`;
const Eye = styled.img`
top: 20%;
left: 77%;
position: absolute;
width: 20%
`;
const CloseX = styled.img`
cursor: pointer;

top: 2%;
left: 92%;
position: absolute;
width: 5%
/* &:hover {scale: 10%} */
`;

function verwelkommer() {
  return (
    <Container>
      <CloseX src={closeX} alt="" />

      <ONlogo src={ONnetwerklogo} alt="ONlogo" />

      <TxtWrapper>
        WELKOM OP HET <Bluetxt> CATALOGUSNETWERK</Bluetxt>
      </TxtWrapper>
      <BtnWrapper>
        <Link to="/ondernemermag">
          <BlueBtn>IK BEN ONDERNEMER </BlueBtn>
        </Link>
        <Link to="/consumentmag">
          <WhiteBtn>IK BEN CONSUMENT</WhiteBtn>
        </Link>
      </BtnWrapper>

      <InputWrapper>
        <Ondernmgsno>
          <Label>Jouw ondernemingsnummer</Label>
          <Ondernmgsinput>
            BE0718.600.051
          </Ondernmgsinput>
        </Ondernmgsno>

        <Ondernmgsno>
          <Label>Jouw vestigingsnummer</Label>
          <Ondernmgsinput>
            BE2285183012
          </Ondernmgsinput>
        </Ondernmgsno>

        <Ondernmgsno>
          <Label>OTP (One Time Password)</Label>
          <Eye src={eyes} alt="eyeicon" />
          <Ondernmgsinput>

          </Ondernmgsinput>
        </Ondernmgsno>
        <SubLabel>ik heb nog geen OTP</SubLabel>

        <BlackBtn>
          REGISTREREN
        </BlackBtn>
        <SubLabelcenter>Ik heb al een account</SubLabelcenter>


      </InputWrapper>

    </Container>
  )
}

export default verwelkommer