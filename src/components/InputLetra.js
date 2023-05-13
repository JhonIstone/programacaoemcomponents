import React, { useState } from 'react';

function InputLetra({ onInputLetra }) {
    const [letra, setLetra] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (letra) {
            onInputLetra(letra);
            setLetra('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="letra">Digite uma letra:</label>
            <input
                id="letra"
                type="text"
                maxLength={1}
                value={letra}
                onChange={(event) => setLetra(event.target.value.toUpperCase())}
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default InputLetra;
