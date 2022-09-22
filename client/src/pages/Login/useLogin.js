import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "../../services/axios";
import { toast } from "react-toastify";

function useLogin() {
  const { register, handleSubmit, formState: errors } = useForm();
  const form = {
    email: register("email", { required: "email is required" }),
    password: register("password", { required: "password is required" }),
  };
  const navigate = useNavigate();
  const onSubmit = handleSubmit(function (data) {
    axios
      .post("/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data);
        navigate("/dashboard");
      })
      .catch((err) => toast(err.response.data));
  });
  return { onSubmit, errors, form };
}

export default useLogin;
