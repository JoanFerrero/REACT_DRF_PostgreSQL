import { useCallback } from "react"
import AuthService from "../services/AuthServices";
import toast from 'react-hot-toast';

export const useAuth = () => {

  const useLoginUser = useCallback(data => {
    const user = {
      "email": data.email,
      "password": data.password
    }
    AuthService.loginUser(user)
      .then(({ data, status }) => {
        if (status === 200) {
          console.log(data)
          toast.success('Login correcto!!');
        }
    }).catch(e => {
      console.error(e);
      toast.error('Correo o contraseña incorrecto!');
    });
  }, [])

  const useRegisterUser = useCallback(data => {
    console.log(data)
    if(data.password1 === data.password2) {
      const user = {
        "username": data.username,
        "email": data.email,
        "password": data.password
      }
      AuthService.registerUser(user)
        .then(({ data, status}) => {
          if (status === 200) {
            console.log(data)
            toast.success('Registro correcto!!')
          }
      }).catch(e => {
        console.error(e);
        toast.error('Datos incorrecto!');
      });
    } else {
      toast.error('Contraseña incorrecta!');
    }
  }, [])

  return { useLoginUser, useRegisterUser }
}