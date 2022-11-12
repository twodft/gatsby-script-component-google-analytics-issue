import React from 'react'
import { Link } from 'gatsby'

const Page = () => {
	return (
		<>
			<h1>Third Page</h1>
			<Link to='/second/'>Go to second page</Link>
			<Link to='/'>Go to home page</Link>
		</>
	)
}

export default Page
