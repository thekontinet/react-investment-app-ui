import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { ArrowSmallRightIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import IconButton from "../../components/IconButton";
import useLogin from "./useLogin";

function Login() {
  const { onSubmit, form, errors } = useLogin();
  return (
    <AuthLayout title="Login" subtitle="Enter credentials to login">
      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="space-y-3 rounded-md">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Input type="email" placeholder="Email address" {...form.email} />
            <span className="text-sm text-red-500">
              {errors?.email?.message}
            </span>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <Input type="password" placeholder="Password" {...form.password} />
            <span className="text-sm text-red-500">
              {errors?.password?.message}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link
              to="/forgot"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        <div>
          <IconButton
            variant="primary"
            position="right"
            className="w-full"
            icon={
              <ArrowSmallRightIcon
                className="h-6 w-6 text-indigo-200"
                aria-hidden="true"
              />
            }
          >
            Login
          </IconButton>
          <Link
            className="block text-center underline text-blue-500 font-light mt-3"
            to="/register"
          >
            Create a new account
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;