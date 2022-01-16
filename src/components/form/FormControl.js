import Input from "./Input";
// import Radio from "./Radio";
// import Checkbox from "./Checkbox";
// import Select from "./Select";
// import Textarea from "./Textarea";
// import DatePicker from "./DatePicker";

// case "textarea":
//       return <Textarea {...rest} />;
//     case "select":
//       return <Select {...rest} />;
//     case "radio":
//       return <Radio {...rest} />;
//     case "checkbox":
//       return <Checkbox {...rest} />;
//     case "date":
//       return <DatePicker {...rest} />;

const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
};

export default FormControl;
