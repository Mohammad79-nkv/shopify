import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlick = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Content {...settings}>
        <Wrap>
            <img src="/images/c-d-x-PDX_a_82obo-unsplash.jpg"/>
        </Wrap>
        <Wrap>
            <img src="/images/charles-deluvio-1-nx1QR5dTE-unsplash.jpg"/>
        </Wrap>
        <Wrap>
            <img src="/images/giorgio-trovato-K62u25Jk6vo-unsplash.jpg"/>
        </Wrap>
        <Wrap>
            <img src="/images/imani-bahati-LxVxPA1LOVM-unsplash.jpg"/>
        </Wrap>
        <Wrap>
            <img src="/images/rachit-tank-2cFZ_FB08UM-unsplash (4).jpg"/>
        </Wrap>
      </Content>
    </Container>
  );
};
const Container = styled.div`
    margin-top:65px;
    width: 100%;
`;
const Content = styled(Slider)`
  margin-top: 20px;
  position: relative;
  .slick-next{
      /* display: none !important; */
      position: absolute;
      top: 250px;
      right: 10px;
    color: #EB927B;
    opacity: 999;
  }
  .slick-prev {
      z-index:999;
      position: absolute;
      top: 250px;
      left: 10px;
      opacity: 999;
  }
  & > button::before {
      color: #EB927B !important;
      opacity: 0;
      transition: all 0.2s ease-in-out;
  }
  &:hover {
    & > button::before {
      opacity: 1!important;
  }
    }
`;
const Wrap = styled.div`
width: 100%;
height: 500px;
/* background-color:#FBC000; */
img {
    margin: 0 auto;
    width: 60%;
    height: 100%;
    object-fit: cover ;
    @media (max-width:768px){
        width: 100%;
        object-fit: contain;
    }
}
`;
export default MainSlick;
