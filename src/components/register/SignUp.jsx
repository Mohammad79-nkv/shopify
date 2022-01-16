import styled from "styled-components";
import signUp from "../../assets/gif/Mobile login-pana.svg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "../form/FormControl";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = Yup.object({
  fullname: Yup.string().required("Required"),
  email: Yup.string().email("Enter a valid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const onSubmit = (values) => {
  console.log(values);
};

const SignUp = () => {
  return (
    <Container>
      <Content className="container-fluid row p-0 mx-0">
        <LeftBar className="col-12 col-md-6 m-0 d-flex justify-content-center align-items-center ">
          <div className="">
            <img className="img-fluid" src={signUp} />
          </div>
        </LeftBar>
        <RigtBar className="col-12 col-md-6 pt-5">
          <div>
            <div>
              <h3>Welcome to Shopify</h3>
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
                    type="text"
                    name="fullname"
                    lable="Full name"
                  />
                  <FormControl
                    control="input"
                    type="email"
                    name="email"
                    lable="Email"
                  />
                  <FormControl
                    control="input"
                    type="password"
                    name="password"
                    lable="Password"
                  />
                  <FormControl
                    control="input"
                    type="password"
                    name="passwordConfirmation"
                    lable="Confirm password"
                  />
                  <div className="w-100 d-flex justify-content-center">
                    <button
                      disabled={!formik.isValid}
                      type="submit"
                      className="btn btn-primary w-100 mx-auto mt-5 mb-2"
                    >
                      Sign up
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <SignUpOption className="w-100 d-flex flex-column justify-content-center align-items-center">
            <div className="otherOption w-100 d-flex flex-column justify-content-center align-items-center my-3">
              <p className="bg-white px-2 text-muted">Or sign Up with</p>
            </div>
            <div className="d-flex justify-content-around align-items-center w-100">
                <div className="border rounded p-3"> <i class="bi bi-google"></i></div>
                <div className="border rounded p-3"> <i class="bi bi-facebook"></i></div>
                <div className="border rounded p-3"> <i class="bi bi-apple"></i></div>
            </div>
            <p></p>
          </SignUpOption>
        </RigtBar>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 80px);
`;
const Content = styled.div`
  margin-top: 80px;
  /* height: calc(100vh - 80px); */
  height: 100%;
`;
const LeftBar = styled.div`
  background-color: rgba(127, 17, 224, 0.5);
  /* display: flex;
  justify-content: center;
  align-items: center; */
  height: 100vh;
  div {
    img {
      width: 700px;
      height: 700px;
    }
  }
  @media (max-width: 768px) {
    height: 300px;
    div {
      img {
        width: 300px;
        height: 300px;
      }
    }
  }
`;
const RigtBar = styled.div`
  @media (max-width: 768px) {
    /* height: 300px; */
  }
`;
const SignUpOption = styled.div`
    .otherOption{
        position: relative;
    p {
      /* width: 100%; */
      margin: 0 auto;
      z-index: 2;
    }
    &::after {
      content: "";
      position: absolute;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      bottom: 11px;
      /* left: 0; */
      /* right: 0; */
      /* top: 0; */
      width: 100%;
    }
    }
  
`;
export default SignUp;
