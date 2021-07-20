import React from 'react';


import './Spinner.css';

function Spinner () {
    return (
        <div className="content-loader"><div className="lds-ripple"><div></div><div></div></div></div>
    );
}

export default Spinner;