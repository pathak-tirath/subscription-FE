import { pathName } from "@/app/_utils/enum";
import Logo from "@/assets/subscribly.png";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-col w-md mx-auto h-screen  justify-center  -my-12 ">
        <form className="border-0 rounded-2xl px-6 py-4  flex flex-col gap-6 shadow-md bg-white ring ring-gray-200">
          <div className="flex  justify-center">
            <Image src={Logo} alt="logo" width={150} />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-extralight text-gray-400"
            >
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-2 bg-white rounded-md outline-0 border border-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-extralight text-gray-400"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="p-2 bg-white rounded-md outline-0 border border-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-extralight text-gray-400"
            >
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-2 bg-white rounded-md outline-0 border border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-extralight text-gray-400"
            >
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="p-2 bg-gray-50 rounded-md outline-0 border border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded border-0 p-2 bg-buttons text-white cursor-pointer opacity-90 hover:opacity-100"
          >
            SignUp
          </button>
          <div className="text-xs text-center w-full mt-4">Already have an account? <Link href={pathName.LOGIN} className="text-landing font-bold">Login</Link></div>
        </form>
        
      </div>
    </>
  );
};

export default SignUp;
