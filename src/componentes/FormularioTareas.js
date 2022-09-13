import React, {useState} from "react";
import "../estilos/FormularioTareas.css";
import { v4 as uuidv4 } from "uuid";

function IngresarTarea(props){

    const [input, setInput] = useState("");

    const manejarCambio = e =>{
        setInput(e.target.value);
        console.log(e.target.value);
    }

    const envio = e => {
        e.preventDefault();
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        } 
        
        props.onSubmit(tareaNueva);
    }
    return (
        <form className="ingresar-tarea"
        onSubmit={envio}>
            <input
            className="tarea-input"
            type="text"
            placeholder="Añadir nueva tarea"
            name="texto"
            onChange={manejarCambio}
            />
            <button className="tarea-boton">Añadir tarea</button>
        
        </form>
    )
}

export default IngresarTarea;