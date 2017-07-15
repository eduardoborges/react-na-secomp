import React from 'react';

export default (props) => {
    return (
    <div>
        <form onSubmit={ props.handleAdd }>
            <input type="text" onChange={ props.handleChange  } />
            <button type="button">Adicionar item</button>
        </form>
    </div>);
}