import styled from "styled-components";

const Footer = () => {
  return (
    <Container className="container-fluid w-100 p-0">
      <Content className="container-fluid row p-4 w-100">
        <div className="col-12 col-sm-6 col-md-3  mt-3 mt-md-0">
          <h6>ONLINE STORE</h6>
          <ul>
            <li>Sell online</li>
            <li>Features</li>
            <li>Examples</li>
            <li>Ecommerce</li>
            <li>Shopping cart</li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt-3 mt-md-0">
          <h6>SUPPORT</h6>
          <ul>
            <li>Free tools</li>
            <li>Free stock photo</li>
            <li>Logo Maker</li>
            <li>Shopify Community</li>
            <li>API documentation</li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt-3 mt-md-0">
          <h6>SHOPIFY</h6>
          <ul>
            <li>Contact</li>
            <li>Partner program</li>
            <li>Blog topics</li>
            <li>Community events</li>
            <li>App developers</li>
          </ul>
        </div>
        <div className="social-section col-12 col-sm-6 col-md-3 mt-3 mt-md-0">
          <div className="social-media mb-4 w-100 pb-3">
            <h6>FOLLOW US</h6>
            <div className="d-flex justify-content-evenly w-100">
              <i class="bi bi-instagram"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-youtube"></i>
            </div>
          </div>
          <div className="my-4">
            <h6 className="text-center mx-auto">
              Stay up to date with the latest discounts
            </h6>
            <div className="d-flex d-md-flex flex-md-column">
              <input
                class="form-control "
                type="email"
                placeholder="Enter your Email ..."
              />
              <button class="btn mx-3 mt-md-1">Confirm</button>
            </div>
          </div>
        </div>
      </Content>
      <Developer className="text-center color-white">
        <h6 className="text-center ">
          Develop with{" "}
          <span>
            <i class="bi bi-suit-heart-fill"></i>
          </span>{" "}
          ,{" "}
          <span>
            <i class="bi bi-cup-fill"></i>
          </span>{" "}
          by Mohammad Nikvarz
        </h6>
      </Developer>
    </Container>
  );
};

const Container = styled.footer`
  background-color: #363671;
`;
const Content = styled.div`
  ul li {
    list-style-type: none;
  }
  & > div {
    border-right: 1px solid rgba(238, 83, 124, 0.3);
    @media (max-width: 575px) {
      border: none;
      border-bottom: 1px solid rgba(238, 83, 124, 0.3);
    }
    h6 {
      margin-left: 20px;
      font-weight: bold;
    }
    color: rgba(255, 255, 255, 0.8);
    li {
      color: rgba(255, 255, 255, 0.6);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      &:hover {
        color: rgba(238, 83, 124, 1);
      }
    }
  }
  .social-media {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  i {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: rgba(238, 83, 124, 1);
    }
  }
  button {
    color: #ffffff !important;
    background-color: rgba(238, 83, 124, 1);
  }
`;

const Developer = styled.div`
    border-top:1px solid rgba(255, 255, 255, 0.1);
    padding:10px;
  h6 {
      color:rgba(255, 255, 255, 0.8)
  }
  span:nth-child(1){
      color:rgba(255, 0, 0, 0.8);
  }
  span:nth-child(2){
      color:rgba(108, 76, 53, 0.8)
;
  }
`;

export default Footer;
