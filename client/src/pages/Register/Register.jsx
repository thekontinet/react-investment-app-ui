import AuthLayout from "../../layouts/AuthLayout";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import IconButton from "../../components/IconButton";
import Input from "../../components/Input";
import useRgister from "./useRegister";

function Register() {
  const { onSubmit, form, handleSubmit, errors } = useRgister();

  return (
    <AuthLayout title="Register" subtitle="Create a new account">
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="space-y-3 rounded-md shadow-sm">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
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
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
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
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
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
            <input id="remember-me" name="remember-me" type="checkbox" />
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
            Sign up
          </IconButton>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Register;
