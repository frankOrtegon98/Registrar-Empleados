let empleados = [];

function Empleado(nombre, apellido, fechaNacimiento, edad, cargo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = edad;
    this.cargo = cargo;
}

function agregarEmpleado(){

    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let fechaNacimiento = document.getElementById("txtNacimiento").value;
    let edad = document.getElementById("txtEdad").value;
    let cargo = document.getElementById("txtCargo").value;

    let empleado = new Empleado(nombre,apellido,fechaNacimiento, edad,cargo);
    empleados.push(empleado);

    alert("Empleado ha sido registrado");
}

function mostrarEmpleados(){

    let listado = "";

    for(let empleado of empleados){
        for(let atributo in empleado){
            listado = listado + atributo.toUpperCase() + ": " + empleado[atributo] + ",";  
        }
        listado = listado + "\n";
    }

    alert(listado);

}