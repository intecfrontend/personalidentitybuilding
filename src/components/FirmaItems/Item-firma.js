import React from 'react'
import LogoItem from "./Firmalogos/KruidvatLogo.png"
import cornericon from "./cornericon.svg"
import '../../App.css';
import styled from 'styled-components';

const ItemBuitenBorder = styled.div`
     border-radius: 5px;
     width: 300px;
      height: 320px;
      display: flex;
      justify-content: center;
      align-items: center;      
      transition: all .5s;
      &:hover {transform: scale(1.06);}
`;
const ItemBorder = styled.div`
     Border: rgba(99, 99, 99, 0.2) 1px solid;
     border-radius: 5px;
     width: 250px;
      height: 270px;
      display: flex;
      flex-direction: column;
      padding: 10px;
      box-shadow: rgba(99, 99, 99, 0.3) 2px 2px 8px 0px;
background: white;

  
`;
const FirmaItemTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin: 30px 0px 0px 30px
`;
const FirmaItemSubTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin: 10px 0px 10px 30px
`;
const Logo = styled.img`
height: 119px;
  width: 185px
`;
const Logowrapper = styled.div`
  width: 100%; display: flex; justify-content: center
`;

function firmaitem() {
  return (
    <>

      <ItemBuitenBorder>
        <ItemBorder>
          <Logowrapper>


            <Logo src={LogoItem} alt="logoItem" />

            
          </Logowrapper>


          <FirmaItemTitle>Kruidvat Ternat</FirmaItemTitle>


          <FirmaItemSubTitle>... magazines<br />... catalogi</FirmaItemSubTitle>

          <div className="ONntwk__buttonwrapper ">
            <div className="ONntwk__bluecardbtn ONntwk__btncont">
              <div className="ONntwk__bluecardbtn ONntwk__regularbtn">VOLGEN </div>
            </div>
            <div className="ONntwk__bluecardbtn ONntwk__btncont">
              <div className="ONntwk__bluecardbtn ONntwk__regularbtn">ONTDEK MEER
                <span>
                  <img className="ONntwk__cornericon" src={cornericon} alt="cornericon" />
                </span>
              </div>
            </div>
          </div>

        </ItemBorder>
      </ItemBuitenBorder>
    </>
  )
}

export default firmaitem