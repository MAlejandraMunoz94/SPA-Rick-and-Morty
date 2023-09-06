
export default function validation (data) {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassNum = /(?=.*?[0-9])/;
  
    if (!data.email){errors.email ="Se requiere un correo electrónico"}
    else if (!regexEmail.test(data.email)) {errors.email ="Ingresa un correo electrónico valido"}
    else if (data.email.length>35){errors.email ="No debe exceder los 35 caracteres"};

    if (!data.password){errors.password="Se requiere una contraseña"}
    else if (data.password.length<6 || data.password.length>10) {errors.password = "Debe tener entre 6 y 10 caracteres"}
    else if (!regexPassNum.test(data.password)){errors.password = "Debe contener almenos un numero"};

    return errors;
};