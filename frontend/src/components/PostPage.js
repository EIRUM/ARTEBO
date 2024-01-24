import { useState } from "react"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRight} style={{ color: 'green' }} />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'blue' }} />
    </div>
  );
};



const PostPage =({data})=>{
    const [currentSlide, setCurrentSlide] =useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCurrentSlide(current),
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
      };

return (
  <div>  
   
    <div className="post-container">
      
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <Slider {...settings}>
        {data.images.map((image, index) => (
          <div key={index}>
           <img
              src={image}
              alt={`slide ${index}`}
               style={{
                  width: "80%",
                  height: "600px",
                  objectFit: "cover",
                  border: "2px solid #000", // 테두리 스타일 및 색상을 여기에 추가
                }}
                />
          </div>
        ))}
      </Slider>

      <div className="thumbnail-container">
        {data.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`thumbnail ${index}`}
            className={currentSlide === index ? 'active-thumbnail' : ''}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <p>{data.content}</p>
    </div>
  </div>
  );
};

export default PostPage;