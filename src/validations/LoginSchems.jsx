import * as yup from "yup"

export const loginSchems = yup.object({
    email:yup.string().required(),
    password:yup.string().required(),
  });