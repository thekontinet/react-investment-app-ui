import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import useEmailVerify from "./useEmailVerify";

function EmailVerify() {
  const { onSubmit, register, errors } = useEmailVerify();
  return (
    <AuthLayout
      title="Verify Email Address"
      subtitle="We've sent a verification link to your email"
    >
      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Enter Token
            </label>
            <input
              type="text"
              className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter varification Token Here"
              {...register("token", { required: "Token is required" })}
            />
            <span className="text-sm text-red-500">
              {errors?.token?.message}
            </span>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <Button variant="primary">Continue</Button>
            <Button variant="secondary">Resend</Button>
          </div>
          <Link
            className="block text-center underline text-blue-500 font-bold mt-3"
            to="/login"
          >
            Cancel
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}

export default EmailVerify;
