import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class Todo extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Fazer atividade de BD (que eu n fiz por causa do mini curso)"
                },
                {
                    id: 2,
                    title: "Estudar SO"
                }
            ],
            "_input": ""
        };

        this.handleAdd   = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleAdd(event){
        event.preventDefault();
        let state = Object.assign({}, this.state);
        let item = {
            id: this.state.todos.length + 1,
            title: this.state._input
        };
        state.todos.push(item);
        this.setState(state);
    }

    handleChange(event){
        let value = event.target.value;
        this.setState({ "_input": value });
    }


    render(){
        return (
            <div>
                <TodoForm
                    handleAdd={ this.handleAdd }
                    handleChange={ this.handleChange } />
                <TodoList todos={ this.state.todos } />
            </div>
        );
    }
}

export default Todo;