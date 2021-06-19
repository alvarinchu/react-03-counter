import React from 'react';
import PropTypes from 'prop-types';

const MiPrimeraApp = ({saludo, subtitulo}) => {

    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </>);

}

MiPrimeraApp.defaultProps = {
    subtitulo : 'rueda fortuna'
}  

export default MiPrimeraApp;