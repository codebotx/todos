import React from 'react'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button} from 'react-bootstrap'


export const Footer = () => {
	return (
		<div>
			<Card className="text-center bg-dark">
				<Card.Body>
					<Card.Title>Special title treatment</Card.Title>
					<Card.Text className="text-white">
						With supporting text below as a natural lead-in to additional content.
					</Card.Text>
					<Button variant="secondary">Github</Button>
				</Card.Body>
				<Card.Footer className="text-muted">Copyright Anubhab Patnaik -@github.com/codebotx</Card.Footer>
			</Card>
		</div>
	)
}
