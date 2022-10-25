import React from 'react'
import CatalogItem from "./deCatalogus.png"
import cornericon from "./cornericon.svg"
import '../../App.css';

function carousselitem() {
  return (
    <>
      <div className="ONntwk__carouselitemcardwrapper">

        <div className="ONntwk__carouselitemcard">



          <img src={CatalogItem} alt="CatalogItem" className="catalogImage" />



          <div className="ONntwk__buttonwrapper ">
            <div className="ONntwk__bluecardbtn ONntwk__btncont">
              <div className="ONntwk__bluecardbtn ONntwk__regularbtn">VOLGEN  </div>
            </div>

            <div className="ONntwk__bluecardbtn ONntwk__btncont">
              <div className="ONntwk__bluecardbtn ONntwk__regularbtn">ONTDEK MEER 
                <span>
                  <img className="ONntwk__cornericon" src={cornericon} alt="cornericon" />
                </span> 
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default carousselitem