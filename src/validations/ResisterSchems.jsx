import * as yup from "yup"

export const registerSchema = yup.object({
    userName:yup.string().required(),
    fullName:yup.string().required(),
    email:yup.string().required(),
    phoneNumber:yup.string().required(),
    password:yup.string().required(),
  });