import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = {
    name: register("name", {
      required: "Name is required",
      maxLength: { value: 200, message: "Name is too long" },
    }),
    email: register("email", {
      required: "Email is required",
      pattern: {
        value:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "Email is invalid",
      },
    }),
    password: register("password", {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password should be atleast 6 characters long",
      },
    }),
  };

  const onSubmit = (data) => {
    console.log(data);
    alert("registered");
  };

  return (
    <AuthLayout title="Register" subtitle="Create a new account">
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Fullname"
              {...form.name}
            />
            <span className="text-sm text-red-500">
              {errors?.name?.message}
            </span>
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              {...form.email}
            />
            <span className="text-sm text-red-500">
              {errors?.email?.message}
            </span>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              {...form.password}
            />
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
              Agree to our T & C
            </label>
          </div>

          <div className="text-sm">
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Already have an account ?
            </Link>
          </div>
        </div>

        <div>
          <Button>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign up
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Register;
