import React from 'react'
import { Link } from 'gatsby'

const Page = () => {
	return (
		<>
			<h1>Second Page</h1>
			<Link to='/'>Go to home page</Link>
			<Link to='/third/'>Go to third page</Link>
		</>
	)
}

export default Page
