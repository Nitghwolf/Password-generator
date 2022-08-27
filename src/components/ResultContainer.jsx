import React from 'react';

const ResultContainer = ({resultEl, copyPassword}) => {
    return (
        <div className="result-container">
            <span id="result">{resultEl}</span>
            <button className="btn" id="clipboard" onClick={copyPassword}>
                <i className="far fa-clipboard"></i>
            </button>
        </div>
    );
}

export default ResultContainer;