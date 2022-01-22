import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SignInGif from "../../assets/gif/Mobile login (3).gif";
import FormControl from "../form/FormControl";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/userServices";
import jwt from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { setUser } from "./../../reducers/user";
import { toast } from "react-toastify";
import { useState } from "react";


//per loader css
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  z-index:999;
`;

//form initial Values
const initialValues = {
  email: "",
  password: "",
};

//form validation
const validationSchema = Yup.object({
  email: Yup.string().email("Enter a valid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const SignIn = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  //submit function
  const onSubmit = async (values) => {
    const { email, password } = values;
    const user = {
      email,
      password,
    };
    console.log("object");
    setLoading(true);
    try {
      const { status, data } = await loginUser(user);
      // const user = deCodedToken(data.token)
      console.log(status);
      const userLogedIn = jwt(data.token).user;
      const firstName = userLogedIn.fullname.split(" ")[0];
      dispatch(setUser(userLogedIn));
      localStorage.setItem("user", JSON.stringify(userLogedIn));
      navigate("/", { replace: true });
      setLoading(false);
      toast.success(`Hello again ${firstName}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      setLoading(false);
      toast.error(`Incorrect email or password`, {
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

  if (user.fullname) {
    navigate("/");
  }

  return (
    <Container className="h-100">
      {loading ? (
        <Preloader className="position-fixed top-0 bottom-0 left-0 right-0 w-100 bg-white d-flex justify-content-center align-items-center">
          <ClimbingBoxLoader
            color={"#363671"}
            loading={loading}
            css={override}
          />
        </Preloader>
      ) : null}
      <Content className="container-fluid row p-0 m-0 ">
        <LeftBar className="col-12 col-md-6 m-0">
          <div className="d-flex justify-content-center align-items-center ">
            <img className="img-fluid" type="gif" src={SignInGif} />
          </div>
        </LeftBar>
        <RigtBar className="col-12 col-md-6 pt-5 px-lg-5">
          <div>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h3>Welcome back</h3>
              <p className="text-muted">Please enter your details</p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnChange={true}
              validateOnMount
              validateOnBlur
            >
              {(formik) => (
                <Form>
                  <FormControl
                    control="input"
                    type="email"
                    name="email"
                    lable="email *"
                  />
                  <FormControl
                    control="input"
                    type="password"
                    name="password"
                    lable="password *"
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
                    <button
                      disabled={!formik.isValid}
                      type="submit"
                      className="btn w-100 mx-auto p-3"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="signUp d-flex justify-content-center align-items-center mt-3 mb-3">
            <span className="text-muted">Don`t have an account?</span>
            <Link className="text-decoration-none ms-1" to="/signup">
              <span>Sign up for free</span>
            </Link>
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
const Preloader = styled.div`
  z-index: 99;
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
  @media (min-width: 768px) {
    height: calc(100vh - 80px);
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
  background-color: white;
  height: 540px;
  @media (min-width: 768px) {
    background-color: white;
  }
  button {
    background-color: rgba(238, 83, 124, 0.9);
    color: white;
    font-size: 18px;
    &:hover {
      color: white;
      box-shadow: 0px 0px 12px -1px rgba(238, 83, 124, 0.5);
      background-color: rgba(238, 83, 124, 1);
    }
  }
  .signUp {
    a {
      span {
        color: #ee537c;
        /* font-weight: bold; */
        font-size: 18px;
      }
    }
  }
`;

export default SignIn;
