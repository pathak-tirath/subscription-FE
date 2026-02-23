"use client";

import * as zod from "zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldInfo } from "@/app/_components/_common/FieldInfo";
import { pathName } from "@/app/_utils/enum";
import { revalidateLogic, useForm } from "@tanstack/react-form";
import { LoginFn } from "@/api/auth/auth";
import Logo from "@/assets/subscribly.png";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Schema
const loginSchema = zod.object({
  email: zod.email("Please Enter a valid Email"),
  password: zod
    .string()
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Must be at least 8 characters and include uppercase, lowercase, number, and special character.",
    ),
});

const Login = () => {
  const mutation = LoginFn();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    validationLogic: revalidateLogic(), //automatically revalidates based on props change, button call etc
    validators: {
      onDynamic: loginSchema, // validates based on our schema
    },

    onSubmit: async ({ value }) => {
      try {
        const response = await mutation.mutateAsync(value);
        if (response?.status === 200 && response?.data) {
          router.push(pathName.DASHBOARD);
        }
      } catch (error) {
        console.log(error);
        // TODO: Add a logger and the toaster
      }
    },
  });

  return (
    <>
      <div className="flex flex-col w-md mx-auto h-screen -my-10 justify-center ">
        <form
          className="rounded-2xl px-6 py-4  flex flex-col gap-6 border-0 shadow-md bg-white ring ring-gray-200"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="flex  justify-center">
            <Image src={Logo} alt="logo" width={150} />
          </div>
          <div className="flex flex-col">
            <form.Field name="email">
              {(field) => {
                return (
                  <>
                    <label
                      htmlFor="email"
                      className="text-sm font-extralight text-gray-400"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      id={field.name}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className="p-2 bg-white rounded-md outline-0 border border-gray-300"
                    />
                    <FieldInfo field={field} />
                  </>
                );
              }}
            </form.Field>
          </div>

          <div className="flex flex-col">
            <form.Field name="password">
              {(field) => {
                return (
                  <>
                    <label
                      htmlFor="password"
                      className="text-sm font-extralight text-gray-400"
                    >
                      Password <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name={field.name}
                        id={field.name}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        className="p-2 bg-white rounded-md outline-0 border border-gray-300 w-full"
                      />
                      <button
                        className="absolute right-2 top-[50%] -translate-y-[50%] cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                    <FieldInfo field={field} />
                  </>
                );
              }}
            </form.Field>
          </div>

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmitting]) => (
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full rounded border-0 p-2 bg-buttons text-white cursor-pointer opacity-90 hover:opacity-100"
              >
                {isSubmitting ? "..." : "Login"}
              </button>
            )}
          </form.Subscribe>
          <div className="text-xs text-center w-full mt-4">
            Don&apos;t have an account?{" "}
            <Link href={pathName.SIGNUP} className="text-landing font-bold">
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
