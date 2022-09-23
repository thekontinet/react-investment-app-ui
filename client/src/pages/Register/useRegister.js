import axios from "../../services/axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function useRgister() {
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

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("/users", data)
      .then((res) => navigate("/verify-email"))
      .catch((err) => toast(err.response.data));
  };

  return { onSubmit, form, handleSubmit, errors };
}

export default useRgister;
