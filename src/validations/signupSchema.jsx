import { object, string, ref } from "yup";

export const signupSchema = object({
    email:string()
        .email("Ingrese un email valido")
        .required("Ingrese un email"),
    password:string()
        .min(8,"La contraseña debe tener minimo 8 caracteres")
        .required("Ingrese una contraseña"),
    confirmPassword:string()
        .oneOf([ref("password")],"Las contraseñas no son iguales")
        .required("Vuelva a ingresar el email")
});