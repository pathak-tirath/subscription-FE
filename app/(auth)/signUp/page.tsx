"use client";

import { FieldInfo } from "@/app/_components/_common/FieldInfo";
import { pathName } from "@/app/_utils/enum";
import Logo from "@/assets/subscribly.png";
import { revalidateLogic, useForm } from "@tanstack/react-form";
import Image from "next/image";
import Link from "next/link";
import * as zod from "zod";

const signUpSchema = zod
  .object({
    name: zod
      .string("Please Enter a valid name")
      .min(3, "Please Enter at least 3 characters"),

    email: zod.email("Please Enter a valid email"),
    password: zod
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Must be at least 8 characters and include uppercase, lowercase, number, and special character.",
      ),
    confirmPassword: zod.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Password do not match",
        path: ["confirmPassword"],
      });
    }
  });

const SignUp = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: signUpSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <>
      <div className="flex flex-col w-md mx-auto h-screen  justify-center  -my-12 ">
        <form
          className="border-0 rounded-2xl px-6 py-4  flex flex-col gap-6 shadow-md bg-white ring ring-gray-200"
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
            <form.Field name="name">
              {(field) => (
                <>
                  <label
                    htmlFor="email"
                    className="text-sm font-extralight text-gray-400"
                  >
                    Name <span className="text-red-600">*</span>
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
              )}
            </form.Field>
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
                    <input
                      type="password"
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
            <form.Field name="confirmPassword">
              {(field) => {
                return (
                  <>
                    <label
                      htmlFor="confirmPassword"
                      className="text-sm font-extralight text-gray-400"
                    >
                      Confirm Password <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="password"
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

       <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmitting]) => (
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full rounded border-0 p-2 bg-buttons text-white cursor-pointer opacity-90 hover:opacity-100"
              >
                {isSubmitting ? "..." : "Signup"}
              </button>
            )}
          </form.Subscribe>
          <div className="text-xs text-center w-full mt-4">
            Already have an account?{" "}
            <Link href={pathName.LOGIN} className="text-landing font-bold">
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
