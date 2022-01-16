import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SignInGif from "../../assets/gif/Mobile login (3).gif";
import FormControl from "../form/FormControl";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string().email("Enter a valid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <Container className="h-100">
      <Content className="container-fluid row p-0 m-0 ">
        <LeftBar className="col-12 col-lg-6 m-0">
          <div className="d-flex justify-content-center align-items-center ">
            <img className="img-fluid" type="gif" src={SignInGif} />
          </div>
        </LeftBar>
        <RigtBar className="col-12 col-lg-6 pt-5 px-lg-5">
          <div>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h3>Welcome back</h3>
              <p className="text-muted">Please enter your details</p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <FormControl
                    control="input"
                    type="email"
                    name="email"
                    lable="email"
                  />
                  <FormControl
                    control="input"
                    type="password"
                    name="password"
                    lable="password"
                  />
                  <div className="d-flex justify-content-between my-3">
                    <div className="d-flex align-items-center">
                      <input
                        className="checkbox checkbox-primary me-1"
                        type="checkbox"
                        name="Remember"
                      />{" "}
                      <p className="m-0">Remember for 30 days</p>
                    </div>
                    <a href="#" className="text-decoration-none text-black ">
                      Forgot password
                    </a>
                  </div>
                  <div className="w-100 d-flex justify-content-center">
                    <button type="submit" className="btn w-100 mx-auto">
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="signUp d-flex justify-content-center align-items-center mt-3 mb-3">
            <span className="text-muted">Don`t have an account?</span>
            <span>Sign up for free</span>
          </div>
        </RigtBar>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 80px);
  margin-top: 80px;
  /* img {
    width: 700px;
    height: 700px;
    object-fit: contain;
    /* display:none; */
  } */
`;
const Content = styled.div`
  height: calc(100% - 50px);
`;
const LeftBar = styled.div`
  background-color: rgba(238, 83, 124, 0.6);
  height: 100%;
  div {
    height: 300px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);

    img {
      height: 100%;
      margin: 0 auto;
    }
  }
  @media (min-width: 992px) {
      height: calc(100vh - 80px);;
    div {
      height: 100%;
      border: none;

      img {
        height: 700px;
        width: 700px;
        object-fit: contain;
        margin: 0 auto;
      }
    }
  }
`;
const RigtBar = styled.div`
  /* border:1px solid rgba(0, 0, 0, 1); */
  background-color: rgba(238, 83, 124, 0.6);
  height: 540px;
  @media (min-width: 992px) {
    background-color: white;
  }
  button {
    background-color: rgba(54, 54, 113, 1);
    color: white;
    font-size: 18px;
    padding: 0.7rem 1rem ;
    &:hover {
        color: white;
        box-shadow: 0px 0px 12px -1px rgba(54, 54, 113, 0.5)
    }
  }
  .signUp {
      span:nth-of-type(2){
        color: #363671;
        /* font-weight: bold; */
        font-size:18px;
    }
  }
`;

export default SignIn;