import {  useNavigate } from 'react-router-dom'
import axios from '../../services/axios'
import { useState } from "react";
import { toast } from "react-toastify";

function useForgotPassword() {
    const[email, setEmail] = useState("")
const navigate = useNavigate()
const onSubmit = (e) => {
  e.preventDefault()
  axios.post('/password/forgot', {email})
       .then((res) => navigate('/reset'))
       .catch((err)=> toast(err.response.data))
}
 
return { onSubmit, setEmail};
}

export default useForgotPassword;

