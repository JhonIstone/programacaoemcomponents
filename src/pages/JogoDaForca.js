import React, { useState, useEffect } from 'react';
import PalavraSecreta from '../components/PalavraSecreta';
import LetrasUsadas from '../components/LetrasUsadas';
import PainelForca from '../components/PainelForca';
import InputLetra from '../components/InputLetra';
import '../App.css';

const palavras = ['BANANA', 'ABACAXI', 'LIMAO', 'LARANJA', 'MELANCIA'];

function JogoDaForca(props) {
    const [palavra, setPalavra] = useState('');
    const [letrasUsadas, setLetrasUsadas] = useState([]);
    const [tentativas, setTentativas] = useState(0);
    const [acertos, setAcertos] = useState([]);
    const [perdeu, setPerdeu] = useState(false);
    const [venceu, setVenceu] = useState(false);

    useEffect(() => {
        const indice = Math.floor(Math.random() * palavras.length);
        setPalavra(palavras[indice]);
    }, []);

    const handleInputLetra = (letra) => {
        letra = letra.toUpperCase();
        if (letrasUsadas.includes(letra)) {
            alert('Essa letra já foi usada!');
            return;
        }

        const novaLetrasUsadas = [...letrasUsadas, letra];
        setLetrasUsadas(novaLetrasUsadas);

        if (palavra.includes(letra)) {
            const novosAcertos = [...acertos, letra];
            setAcertos(novosAcertos);

            if (novosAcertos.length === palavra.length) {
                setVenceu(true);
            }
        } else {
            setTentativas(tentativas + 1);
            if (tentativas === 5) {
                setPerdeu(true);
            }
        }
    };

    const letrasPalavra = palavra.split('');

    return (
        <>
            <h2>Jogo da Forca</h2>
            <PalavraSecreta palavra={palavra} letrasAcertadas={acertos} />
            <LetrasUsadas letrasUsadas={letrasUsadas} />
            <PainelForca tentativas={tentativas} maxTentativas={6} />
            <InputLetra onInputLetra={handleInputLetra} disabled={venceu || perdeu} />
            {venceu && <p>Você ganhou!</p>}
            {perdeu && <p>Você perdeu!</p>}
        </>
    );
}

export default JogoDaForca;
