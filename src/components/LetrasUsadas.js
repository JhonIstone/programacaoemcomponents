import React from 'react';
import '../App.css'

function LetrasUsadas(props) {
    return (
        <div className="letras-usadas">
            <p>Letras já usadas:</p>
            <ul>
                {props.letrasUsadas.map((letra, index) => (
                    <li key={index}>{letra}</li>
                ))}
            </ul>
        </div>
    );
}

export default LetrasUsadas;
