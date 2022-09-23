import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import Axios from 'axios'
import { useState } from "react";

function ForgotPassword() {
  const[email, setEmail] = useState("")
 const onSubmit = () => {
    Axios.post('http://localhost:5000/api/password/forgot', {email: email}
         .then(()=>{
          return alert("code sent!")
         }).catch((err)=>{
          return console.log(err)
         })
 )}
  return (
    <AuthLayout title="Reset Password" subtitle="Enter email to reset password">
      <form className="mt-8 space-y-6" method="POST" onClick={onSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
        </div>

        <div>
          <Button>Send Code</Button>
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

export default ForgotPassword;
