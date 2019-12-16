import React from 'react'

export default function ToDoItem(props) {

    const completedItemStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }

    return (
        <div className="row d-flex justify-content-center">
            <input type="checkbox" className="col-md-1"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)} /> <p style={props.item.completed ? completedItemStyle : null} className="col-md-9">{props.item.text}
            </p>
        </div>
    )
}
