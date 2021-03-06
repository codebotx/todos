import React from 'react'
import { Todoitem } from './todoitem'


export const Todos = (props) => {
	let myStyle ={
		minHeight: "70vh",
		margin:"40px auto"
	}
	return (
		<div className="container my-3" style={myStyle}>
			<h3 className="text-center my-3">Todos List</h3>
			{props.todos.length === 0 ? <div className="text-center">
				No Todos to display. You have succesfully completed all your tasks!</div>:
				props.todos.map((todo) => {
					console.log("agar blank todo araha hai to shayad yaha galti hai",todo.sno);
					return(<Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
			})
			}
		</div>
	)
}
