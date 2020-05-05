import { Button } from '@material-ui/core'
import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = () => (
	<Layout>
		<SEO title='Home' />
		<Link to='/page-2/'>
			<Button variant='contained' color='primary'>
				Go{' '}
			</Button>{' '}
		</Link>{' '}
	</Layout>
)

export default IndexPage
