import React from 'react';

export default (props) => {
    return (
        <div>
            <h2>Lista de tarefas</h2>
            <ul>
                {
                    props.todos.map((item) => {
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
        </div>
        
    )
}