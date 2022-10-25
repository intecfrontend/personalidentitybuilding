import React from "react";
import Item from "./Item-catalog";
import './Carousel.css';
import Carousel, { consts } from 'react-elastic-carousel';
// import LeftArrow from './LeftArrow.svg'
// import RightArrow from './RightArrow.svg'




const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 750, itemsToShow: 3 },
  { width: 968, itemsToShow: 4 },
  { width: 1100, itemsToShow: 5 },
];

function ProductGallery() {
  return (
    <div className="CarouselApp">
      <div className="CarouselFilterLine">
        <div className="CarouselFilterItemwrapper">
          <div className="CarouselFilterItem">PROMOTED</div>
          <div className="CarouselFilterItem CarouselFilterItemActive">RECENTLY ADDED</div>
          <div className="CarouselFilterItem">MOST POPULAR</div>
        </div>
      </div>
      <Carousel enableAutoPlay autoPlaySpeed={2500} breakPoints={breakPoints}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Carousel>
    </div>
  );
}
export default ProductGallery