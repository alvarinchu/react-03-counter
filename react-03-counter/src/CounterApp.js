import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({valor}) => {
    let contador = valor;

    const handleAdd = () => {
        contador++;
    }
    
    return (
        <>
            <h1>CounterApp.</h1>
            <h2>{contador}</h2>
            <button onClick={ handleAdd }>+1</button>

        </>
    ); 
}

CounterApp.propTypes = {
    valor : PropTypes.number    
}

export default CounterApp;