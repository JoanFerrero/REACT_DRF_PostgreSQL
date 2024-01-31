import { useCallback } from "react"
import AuthService from "../services/AuthServices";
import toast from 'react-hot-toast';
import { useContextHook } from "./useContextHook";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {

  const { dispathCustom } = useContextHook();
  const navigate = useNavigate()

  const useLoginUser = useCallback(data => {
    const user = {
      "email": data.email,
      "password": data.password
    }
    AuthService.loginUser(user)
      .then(({ data, status }) => {
        if (status === 200) {
          dispathCustom("SET_TOKEN", data.token, "auth")
          dispathCustom("SET_USER", data.user, "auth")
          dispathCustom("SET_IS_AUTH", true, "auth");
          dispathCustom("SET_IS_ADMIN", data.user.type === 'admin', "auth");
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
            dispathCustom("SET_TOKEN", data.token, "auth")
            dispathCustom("SET_USER", data.user, "auth")
            dispathCustom("SET_IS_AUTH", true, "auth");
            dispathCustom("SET_IS_ADMIN", data.user.type === 'admin', "auth");
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

  const useLogOutUser = useCallback(data => {
    dispathCustom("SET_TOKEN", '', "auth")
    dispathCustom("SET_USER", {}, "auth")
    dispathCustom("SET_IS_AUTH", false, "auth");
    dispathCustom("SET_IS_ADMIN", false, "auth");
    navigate('/')
    toast.success('Cerrar sesion correcto!!')
  }, [])

  return { useLoginUser, useRegisterUser, useLogOutUser }
}