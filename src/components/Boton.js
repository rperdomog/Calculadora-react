import React from "react";
import '../styles/Boton.css'

function Boton(props) {
    const isOperator = value => {
        return isNaN(value)&&(value!== '.'&&(value!=='='));
    }
    return (
        <div
            className={`button-container ${isOperator(props.children) ? 'operator' : null}`.trim()}
            onClick={()=> props.handleClick(props.children)}>
            {props.children}
        </div>
    );
}

export { Boton }