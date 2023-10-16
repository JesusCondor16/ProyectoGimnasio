function Validation(values) {
    let errors = {}
    const contrasenia_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    const correo_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(values.contrasenia === ""){
            errors.contrasenia = "La contraseña no puede estar vacía"
        }
        else if(!contrasenia_pattern.test(values.contrasenia)){
            errors.contrasenia = "La contraseña no coincide"
        }else{
            errors.contrasenia = ""
        }

        if(values.correo === "") {
            errors.correo = "El correo no puede estar vacío"
        }
        else if(!correo_pattern.test(values.correo)){
            errors.correo = "El correo no coincide"
        } else {
            errors.correo = ""
        }
        return errors;
}

export default Validation;