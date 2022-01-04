import Slider from "react-slick";
import styled from "styled-components";

const BrandSlick = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <Container>
      <Content {...settings}>
        <Wrap className="slide-1">
          <img src="/images/brandIcon/adidas-9.svg" />
        </Wrap>
        <Wrap className="slide-2">
          <img src="/images/brandIcon/louis-vuitton-1.svg" />
        </Wrap>
        <Wrap className="slide-3">
          <img src="/images/brandIcon/nike-4.svg" />
        </Wrap>
        <Wrap className="slide-4">
          <img src="/images/brandIcon/ray-ban.svg" />
        </Wrap>
        <Wrap className="slide-4">
          <img src="/images/brandIcon/h-m.svg" />
        </Wrap>
        <Wrap className="slide-4">
          <img src="/images/brandIcon/hermes.svg" />
        </Wrap>
        <Wrap className="slide-4">
          <img src="/images/brandIcon/zara.svg" />
        </Wrap>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
`;
const Content = styled(Slider)`
  & > button {
    display: none !important;
  }
  /* .slick-slide {
      width: 300px !important;
  } */
`;
const Wrap = styled.div`
    
  width: 200px!important;
  /* background-color: rgba(0, 0, 0, 0.5); */
  z-index:99;
  display:flex;
  align-items: center;
  justify-content: center;
  img {
      z-index:9;
    width: 100px;
  }
`;

export default BrandSlick;
