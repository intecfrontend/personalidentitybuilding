import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import { data, multiData } from './data';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
let slidesToShow = 5;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIos style={{ color: 'blue', fontSize: '30px' }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos style={{ color: 'blue', fontSize: '30px' }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 1026,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,

      },
    },
    {
      breakpoint: 1369,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 1,

      },
    },
    {
      breakpoint: 1625,
      settings: {
        slidesToShow: 5,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const MultiItemCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (width <= 1026) {
    slidesToShow = 1;
  } else if (width > 1026 && width <= 1369) {
    slidesToShow = 3;
  } else if (width > 1369 && width <= 1625) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  return (
    <div style={{ margin: '30px' }} className='carousel'>
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
          <Card item={item} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({item}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        className='multi__image'
        src={item}
        alt=''
        style={{
          width: '100%',
          height: '170px',
          objectFit: 'contain',
          marginBottom: '10px',
        }}
      />
      <p style={{ fontSize: '14px', padding: '5px 0' }}>TOP TRNDING TVs</p>
      <p style={{ fontSize: '16px', padding: '5px 0', color: 'green' }}>
        From ₹ 7,000
      </p>
      <p style={{ fontSize: '14px', padding: '5px 0', color: 'gray' }}>
        Up To ₹ 5,000 Off on HDFC
      </p>
    </div>
  );
};

export default MultiItemCarousel;
