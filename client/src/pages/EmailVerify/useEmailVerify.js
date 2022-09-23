import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "@/services/axios";

function useEmailVerify() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(function (data) {
    axios
      .post("/users/email/verify", data)
      .then(() => navigate("/login"))
      .catch((err) => toast(err.response.data));
  });
  return { onSubmit, register, errors };
}

export default useEmailVerify;
