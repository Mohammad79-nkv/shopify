import styled from "styled-components";
import signUp from "../../assets/gif/Mobile login-pana.svg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "../form/FormControl";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/userServices";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/react";




//perloader css
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  z-index:999;
`;

//form initial values
const initialValues = {
  fullname: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

//form validation
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
  ).required("Required"),
});



const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  //submit function
  const onSubmit = async (values) => {
    const {fullname, email, password, passwordConfirmation} = values
    const user = {
      fullname,
      email,
      password,
    };
    console.log(user)
    try {
      setLoading(true);
      const { status } = await registerUser(user);
      console.log(status);
      if(status === 201){
        setLoading(false);
        navigate('/signin')
        toast.success('User created', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    }catch(err){
      console.log(err)
      toast.error(`${err.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };

  if (user.fullname){
    navigate("/")
  }

  return (
    <Container>
    {loading ? (
      <Preloader className="position-fixed top-0 bottom-0 left-0 right-0 w-100 bg-white d-flex justify-content-center align-items-center">
        <ClimbingBoxLoader
          color={"#363671"}
          loading={loading}
          css={override}
        />
      </Preloader>
    ) : null}
      <Content className="container-fluid row p-0 mx-0">
        <LeftBar className="col-12 col-md-6 m-0 d-flex justify-content-center align-items-center ">
          <div className="">
            <img className="img-fluid" src={signUp} />
          </div>
        </LeftBar>
        <RigtBar className="col-12 col-md-6 pt-5 px-5">
          <div>
            <div>
              <h3>Welcome to Shopify</h3>
              <p className="text-muted">Please enter your details</p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnMount
              
            >
              {(formik) => (
                <Form>
                  <FormControl
                    control="input"
                    type="text"
                    name="fullname"
                    lable="Full name *"
                  />
                  <FormControl
                    control="input"
                    type="email"
                    name="email"
                    lable="Email *"
                  />
                  <FormControl
                    control="input"
                    type="password"
                    name="password"
                    lable="Password *"
                  />
                  <FormControl
                    control="input"
                    type="password"
                    name="passwordConfirmation"
                    lable="Confirm password *"
                  />
                  <div className="w-100 d-flex justify-content-center">
                    <button
                      disabled={!formik.isValid}
                      type="submit"
                      className="btn btn-primary w-100 mx-auto mt-5 mb-2 p-3"
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="signIn d-flex justify-content-center align-items-center mt-3 mb-3">
                    <span className="text-muted">Already have an account?</span>
                    <Link className="text-decoration-none" to="/signin">
                      <span>Sign in</span>
                    </Link>
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
              <div className="border rounded p-3">
                <i class="bi bi-google"></i>
              </div>
              <div className="border rounded p-3">
                <i class="bi bi-facebook"></i>
              </div>
              <div className="border rounded p-3">
                <i class="bi bi-apple"></i>
              </div>
            </div>
          </SignUpOption>
        </RigtBar>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 80px);
`;
const Preloader = styled.div`
  z-index: 99;
`;
const Content = styled.div`
  margin-top: 80px;
  height: 100%;
`;
const LeftBar = styled.div`
  background-color: rgba(127, 17, 224, 0.5);

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
  button {
    background-color: rgba(62, 81, 150, 0.9);
    border: none;
    font-size: 18px;
    &:hover {
      background-color: rgba(62, 81, 150, 1);
      box-shadow: 0px 0px 12px -1px rgba(62, 81, 150, 0.5);
    }
    &:disabled{
      background-color: rgba(62, 81, 150, 1);
    }
  }
  .signIn {
    a{
      span{
        color:#3E5196;
        font-size: 18px;
      }
    }
  }
`;
const SignUpOption = styled.div`
  .otherOption {
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
      width: 100%;
    }
  }
`;
export default SignUp;
