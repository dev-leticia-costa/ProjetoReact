// Importação do React
import React from 'react';

// Declarando a nossa função, pode ser formato arrow ou o convencional exemplo abaixo
// Function FunctionComponents(){ ... }

const FunctionComponents: React.FC = () => {
    const name = "função"
    // armazenando um valor em uma string para consumir no nosso código
    return (
        <div>
            <h2>Esta é a primeira criação de componente da Letícia com o formato de {name}</h2>
            {/* para utilizar valores dinâmicos informe dentro de {} */}
            <p>Componente funcional criado com sucesso!</p>
        </div>
    );
}
    export default FunctionComponents;