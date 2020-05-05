import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<Fragment>
			<Header siteTitle={data.site.siteMetadata.title} />{' '}
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0 1.0875rem 1.45rem`,
				}}>
				<main> {children} </main>{' '}
				<footer>
					{' '}
					© {new Date().getFullYear()}, Built with {` `}{' '}
					<a href='https://www.gatsbyjs.org'> Gatsby </a>{' '}
				</footer>{' '}
			</div>{' '}
		</Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
