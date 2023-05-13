import React from 'react';
import '../App.css'

function PainelForca(props) {
    const tentativasRestantes = props.maxTentativas - props.tentativas;

    return (
        <div className="painel-forca">
            <div className="forca">
                {/* aqui poderia ser adicionada a imagem da forca, caso exista */}
            </div>
            <div className="tentativas-restantes">
                <p>Tentativas restantes: {tentativasRestantes}</p>
            </div>
        </div>
    );
}

export default PainelForca;
