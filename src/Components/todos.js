import React from 'react'
import {Todo} from './todo'


export const Todos = (props) => {
	return (
		<div className="container">
			<h3>Todos List</h3>
			{/* {props.todos} */}
			<Todo todo={props.todos[0]} />

		</div>
	)
}

