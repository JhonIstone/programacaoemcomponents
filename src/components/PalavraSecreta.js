import React from 'react';

function PalavraSecreta(props) {
    const { palavra, letrasAcertadas } = props;

    const isLetraAcertada = (letra) => letrasAcertadas.includes(letra);

    return (
        <div className="palavra-secreta">
            {palavra.split('').map((letra, index) => (
                <span key={index} className="letra-palavra">
                    {isLetraAcertada(letra) ? letra : '_'}
                </span>
            ))}
        </div>
    );
}

export default PalavraSecreta;
