import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/Input';
import useResetPassword from './useResetPassword';

function ResetPassword() {
    const {onSubmit, handleSubmit, form, errors} = useResetPassword()
  return (
    <div>
         <AuthLayout title="Password Update" subtitle="Enter email and code to update password">
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Code
            </label>
            <Input
              type="text"
              autoComplete="code"
              required
              placeholder="Input token"
              {...form.code}
            />
             <span className="text-sm text-red-500">
              {errors?.token?.message}
            </span>
          </div>
          <div>
            <label htmlFor="Password" className="sr-only">
              Password
            </label>
            <Input  
              type="password"
              autoComplete="password"
              required
              placeholder="Password"
              {...form.password}
            />
             <span className="text-sm text-red-500">
              {errors?.password?.message}
            </span>
          </div>
        </div>

        <div>
          <Button>Update Password</Button>
          <Link
            className="block text-center underline text-blue-500 font-bold mt-3"
            to="/login">
            Cancel
          </Link>
        </div>
      </form>
    </AuthLayout>
    </div>
  )
}

export default ResetPassword