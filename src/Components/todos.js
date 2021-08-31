import React from 'react'
import { Todo } from './todo'
import { Card } from 'react-bootstrap'

export const Todos = (props) => {
	return (
		<div className="container">
			<h3 className="text-center my-3">Todos List</h3>
			{props.todos.length === 0 ? <Card><div className="text-center">
				Congrats! You have succesfully completed all your tasks</div> </Card>:
				props.todos.map((todo) => {
					return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
				})
			}
		</div>
	)
}

