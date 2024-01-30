import { useCallback } from "react"
import AuthService from "../services/AuthServices"
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
        }
    }).catch(e => {
      console.error(e);
    });
  }, [])

  const useRegisterUser = useCallback(data => {
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
          }
      }).catch(e => {
        console.error(e);
      });
    } else {
      console.log('Contraseña incorrecta')
    }
  }, [])

  return { useLoginUser, useRegisterUser }
}