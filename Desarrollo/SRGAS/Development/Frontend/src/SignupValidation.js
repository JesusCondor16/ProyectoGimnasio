function Validation(values) {
    let errors = {};
  
    const campos = [
      "contrasenia",
      "correo",
      "apellido",
      "nombre",
      "dni",
      "fecha_nacimiento",
    ];
  
    campos.forEach((campo) => {
      if (!values[campo]) {
        errors[campo] = `El campo de ${campo} es obligatorio`;
      } else {
        errors[campo] = "";
      }
    });
  
    return errors;
  }
  
  export default Validation;