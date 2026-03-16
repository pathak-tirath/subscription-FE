import { useMutation, useQuery } from "@tanstack/react-query";
import { getCurrentUserUrl, loginUrl, signUpUrl } from "../endpoints";

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

// GET: currentUser
const GetCurrentUserFn = () => {
  const query = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUserUrl,
  });
  return query;
};

export { LoginFn, SignUpFn, GetCurrentUserFn };
