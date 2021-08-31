import React from 'react'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button} from 'react-bootstrap'


export const Footer = () => {
	let footerStyle={
		position:"absolute",
		top:"100vh",
		width:"100%"

	}
	return (
		<footer  style={footerStyle}>
			<Card className="text-center bg-dark ">
				<Card.Footer className="text-muted">Copyright Anubhab Patnaik -@github.com/codebotx</Card.Footer>
			</Card>
		</footer>
	)
}
