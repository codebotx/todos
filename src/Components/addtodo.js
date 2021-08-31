import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

export const Addtodo = (props) => {

	const[title, setTitle]=useState("");
	const[desc, setDesc]=useState("");


	const submit= (e)=>{
		e.preventDefault();
		if(!title || !desc){
			alert("Title or desc not defined!")
		}
		props.addTodo(title,desc)
	}


	return (
		<div className="container">
			<h3 className='text-center my-3'>
				Add a todo
			</h3>
			<Form onSubmit={submit}>
				<Form.Group className="mb-3" controlId="title">
					<Form.Label>Todo Title</Form.Label>
					<Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}placeholder="Enter text here" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="desc">
					<Form.Label>Todo Description</Form.Label>
					<Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter desc. here" />
				</Form.Group>
				<Button variant="primary" type="submit" className='btn btn-sm'>
					Add Todo
				</Button>
			</Form>
		</div>
	)
}
