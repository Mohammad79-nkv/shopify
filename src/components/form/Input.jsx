import { Field, ErrorMessage } from "formik";
import ErrorText2 from './ErrorText2';

const Input = (props) => {
  const { name, lable, ...rest } = props;
  return (
  <div className="form-group mt-3">
    <lable className="text-capitalize" htmlFor={name}>{lable} :</lable>
    <Field className="form-control p-2" name={name} id={name} {...rest}/>
    <ErrorMessage name={name} component={ErrorText2}/>

  </div>
  );
};

export default Input;