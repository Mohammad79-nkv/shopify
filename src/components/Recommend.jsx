import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Recommend = ({ category }) => {
  const allProduts = useSelector((state) => state.products.products);
  const recommendProducts = allProduts
    ? allProduts.filter((p) => p.category === category)
    : [];

  return (
    <Container className=" py-4 px-2">
      <h4 className="px-2 pb-2">Other {category}</h4>
      <Content className="d-flex flex-nowrap overflow-auto py-3 px-2">
        {recommendProducts.map((p) => (
          <div className="bg-white bg-white ms-2">
            <img src={p.image} />
            {
              <Link to={`/products/p/${p.id}`}>
                <div className="p-detail px-1 d-flex flex-column justify-content-around">
                  <small className="text-white">{p.title}</small>

                  <div>
                    <i class="bi bi-star-fill text-warning me-2"></i>
                    <small className="text-white">{p.rating.rate}</small>
                  </div>
                </div>
              </Link>
            }
          </div>
        ))}
      </Content>
      <div className="second-layer"></div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background: rgba(62, 81, 150, 0.3);
  border-radius: 20px 0 0 0;
  width: 100vw;
  h4 {
    border-bottom: 1px solid rgba(54, 54, 113, 1);
  }
  .second-layer {
    width: 50px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(188, 193, 214, 1) 100%,
      rgba(188, 193, 214, 1) 100%
    );
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
`;
const Content = styled.div`
  div {
    border-radius: 20px;
    position: relative;
    box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    img {
      width: 10rem;
      height: 10rem;
      object-fit: contain;
      margin: 0.5rem 0;
    }
    .p-detail {
      width: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.7);
      top: 0;
      bottom: 0;
      right: 0px;
      left: 0;
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      .p-detail {
        top: 0;
        bottom: 0;
        right: 0px;
        left: 0;
        opacity: 1;
      }
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default Recommend;
