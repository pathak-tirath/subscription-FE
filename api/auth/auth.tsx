import { useMutation } from "@tanstack/react-query";
import { loginUrl, signUpUrl } from "../endpoints";

// POST: login
const LoginFn = () => {
  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUrl,
  });
  return mutation;
};

// POST: signup
const SignUpFn = () => {
  const mutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: signUpUrl,
  });
  return mutation;
};

export { LoginFn, SignUpFn };
