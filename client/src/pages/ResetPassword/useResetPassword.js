import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from '../../services/axios';



function useResetPassword() {
    const {
        register,
        handleSubmit,
        formState : {errors}
    } = useForm();
    const form = {
        password: register('password', {
            required: 'Password is required!',
            minLength: {
                value: 6,
                message: 'Password can not be less than 6 characters!'
            }
        }),
        code: register('token', {
            required: 'Sent token is required!',
            minLength: {
                value: 8,
                message: "Token can not be less than 8 characters!"
            },
            maxLength: {
                value: 8,
                message: "Token can not be more than 8 characters!"
            }
        })
    };

    const navigate = useNavigate()

    const onSubmit = (data) => {
        axios.put('/password/reset', data)
             .then(() => navigate('/login'))
             .catch((err) => toast(err.response.data))
    }

    return {onSubmit, form, handleSubmit, errors }
}

export default useResetPassword