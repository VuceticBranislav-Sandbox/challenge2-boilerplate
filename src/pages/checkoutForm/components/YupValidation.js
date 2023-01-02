import * as yup from "yup";

const phoneNumberRegEx = /^[+][0-9]{10}/;

const YupValidation = yup.object().shape({
  name: yup
    .string()
    .min(3, "Too Short")
    .max(30, "Too Long")
    .required("Required"),

  phoneNumber: yup
    .string()
    .matches(phoneNumberRegEx, "Invalid Phone Number")
    .max(11, "Invalid Phone Number")
    .required("Required"),

  email: yup.string().email("Enter a Vaid Email").required("Email is Required"),
});

export default YupValidation;
