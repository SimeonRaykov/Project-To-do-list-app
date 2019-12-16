import React from 'react';
import ToDoItem from './ToDoItem';
import toDoData from './toDoData';

import { Component } from 'react'

export default class ListOfItems extends Component {
    constructor() {
        super();
        this.state = {
            todos: toDoData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevstate => {
            const updateTodos = prevstate.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })

            return {
                todos: updateTodos
            }
        })
    }
    render() {
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}
            handleChange={this.handleChange} />)
        return (
            <div className="container w-25">
                {todoItems}
            </div>
        )
    }
}

