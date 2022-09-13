import React from "react";
import '../estilos/tareas.css';
import { AiOutlineClose } from "react-icons/ai";

function Tarea( { id, texto, completada, completarTarea, eliminarTarea } ) {
    return (
        <div className= {completada ? "contenedor-tareas completada" : "contenedor-tareas"}>
            <div className= "texto-tarea"
                onClick={() => completarTarea(id)} >
                {texto}
            </div>
            <div className= "contenedor-iconos"
            onClick={() => eliminarTarea(id)}>
              <AiOutlineClose className= "icono"/>
            </div>
        </div>
    );
}

export default Tarea;