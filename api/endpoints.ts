import { ILogin, ISignUp } from "@/app/_utils/types";
import axios from "axios";
const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auth`;

const loginUrl = async (requestBody: ILogin) => {
  const response = await axios.post(`${baseUrl}/sign-in`, requestBody);
  return response;
};
const signUpUrl = async (requestBody: ISignUp) => {
  const response = await axios.post(`${baseUrl}/sign-up`, requestBody);
  return response;
};

const getCurrentUserUrl = async () => {
  const response = await axios.get(`${baseUrl}/auth/me`);
  return response;
};

export { loginUrl, signUpUrl, getCurrentUserUrl };
