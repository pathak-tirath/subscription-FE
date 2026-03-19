
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { getCurrentUserUrl, loginUrl, signUpUrl } from "../endpoints";
import { ICurrentUser } from "@/app/_utils/types";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { pathName } from "@/app/_utils/enum";

// POST: login
const LoginFn = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUrl,
    onSuccess: (data) => {
      queryClient.setQueryData(["currentUser"], {
        data: {
          authenticated: true,
          user: data.data.user,
        },
      });
      router.replace(pathName.DASHBOARD);
    },
  });
  return mutation;
};

// POST: signup
const SignUpFn = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: signUpUrl,
    onSuccess: (data) => {
      queryClient.setQueryData(["currentUser"], {
        data: {
          authenticated: true,
          user: data.data.user,
        },
      });
      router.replace(pathName.DASHBOARD);
    },
  });
  return mutation;
};

// GET: currentUser
const GetCurrentUserFn = (): UseQueryResult<
  AxiosResponse<ICurrentUser>,
  Error
> => {
  const query = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUserUrl,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
  return query;
};

export { LoginFn, SignUpFn, GetCurrentUserFn };
