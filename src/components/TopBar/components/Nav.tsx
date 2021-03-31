import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const queryString = window.location.search

const urlParams = new URLSearchParams(queryString)

const refer: any = urlParams.get('ref')

const Nav: React.FC = () => {
	return (
		<StyledNav>
			<StyledLink
				exact
				activeClassName="active"
				to={{ pathname: '/', search: '?ref=' + refer }}
			>
				Home
			</StyledLink>
			<StyledLink
				exact
				activeClassName="active"
				to={{ pathname: '/farms', search: '?ref=' + refer }}
			>
				Menu
			</StyledLink>
			<StyledAbsoluteLink
				href="https://alpha.baoswap.xyz/#/swap"
				target="_blank"
			>
				Swap
			</StyledAbsoluteLink
			<StyledAbsoluteLink
				href="https://snapshot.page/#/baovotes.eth"
				target="_blank"
			>
				Vote
			</StyledAbsoluteLink>
			<StyledAbsoluteLink
				href="https://gov.bao.finance"
				target="_blank"
			>
				Forum
			</StyledAbsoluteLink>
			<StyledAbsoluteLink href="https://docs.bao.finance" target="_blank">
				About
			</StyledAbsoluteLink>
			<StyledAbsoluteLink href="https://docs.bao.finance" target="_blank">
				FAQ
			</StyledAbsoluteLink>
		</StyledNav>
	)
}

const StyledNav = styled.nav`
	align-items: center;
	display: flex;
`

const StyledLink = styled(NavLink)`
	color: ${(props) => props.theme.color.grey[400]};
	font-weight: 700;
	padding-left: ${(props) => props.theme.spacing[3]}px;
	padding-right: ${(props) => props.theme.spacing[3]}px;
	text-decoration: none;
	&:hover {
		color: ${(props) => props.theme.color.grey[500]};
	}
	&.active {
		color: ${(props) => props.theme.color.primary.main};
	}
	@media (max-width: 400px) {
		padding-left: ${(props) => props.theme.spacing[2]}px;
		padding-right: ${(props) => props.theme.spacing[2]}px;
	}
`

const StyledAbsoluteLink = styled.a`
	color: ${(props) => props.theme.color.grey[400]};
	font-weight: 700;
	padding-left: ${(props) => props.theme.spacing[3]}px;
	padding-right: ${(props) => props.theme.spacing[3]}px;
	text-decoration: none;
	&:hover {
		color: ${(props) => props.theme.color.grey[500]};
	}
	&.active {
		color: ${(props) => props.theme.color.primary.main};
	}
	@media (max-width: 400px) {
		padding-left: ${(props) => props.theme.spacing[2]}px;
		padding-right: ${(props) => props.theme.spacing[2]}px;
	}
`

export default Nav
