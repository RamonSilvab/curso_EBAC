import { useState, useEffect } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log('o estado mudou');
    })

    const alteraNome = (evento) => {
        // setNome(evento.target.value); //acessando o valor do input
        setNome(estadoAnterior => {
            // estadoAnterior = valornovo

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const media = (materiaA + materiaB + materiaC) / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você foi não aprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="text"  placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} /> {/*desestruturação do evento*/}
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;